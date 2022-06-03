import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { NewTabInstatntTest } from '@pages/InstantTestNewWindow';
import { EndpointCC } from '@pages/EndpointControlCenter';
import { SyntheticControlCenter } from '@pages/SyntheticControlCenter';

const test = baseTest.extend<{
    loginPage: LoginPage;
    instantTabWindow : NewTabInstatntTest;
    endpointControlCenter : EndpointCC;
    syntheticControlCenter: SyntheticControlCenter

}>({
    loginPage: async ({ page }, use) => {
        let login = new LoginPage(page);
        await login.navigateToCPUrl();
        await login.loginToCP();
        await use(login);
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

});

export default test;