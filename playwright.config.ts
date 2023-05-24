import { devices } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';
import { testConfig } from './testConfig';
const ENV = process.env.ENV;

// if (!ENV || ![`qa`, `dev`, `qaApi`, `devApi`].includes(ENV)) {
//   console.log(`Please provide a correct environment value like "npx cross-env ENV=qa|dev|qaApi|devApi"`);
//   process.exit();
// }

const config: PlaywrightTestConfig = {


  //Global Setup to run before all tests
  globalSetup: `./global-setup`,

  //Global Teardown to run after all tests
  globalTeardown: `./global-teardown`,

  //sets timeout for each test case
  timeout: 120000,

  //number of retries if test case fails
  retries: 0,


  //Reporters
  reporter: [[`./CustomReporterConfig.ts`], [`experimental-allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }], ['junit', {outputFile: 'resultJunit.xml'}],['json', {  outputFile: 'test-results.json' }]],

  projects: [
    {
      name: `Chrome`,
      //testMatch: [`CreateNewSyntheticProduct.test.ts`],
      use: {
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        //Picks Base Url based on User input
        baseURL: testConfig[process.env.ENV],

        //Browser Mode
        headless: false,

        //Browser height and width
        //viewport: { width: 1500, height: 730 },

        viewport: { width: 1200, height: 600 },
        
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        //acceptDownloads: true,

        //Artifacts
        //screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        //trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
      grep: [new RegExp("VerifyRequirmentsForPasswordField")]
    },
    {

      name: `ChromeSmoke`,
      //testMatch: [`CreateNewSyntheticProduct.test.ts`],
      use: {
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        //Picks Base Url based on User input
        baseURL: testConfig[process.env.ENV],

        //Browser Mode
        headless: false,

        //Browser height and width
        //viewport: { width: 1500, height: 730 },

        viewport: { width: 1200, height: 600 },
        
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        //acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
      grep: [new RegExp("@Test")]
    },
    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        baseURL: testConfig[process.env.ENV],
        headless: false,
        viewport: { width: 1200, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    {
      name: `Edge`,
      use: {
        browserName: `chromium`,
        channel: `msedge`,
        baseURL: testConfig[process.env.ENV],
        headless: false,
        //viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `WebKit`,
      use: {
        browserName: `webkit`,
        baseURL: testConfig[process.env.ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `ControlCenter`,
      //testMatch: [`CreateNewSyntheticProduct.test.ts`],
      use: {
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        //Picks Base Url based on User input
        baseURL: testConfig[process.env.ENV],

        //Browser Mode
        headless: false,

        //Browser height and width
        //viewport: { width: 1500, height: 730 },

        viewport: { width: 1250, height: 720 },
        
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        //acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
      grep: [new RegExp("@ControlCenter")]
    },
    {
      name: `Records`,
      use: {
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        //Picks Base Url based on User input
        baseURL: testConfig[process.env.ENV],

        //Browser Mode
        headless: false,

        //Browser height and width
        //viewport: { width: 1500, height: 730 },

        viewport: { width: 1250, height: 720 },
        
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        //acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
      grep: [new RegExp("@Records")]
    },
    {
      name: `PageNavigation`,
      use: {
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        baseURL: testConfig[process.env.ENV],

        headless: false,

        viewport: { width: 1250, height: 720 },
        
        ignoreHTTPSErrors: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        launchOptions: {
          slowMo: 0
        }
      },
      grep: [new RegExp("@PageNavigation")]
    }
  ],
};
export default config;
