#!/bin/bash

# Drupal tests
/usr/bin/php ./web/core/scripts/run-tests.sh --php /usr/bin/php --sqlite /tmp/test.sqlite --verbose --color Drupal

# SPA tests
# @TODO: fix bash.bashrc nvm installing.
source /usr/local/nvm/nvm.sh
(cd /drupal/app/web/themes/custom/spa && npm run test)
