import { test as baseTest, TestInfo } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { NewTabInstatntTest } from '@pages/InstantTestNewWindow';
import { EndpointCC } from '@pages/EndpointControlCenter';
import { SyntheticControlCenter } from '@pages/SyntheticControlCenter';
import { BaseClass } from './BaseClass';
import { TestResult } from '@playwright/test/reporter';
import { Verification } from '@verification/verification';

const test = baseTest.extend<{
    baseClass: BaseClass;
    loginPage: LoginPage;
    instantTabWindow : NewTabInstatntTest;
    endpointControlCenter : EndpointCC;
    syntheticControlCenter: SyntheticControlCenter;
    verification: Verification;

}>({
    baseClass: async({page}, use, testInfo : TestInfo) => {
        let base = new BaseClass(page);
        await base.beforeEveryTest();
        await use(base);
        await base.fullPageScreenShot(testInfo);
    },
    loginPage: async ({ page }, use, testInfo) => {
        let login = new LoginPage(page);
        // await login.navigateToCPUrl();
        // await login.loginToCP();
        await use(login);
        //await login.takescreen(testInfo);
        // //await login.openDivisionList();
        //await use(new LoginPage(page));
    },
    instantTabWindow : async({page}, use) => {
        await use(new NewTabInstatntTest(page))
    },
    endpointControlCenter : async({page}, use) => {
        await use(new EndpointCC(page));
    },
    syntheticControlCenter : async({page}, use) => {
        await use(new SyntheticControlCenter(page));
    },
    verification : async({page}, use) => {
        //await use(new Verification(page));
        await use(new Verification(page));
    }

});

export default test;