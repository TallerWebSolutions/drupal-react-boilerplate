# Drupal React Boilerplate

This project is a kickstart to get a [React](https://facebook.github.io/react/) application served and backed by [Drupal 8](https://www.drupal.org/) in an easy and preconfigured environment with Docker.

> This is and extension to the [drupal-boilerplate](https://github.com/TallerWebSolutions/drupal-boilerplate).

## Quick start

 1. Clone this repo using `git clone --depth=1 https://github.com/TallerWebSolutions/drupal-boilerplate.git && cd drupal-boilerplate`
 1. Install [Docker Compose](https://docs.docker.com/compose/);
 1. Run `make run`;
 1. Make a coffee. It takes a while the first time you run it.
 1. Go to `cd /drupal/app/web/themes/custom/spa`
 1. Run `yarn` ([what is Yarn?](https://yarnpkg.com/))
 1. Enjoy!

## Overview

This boilerplate is a starting point for developers looking for replacing the end-user interface of Drupal with a front-end built with React. It sets up all the app's building process using [webpack](https://webpack.github.io/), so getting started is a pece of cake. In fact, if you followed the quick start you already builded the application once.

### Tell me more

The Drupal work (building modules, for instance) is done in the same way the [drupal-project](https://github.com/drupal-composer/drupal-project) does. Follow that guide if you have any problems.

The React work is done inside `web/themes/custom/spa`. It has basically the structure of a single page application project, with the addition that it is a Drupal theme too. Have a look at that directory for more information.

There is also a profile called "react". This profile's purpose is to setup the theme configuration (serve the theme on specific urls only) and serve initial site-wide configuration.

### What does it *not* do?

1. The app is basically a theme.
1. The theme is intentionally served only on the `app/*` url. This avoid conflicts with other administrative interfaces.
1. This does no server side rendering.
1. There is no pre-configured connection between the app and the backend.

## How should I extend it?

Well, this project is a boilerplate, so don't expect nor worry about keeping it possible to update your code at any time. You should probably just take over, rename the theme if want, and control how the profile does it work too.

#### Docker containers

This project uses Docker Compose to create a container for the application, one for the database, and one for Selenium to run e2e tests. The application container is based on the [taller/drupal-node](https://hub.docker.com/r/taller/drupal-node/) image, which includes:

1. NGINX
1. php5-fpm
1. Composer
1. Drush
1. Node (7.0)
1. npm
1. yarn
