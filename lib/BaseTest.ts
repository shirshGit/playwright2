import { test as baseTest, TestInfo } from '@playwright/test';
import { LoginPage } from '@pageobjects/Login/LoginPage';
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
import { UserrolePage } from '@pageobjects/Userrole/UserrolePage';
import { UserroleDetailPage } from '@pageobjects/Userrole/UserroleDetailPage';
import { RecordsPage } from '@pageobjects/Records/RecordsPage';
import { SourceSelectorPage } from '@pageobjects/Records/SourceSelecterPage';
import { CharmBar } from '@pageobjects/CharmBar/CharmBar';
import { SmartboardPage } from '@pageobjects/Smartboard/SmartboardPage';
import { SourceSelectorSmartboard } from '@pageobjects/Smartboard/SourceSelectorSmartboard';
import { ExplorerPage} from '@pageobjects/Explorer/ExplorerPage';
import { SourceSelectorExplorer } from '@pageobjects/Explorer/SourceSelectorExplorer';
import {ControlCenterRecords } from'@pageobjects/ControlCenter/ControlCenterRecords';
import { DashboardBlade } from '@pageobjects/OverviewDashboard/DashboardBlade';
import { TestOverviewDashboard } from '@pageobjects/OverviewDashboard/TestOverviewDashboardPage';
import { DefaultDashboardPage } from '@pageobjects/OverviewDashboard/DefaultDashboardPage';
import { DashboardRecordListPage } from '@pageobjects/OverviewDashboard/DashboardRecordsListPage';
import { ExplorerRecordListPage } from '@pageobjects/Explorer/ExplorerRecordListPage';
import { EndpointOverviewDashboard } from '@pageobjects/OverviewDashboard/EndpointMonitorOverview';
import { BGPOverviewDashboard } from '@pageobjects/OverviewDashboard/BGPOverviewDashboard';

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
    testUtility : TestUtility;
    contactDetailsPage: ContactDetailsPage;
    contactsPage : ContactsPage;
    userrolePage: UserrolePage;
    userroleDetailPage : UserroleDetailPage;
    recordsPage: RecordsPage;
    sourceSelectorPage : SourceSelectorPage;
    charmBar : CharmBar;
    smartboardPage: SmartboardPage;
    sourceSelectorSmartboard : SourceSelectorSmartboard;
    explorerPage : ExplorerPage;
    sourceSelectorExplorer : SourceSelectorExplorer;
    controlCenterRecords : ControlCenterRecords;
    dashboardBlade : DashboardBlade;
    defaultDashboardPage : DefaultDashboardPage;
    testOverviewDashboard : TestOverviewDashboard;
    dashboardRecordListPage : DashboardRecordListPage;
    explorerRecordListPage : ExplorerRecordListPage;
    endpointOverviewDB: EndpointOverviewDashboard;
    bgpOverviewDB: BGPOverviewDashboard;

}>({
    baseTestUtil: async ({ page }, use, testInfo: TestInfo) => {
        let base = new BaseTestUtility(page);
        await base.beforeEveryTest();
        await use(base);
        await base.fullPageScreenShot(testInfo);
    },

     loginPage: async ({ page }, use, testInfo) => {
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
    testUtility : async ({ page }, use) => {
        await use(new TestUtility());
    },
    contactDetailsPage: async ({ page }, use) => {
        await use(new ContactDetailsPage(page));
    },
    contactsPage: async ({ page }, use) => {
        await use(new ContactsPage(page));
    },
    userroleDetailPage: async ({ page }, use) => {
        await use(new UserroleDetailPage(page));
    },
    userrolePage: async ({ page }, use) => {
        await use(new UserrolePage(page));
    },
    recordsPage: async ({ page }, use) => {
        await use(new RecordsPage(page));
    },
    sourceSelectorPage: async ({ page }, use) => {
        await use(new SourceSelectorPage(page));
    },
    charmBar: async ({ page }, use) => {
        await use(new CharmBar(page));
    },
    smartboardPage: async ({ page }, use) => {
        await use(new SmartboardPage(page));
    },
    sourceSelectorSmartboard: async ({ page }, use) => {
        await use(new SourceSelectorSmartboard(page));
    },
    explorerPage: async ({ page }, use) => {
        await use(new ExplorerPage(page));
    },
    sourceSelectorExplorer: async ({ page }, use) => {
        await use(new SourceSelectorExplorer(page));
    },
    controlCenterRecords: async ({ page }, use) => {
        await use(new ControlCenterRecords(page))
    },
    dashboardBlade: async ({ page }, use) => {
        await use(new DashboardBlade(page));
    },
    defaultDashboardPage: async ({ page }, use) => {
        await use(new DefaultDashboardPage(page));
    },
    testOverviewDashboard: async ({ page }, use) => {
        await use(new TestOverviewDashboard(page))
    },
    dashboardRecordListPage: async ({ page }, use) => {
        await use(new DashboardRecordListPage(page))
    },
    explorerRecordListPage: async ({ page }, use) => {
        await use(new ExplorerRecordListPage(page))
    },
    endpointOverviewDB: async ({ page }, use) => {
        await use(new EndpointOverviewDashboard(page))
    },
    bgpOverviewDB:async ({ page }, use) => {
        await use(new BGPOverviewDashboard(page))
    },

  

   

});

export default test;