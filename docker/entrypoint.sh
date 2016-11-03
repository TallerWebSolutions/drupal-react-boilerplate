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
  # 1 - Install core and other dependencies.
  composer install

  # 2 - Copy configuration files.
  sudo cp /drupal/app/web/sites/example.settings.local.php.sample /drupal/app/web/sites/default/settings.local.php
  sudo chmod -R 777 /drupal/app/web/sites/default/settings.local.php

  # 3 - Create a directory for files.
  sudo mkdir -p /drupal/app/web/sites/default/files

  # 4 - Install standard profile.
  cd /drupal/app/web
  drush si standard --site-name="Drupal 8" --account-name="admin" --account-pass="password" -y

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

exec "$@"
