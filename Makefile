SHELL := /bin/bash # Use bash syntax
.PHONY: run in mysql stop clean build

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
