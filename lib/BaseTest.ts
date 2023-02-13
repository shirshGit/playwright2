import { test as baseTest, TestInfo } from '@playwright/test';
import { LoginPage } from '@pageobjects/Login/LoginPage';
import { NewTabInstatntTest } from '@pages/InstantTestNewWindow';
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
import { SyntheticRecordsPage } from '@pageobjects/Records/SyntheticRecordsPage';
import { SourceSelectorPage } from '@pageobjects/Records/SourceSelecterPage';
import { CharmBar } from '@pageobjects/CharmBar/CharmBar';
import { GanttBladePage } from '@pageobjects/Records/GanttBladePage';
import { SyntheticSmartboardPage } from '@pageobjects/Smartboard/SyntheticSmartboardPage';
import { SourceSelectorSmartboard } from '@pageobjects/Smartboard/SourceSelectorSmartboard';
import { ExplorerPage } from '@pageobjects/Explorer/ExplorerPage';
import { SourceSelectorExplorer } from '@pageobjects/Explorer/SourceSelectorExplorer';
import { ControlCenterRecords } from '@pageobjects/ControlCenter/ControlCenterRecords';
import { DashboardBlade } from '@pageobjects/OverviewDashboard/DashboardBlade';
import { TestOverviewDashboard } from '@pageobjects/OverviewDashboard/TestOverviewDashboardPage';
import { DefaultDashboardPage } from '@pageobjects/OverviewDashboard/DefaultDashboardPage';
import { DashboardRecordListPage } from '@pageobjects/OverviewDashboard/DashboardRecordsListPage';
import { ExplorerRecordListPage } from '@pageobjects/Explorer/ExplorerRecordListPage';
import { EndpointOverviewDashboard } from '@pageobjects/OverviewDashboard/EndpointMonitorOverview';
import { BGPOverviewDashboard } from '@pageobjects/OverviewDashboard/BGPOverviewDashboard';
import { ExplorerSyntheticDetails } from '@pageobjects/Explorer/ExplorerSyntheticDetails';
import { EndpointControlCenterPage } from '@pageobjects/ControlCenter/EndpointControlCenter';
import { ExplorerRUMDetails } from '@pageobjects/Explorer/ExplorerRUMDetails';
import { RumControlCenterPage } from '@pageobjects/ControlCenter/RumControlCenter';
import { RumRecordsPage } from '@pageobjects/Records/RumRecordsPage';
import { LibraryControlCenterPage } from '@pageobjects/ControlCenter/LibraryControlCenter';
import { NodeSmartboardPage } from '@pageobjects/Smartboard/NodeSmartboardPage';
import { InstantTestPage } from '@pageobjects/InstantTest/InstantTestPage';
import { RUMSmartboardPage } from '@pageobjects/Smartboard/RUMSmartboardPage';
import { InstantTestHistoryPage } from '@pageobjects/InstantTest/InstantTestHistory';
import { DivisionPage } from '@pageobjects/Division/DivisionPage';
import { ReportListPage } from '@pageobjects/Reports/ReportsPage';
import { IndexPage } from '@pageobjects/Indexes/IndexPage';
import { ReportTemplatePage } from '@pageobjects/Reports/ReportTemplatePage';
import { SchedulePage } from '@pageobjects/Schedules/SchedulePage';
import { AlertLogPage } from '@pageobjects/Alert/AlertLog';
import { ContactGroupPage } from '@pageobjects/Contacts/ContactGroupPage';
import { MapPage } from '@pageobjects/Node/MapPage';
import { NodeGroupPage } from '@pageobjects/Node/NodeGroupPage';
import { NodeListPage } from '@pageobjects/Node/NodesListPage';
import { InstancesListPage } from '@pageobjects/Node/IntancesListPage';
import { EndpointSmartboardPage } from'@pageobjects/Smartboard/EndpointSmartboard';
import { RecordsPage } from '@pageobjects/Records/RecordsPage';
import { NodeToNodeSmartboardPage } from '@pageobjects/Smartboard/NodeToNodeSmartboard';
import { BGPSmartboardPage } from '@pageobjects/Smartboard/BGPSmartboard';

