const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  require('cypress-grep/src/plugin')(config)
  allureWriter(on, config);
  return config;
}
