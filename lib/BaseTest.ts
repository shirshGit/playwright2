import { test as baseTest, TestInfo } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { NewTabInstatntTest } from '@pages/InstantTestNewWindow';
import { EndpointCC } from '@pages/EndpointControlCenter';
import { SyntheticControlCenter } from '@pages/SyntheticControlCenter';
import { BaseTestUtility } from './BaseTestUtility';
import { TestResult } from '@playwright/test/reporter';
import { Verification } from '@verification/verification';
import { SyntheticProductDetailPage } from '@pageobjects/ControlCenter/SyntheticProductDeatils';
import { SideNavBar } from '@pageobjects/SideNavBar/SideNavigationBar';
import { SyntheticFolderDetailPage } from '@pageobjects/ControlCenter/SyntheticFolderDetail';
import { SynControlCenterPage } from '@pageobjects/ControlCenter/SyntheticControlCenter';
import { SyntheticLocationBlade } from '@pageobjects/ControlCenter/SyntheticLocationBlade';
import { SyntheticDetailPage } from '@pageobjects/ControlCenter/SyntheticDetailsPage';
import { Utility } from '@util/Utility';
import { SyntheticTestDetailPage } from '@pageobjects/ControlCenter/SyntheticTestDetail';
import { TestUtility } from '@util/TestUtility';
import { ContactDetailsPage } from '@pageobjects/Contacts/ContactsDetailPage';
import { ContactsPage } from '@pageobjects/Contacts/ContactsPage';


const test = baseTest.extend<{
    baseTestUtil: BaseTestUtility;
    loginPage: LoginPage;
    instantTabWindow: NewTabInstatntTest;
    endpointControlCenter: EndpointCC;
    syntheticControlCenter: SyntheticControlCenter;
    verification: Verification;
    sideNavigationBar: SideNavBar;
    synCCPage: SynControlCenterPage;
    syntheticDetailsPage: SyntheticDetailPage;
    syntheticProductDetailPage: SyntheticProductDetailPage;
    syntheticFolderDetailPage: SyntheticFolderDetailPage;
    synLocationBlade: SyntheticLocationBlade;
    util: Utility;
    syntheticTestDetailPage: SyntheticTestDetailPage;
    contactDetailsPage: ContactDetailsPage;
    contactsPage : ContactsPage;

}>({
    baseTestUtil: async ({ page }, use, testInfo: TestInfo) => {
        let base = new BaseTestUtility(page);
        await base.beforeEveryTest();
        await use(base);
        await base.fullPageScreenShot(testInfo);
    },
        let login = new LoginPage(page);
        await use(login);
    },
    instantTabWindow: async ({ page }, use) => {
        await use(new NewTabInstatntTest(page))
    },
    endpointControlCenter: async ({ page }, use) => {
        await use(new EndpointCC(page));
    },
    syntheticControlCenter: async ({ page }, use) => {
        await use(new SyntheticControlCenter(page));
    },
    verification: async ({ page }, use) => {
        await use(new Verification(page));
    },
    syntheticProductDetailPage: async ({ page }, use) => {
        await use(new SyntheticProductDetailPage(page));
    },
    sideNavigationBar: async ({ page }, use) => {
        await use(new SideNavBar(page));
    },
    syntheticFolderDetailPage: async ({ page }, use) => {
        await use(new SyntheticFolderDetailPage(page));
    },
    synCCPage: async ({ page }, use) => {
        await use(new SynControlCenterPage(page));
    },
    synLocationBlade: async ({ page }, use) => {
        await use(new SyntheticLocationBlade(page));
    },
    syntheticDetailsPage: async ({ page }, use) => {
        await use(new SyntheticDetailPage(page));
    },
    util: async ({},use) => {
        await use(new Utility());
    },
    syntheticTestDetailPage: async ({ page }, use) => {
        await use(new SyntheticTestDetailPage(page));
    },
    testUtilility : async ({ page }, use) => {
        await use(new TestUtility());
    },
    contactDetailsPage: async ({ page }, use) => {
        await use(new ContactDetailsPage(page));
    },
    contactsPage: async ({ page }, use) => {
        await use(new ContactsPage(page));
    },

  

   

});

export default test;