const test = baseTest.extend<{
    baseTestUtil: BaseTestUtility;
    loginPage: LoginPage;
    instantTabWindow: NewTabInstatntTest;
    verification: Verification;
    sideNavigationBar: SideNavBar;
    synCCPage: SynControlCenterPage;
    syntheticDetailsPage: SyntheticDetailPage;
    syntheticProductDetailPage: SyntheticProductDetailPage;
    syntheticFolderDetailPage: SyntheticFolderDetailPage;
    synLocationBlade: SyntheticLocationBlade;
    util: Utility;
    syntheticTestDetailPage: SyntheticTestDetailPage;
    testUtility: TestUtility;
    contactDetailsPage: ContactDetailsPage;
    contactsPage: ContactsPage;
    userrolePage: UserrolePage;
    userroleDetailPage: UserroleDetailPage;
    syntheticRecordsPage: SyntheticRecordsPage;
    syntheticSmartboardPage: SyntheticSmartboardPage;
    endpointOverviewDB: EndpointOverviewDashboard;
    bgpOverviewDB: BGPOverviewDashboard;
    explorerSyntheticDetails: ExplorerSyntheticDetails;
    endpointControlCenter: EndpointControlCenterPage;
    explorerRUMDetails: ExplorerRUMDetails;
    rumControCenter: RumControlCenterPage;
    rumRecordsPage: RumRecordsPage;
    libraryControlCenter: LibraryControlCenterPage;
    nodeSmartboardPage: NodeSmartboardPage;
    instantTest: InstantTestPage;
    rumSmartboardPage: RUMSmartboardPage;
    instantTestHistory: InstantTestHistoryPage;
    divisionPage: DivisionPage;
    reportListPage: ReportListPage;
    indexPage: IndexPage;
    reportTemplatePage: ReportTemplatePage;
    schedulePage: SchedulePage;
    alertLogPage: AlertLogPage;
    contactGroupPage: ContactGroupPage;
    nodeMapPage: MapPage;
    nodeGroupPage: NodeGroupPage;
    nodeListPage: NodeListPage;
    nodeInstancePage: InstancesListPage;
    endpointSmartboardPage : EndpointSmartboardPage;
    recordsPage: RecordsPage;
    sourceSelectorPage : SourceSelectorPage;
    charmBar : CharmBar;
    ganttBladePage : GanttBladePage;
    sourceSelectorSmartboard : SourceSelectorSmartboard;
    explorerPage : ExplorerPage;
    sourceSelectorExplorer : SourceSelectorExplorer;
    controlCenterRecords : ControlCenterRecords;
    dashboardBlade : DashboardBlade;
    defaultDashboardPage : DefaultDashboardPage;
    testOverviewDashboard : TestOverviewDashboard;
    dashboardRecordListPage : DashboardRecordListPage;
    explorerRecordListPage : ExplorerRecordListPage;
    ntnSmartboardPage : NodeToNodeSmartboardPage;
    bgpSmartboardPage : BGPSmartboardPage
    

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
        await use(new EndpointControlCenterPage(page));
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
    util: async ({ }, use) => {
        await use(new Utility());
    },
    syntheticTestDetailPage: async ({ page }, use) => {
        await use(new SyntheticTestDetailPage(page));
    },
    testUtility: async ({ page }, use) => {
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
    syntheticRecordsPage: async ({ page }, use) => {
        await use(new SyntheticRecordsPage(page));
    },
    sourceSelectorPage: async ({ page }, use) => {
        await use(new SourceSelectorPage(page));
    },
    charmBar: async ({ page }, use) => {
        await use(new CharmBar(page));
    },
    ganttBladePage: async ({ page }, use) => {
        await use(new GanttBladePage(page));
    },
    syntheticSmartboardPage: async ({ page }, use) => {
        await use(new SyntheticSmartboardPage(page));
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
    bgpOverviewDB: async ({ page }, use) => {
        await use(new BGPOverviewDashboard(page))
    },
    explorerSyntheticDetails: async ({ page }, use) => {
        await use(new ExplorerSyntheticDetails(page))
    },
    rumControCenter: async ({ page }, use) => {
        await use(new RumControlCenterPage(page))
    },
    explorerRUMDetails: async ({ page }, use) => {
        await use(new ExplorerRUMDetails(page))
    },
    libraryControlCenter: async ({ page }, use) => {
        await use(new LibraryControlCenterPage(page))
    },
    rumRecordsPage: async ({ page }, use) => {
        await use(new RumRecordsPage(page))
    },
    instantTest: async ({ page }, use) => {
        await use(new InstantTestPage(page))
    },
    rumSmartboardPage: async ({ page }, use) => {
        await use(new RUMSmartboardPage(page))
    },
    instantTestHistory: async ({ page }, use) => {
        await use(new InstantTestHistoryPage(page))
    },
    nodeSmartboardPage: async ({ page }, use) => {
        await use(new NodeSmartboardPage(page))
    },
    reportListPage: async ({ page }, use) => {
        await use(new ReportListPage(page))
    },
    divisionPage: async ({ page }, use) => {
        await use(new DivisionPage(page))
    },
    reportTemplatePage: async ({ page }, use) => {
        await use(new ReportTemplatePage(page))
    },
    indexPage: async ({ page }, use) => {
        await use(new IndexPage(page))
    },
    alertLogPage: async ({ page }, use) => {
        await use(new AlertLogPage(page))
    },
    schedulePage: async ({ page }, use) => {
        await use(new SchedulePage(page))
    },
    nodeMapPage: async ({ page }, use) => {
        await use(new MapPage(page))
    },
    nodeGroupPage: async ({ page }, use) => {
        await use(new NodeGroupPage(page))
    },
    nodeListPage: async ({ page }, use) => {
        await use(new NodeListPage(page))
    },
    nodeInstancePage: async ({ page }, use) => {
        await use(new InstancesListPage(page))
    },
    contactGroupPage: async ({ page }, use) => {
        await use(new ContactGroupPage(page))
    },
    recordsPage: async ({ page }, use) => {
        await use(new RecordsPage(page));
    },
    endpointSmartboardPage: async ({ page }, use) => {
        await use(new EndpointSmartboardPage(page))
    },
    ntnSmartboardPage: async ({ page }, use) => {
        await use(new NodeToNodeSmartboardPage(page))
    },
    bgpSmartboardPage: async ({ page }, use) => {
        await use(new BGPSmartboardPage(page))
    },


});

export default test;