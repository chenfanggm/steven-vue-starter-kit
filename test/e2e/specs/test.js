// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {

    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    var devServer = browser.globals.devServerURL

    browser
    .url(devServer)
      .waitForElementVisible('#mainApp', 5000)
      .assert.containsText('span', 'Add some todos')
      .end()
  }
}
