exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      bidiProtocol: false,
      url: 'https://magento.softwaretestingboard.com/',
      browser: 'Chrome',
      windowSize: 'maximize',
      accessibility: true,
      performance: 'assert',
      args: [
        '--start-maximized',
      ],
    }
  },
  include: {
    I: './steps_file.js',
    //I: '/Pages/Homepage.js'

  },

  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: ['./features/*.feature', './features/*/*.feature'],
    steps: [
      './step_definitions/steps.js',
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  tests: './*_test.js',

  name: 'Assignment'
}