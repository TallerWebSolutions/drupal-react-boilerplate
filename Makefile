SHELL := /bin/bash # Use bash syntax
.PHONY: run in mysql stop clean build

# Configure environment.
# ----------------------

export TZ=America/Sao_Paulo
export USER_ID=$(shell id -u)

# @TODO Hack for MacOSX or other OS which has the same group id
#       than the containers user.
export GROUP_ID=$(shell if [ `id -g` == '20' ]; then echo '1000'; else echo `id -g`; fi)

run:
	docker-compose run --service-ports --rm app

in:
	docker exec -it $(shell docker-compose ps | grep _app_run_ | cut -d" " -f 1) /bin/bash

test:
	docker-compose run --service-ports --rm app scripts/test.sh

mysql:
	docker exec -it drupal-react-boilerplate-database mysql -h localhost -u root -ppassword drupal

stop:
	docker-compose stop

clean:
	docker-compose down

build:
	docker-compose build app
