#!/bin/bash

set -e

# Start services and loggers.
# ---------------------------

sudo service php5-fpm restart > /tmp/php.log
sudo service nginx restart > /tmp/nginx.log


# Await database.
# ---------------.

while ! nc -q 1 database-host 3306 </dev/null; do sleep 3; done

echo ""
echo "--------------------------------------"
echo "--------- Database connected ---------"
echo "--------------------------------------"
echo ""


# Install Drupal, if not installed yet.
# -------------------------------------

if [ ! -f /drupal/app/web/sites/default/settings.local.php ]
then
  # 1 - Create basid files and ensure permissions.
  mkdir -p /drupal/app/web/sites/default/files

  # 2 - Install core and other dependencies.
  composer install

  # 3 - Copy configuration files.
  sudo cp /drupal/app/web/sites/example.settings.local.php /drupal/app/web/sites/default/settings.local.php
  sudo chmod -R 777 /drupal/app/web/sites/default/settings.local.php

  # 4 - Configure database connection based on docker-compose env variables.
  sed -i "s/{MYSQL_DATABASE}/${MYSQL_DATABASE}/g" /drupal/app/web/sites/default/settings.local.php
  sed -i "s/{MYSQL_PASSWORD}/${MYSQL_PASSWORD}/g" /drupal/app/web/sites/default/settings.local.php
  sed -i "s/{MYSQL_USER}/${MYSQL_USER}/g" /drupal/app/web/sites/default/settings.local.php

  # 5 - Install standard profile.
  cd /drupal/app/web
  ../vendor/bin/drush si standard --site-name="Drupal 8" --account-name="admin" --account-pass="password" -y

  cd /drupal/app
fi


# Ensure permissions are correct.
# -------------------------------

sudo chmod -R 777 /drupal/app/web/sites/default/files
sudo chmod 777 /drupal/app/web/sites/default/settings.local.php
sudo chmod +w -R /drupal/app/web/sites/default

echo ""
echo "--------------------------------------"
echo "--- Virtual Marchine ready to work ---"
echo "--------------------------------------"
echo ""
echo "Access your Drupal site at http://$(hostname -i)"
echo ""

exec "$@"
