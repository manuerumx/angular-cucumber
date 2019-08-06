// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/**
 * @type { import("protractor").Config }
 */

exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/features/**/*.feature'],
  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],
  directConnect: false,
  baseUrl: 'http://my-project:4200/',
  seleniumAddress: 'http://selenium-hub:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: ['./src/features/bootstrap/step_definitions/**/*.steps.ts'],
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    browser.manage().window().maximize();
  }
};
