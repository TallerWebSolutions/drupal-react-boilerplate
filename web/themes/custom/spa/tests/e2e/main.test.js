
module.exports = {
  '@tags': ['smoke'],

  'Should render app' (client) {
    const page = client.page.home()

    page.navigate()
      .waitForElementVisible('@HelloWorld')
      .assert.containsText('@HelloWorld', 'Hello world!')

    client.end()
  },
}
