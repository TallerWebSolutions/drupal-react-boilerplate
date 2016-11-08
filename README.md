# Drupal Boilerplate

This project is a kickstart to get a [Composer](https://getcomposer.org/) managed [Drupal 8](https://www.drupal.org/) website development environment up and running in the lowest time possible.

> See also: [drupal-react-boilerplate](https://github.com/TallerWebSolutions/drupal-react-boilerplate), an extension of this boilerplate to setup a Drupal backed React app.

## Quick start

 1. Clone this repo using `git clone --depth=1 https://github.com/TallerWebSolutions/drupal-boilerplate.git && cd drupal-boilerplate`
 1. Install [Docker Compose](https://docs.docker.com/compose/);
 1. Run `make run`;
 1. Make a coffee. It takes a while the first time you run it.
 1. Enjoy!

#### Docker containers

This project uses Docker Compose to create a container for the application and one for the database. The application container is based on the [taller/drupal](https://hub.docker.com/r/taller/drupal/) image, which includes:

1. NGINX
1. php5-fpm
1. Composer
1. Drush
