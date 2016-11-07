SHELL := /bin/bash # Use bash syntax
.PHONY: run in mysql stop clean build

run:
	docker-compose run --service-ports --rm app /bin/bash

in:
	docker exec -it $(shell docker-compose ps | grep _app_run_ | cut -d" " -f 1) /bin/bash

test:
	/usr/bin/php ./web/core/scripts/run-tests.sh \
	--php /usr/bin/php \
	--sqlite /tmp/test.sqlite \
	--verbose --color drupal

mysql:
	docker exec -it drupal-boilerplate-database mysql -h localhost -u root -ppassword drupal

stop:
	docker-compose stop

clean:
	docker-compose down

build:
	docker-compose build app
