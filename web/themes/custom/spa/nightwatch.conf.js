/* eslint-disable quote-props */
const hostname = process.env.LAUNCH_URL || require('shelljs').exec('hostname -i', { silent: true }).replace(/^\s+|\s+$/g, '')

module.exports = {
  'src_folders': ['tests/e2e'],
  'output_folder': 'tests/results',
  'custom_commands_path': '',
  'custom_assertions_path': '',
  'page_objects_path': 'tests/e2e/pages',
  'globals_path': '',

  'selenium': {
    'start_process': false,
    'host': 'selenium',
    'port': 4444
  },

  'live_output': true,

  'test_workers': {
    'enabled': true,
    'workers': 'auto'
  },

  'test_settings': {
    'default': {
      'filter': '**/*.test.js',
      'launch_url': `http://${hostname}/app`,
      'selenium_port': 4444,
      'selenium_host': 'selenium',

      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': true,
        'path': 'tests_output/screenshots'
      },

      'silent': true,

      'globals': {
        'waitForConditionTimeout': 3000
      },

      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
}

if (process.env.REAL_BROWSER) {
  module.exports.selenium = {
    'start_process': true,
    'server_path': 'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar',
    'log_path': '',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': 'node_modules/chromedriver/lib/chromedriver/chromedriver',
      'webdriver.ie.driver': ''
    }
  }

  module.exports.test_settings.default.selenium_host = 'localhost'
}
