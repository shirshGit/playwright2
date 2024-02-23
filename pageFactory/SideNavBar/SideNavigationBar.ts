import { WebActions } from "@lib/WebActions"
import { BrowserContext, Page } from "@playwright/test"
import { Utility } from "@util/Utility"

let webActions: WebActions
let util: Utility

export class SideNavBar {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
    }


    //#region This region is for locators as Property
    private _sideNavControlCenter = '#controlcentersection'
    private _sideNavCCTest = '//button/a[text()="Tests"]'
    private _sideNavAnalytics = '//div[@id="analysissection"]//div[contains(@class,"fabricIcons_analysisSiteNav_")]';
    private _sideNavExplorer = '//span[text()="Explorer"]'
    private _homesection = '#homesection'
    private _dashboard = '//a[text()="Dashboard"]'
    private _sideNavSettings = '//div[@id="settingssection"]//div[contains(@class,"fabricIcons_settingsSiteNav_")]';
    private _sideNavUserrole = '//span[text()="User Roles"]'
    private _sideNavContactIcon = '//div[@id="contactsection"]//i//div'
    private _sideNavContacts = '(//span[text()="Contacts"])[2]'
    private _sideNavRum = '(//div[1][contains(@class,"NavigationTree_navGroupText_")][normalize-space()="RUM"])[2]'
    private _sideNavRecords = '//span[text()="Records"]'
    private _sideNavEndpoint = '(//div[1][contains(@class,"NavigationTree_navGroupText_")][normalize-space()="Endpoint"])[2]'
    private _sideNavSmartboard = '//span[text()="Smartboard"]'
    private _testTemplate = '//div[contains(text(),"Test Templates")]'
    private _sideNavDivision = '//span[text()="Divisions"]'
    private _library = '(//div[contains(text(),"Library")])[2]'
    private _sideNavSchedules = '//div[@id="Settings-subgroup-context-menu"]//span[text()="Schedules"]'
    private _sideNavInstantTest = '#instanttestssection'
    private _sideNavIndexes = '//span[text()="Indexes"]'
    private _createInstantTestButton = '//button[text()="New Instant Test"]'
    private _contactGroup = '//span[text()="Contact Groups"]'
    private _instantTestHistorySiveNav = '//a[text()="Instant Test History"]'
    private _reportsSideNavBar = '#reportssection'
    private _reportPageLinkSideNavBar = '//span[contains(@class,"SiteNavigationSubGroupMenu") and text()="Reports"]'
    private _reportTemplateSideNav = '//span[text()="Templates"]'
    private _alertSideNav = "#alertsection"
    private _alertNavigation = '//a[text()="Alert Log"]'
    private _nodesSideNavMenu = '//div[@id="nodesection"]//div[contains(@class,"fabricIcons_nodesSiteNav_")]'
    private _mapNavigationFromNodesMenu = '//span[text()="Node Map"]'
    private _groupNavigationFromNodeMenu = '//span[text()="Node Groups"]'
    private _nodeListNavigationFromNodeMenu = '(//span[text()="Nodes"])[2]'
    private _instancesFromNodesMenu = '//span[text()="Instances"]'
    private _homeSection = '//div[@data-testid="site-nav"]//div[@id="homesection"]'
    private _customViz = '//span[text()="Custom Visualization"]'
    private _sideNaveZone = '//span[text()="Zones"]'
    private _sideNavInternetSonar = '(//div[contains(text(),"Internet Sonar")])[2]'
    private _endpointTabInInstantTestPage = '//span[text()="Endpoint"]'
    private _endpointInstantTestCreateButton = '//button[text()="New Instant Test"]'
    private _synDetailList = '//div[contains(@class,"ms-DetailsList-contentWrapper")]'
    private _synNavigationTreeLocator = '//ul[contains(@class,"ms-Nav-navItems navItems-")]'
    private _instantTestHistoryList = '//div[@class="ms-List-surface"]'
    private _nodeSectionInNewInstantTestPage = '//div[contains(@class,"NodeManagementNodePickerstyles__NodePickerContainer-")]'
    private _endpointInstantTestListSection = '//div[contains(@class,"ActionTable_customDataCont_")]'
    private _contactTable = '//div[@class="ms-List-page"][1]';
    private _contactGroupTable = '//div[@class="ms-List-page"][1]';
    private _nodeGroupTable = '//div[@class="ms-List"]';
    private _map = '//div[@data-testid="map_container"]';
    private _instanceTable = '//div[@class="ms-List-page"][1]' ;
    private _nodeTable = '//div[@class="ms-List-page"][1]';
    private _divisionTable = "//div[@class='ms-List-surface']";
    private _zoneTable = "//div[@class='ms-List-page']";
    private _scheduleTable = '//div[@class="ms-List-surface"]';
    private _userroleTable = "//div[@class='ms-List-page']";
    private _indexTable = "//div[@class='ms-List-page']";
    private _endpointsList = '//div[@class="ms-SelectionZone"]';
    private _internetSonarList = '//div[@class="ms-List"]';
    private _libraryList = '//div[@class="ms-List"]';
    private _rumList = '//div[@class="ms-List-surface"]';
    private _internetSonarTabInAlertsPage = '//span[text()="Internet Sonar"]';
    private _rumTabInAlertsPage = '//span[text()="RUM"]';
    private _rumAlertList = '//div[@class="ms-List"]';

    
    public get sideNavControlCenter() {
        return this._sideNavControlCenter
    }

    public get sideNavCCTest() {
        return this._sideNavCCTest
    }

    public get sideNavAnalytics() {
        return this._sideNavAnalytics
    }

    public get sideNavSettingsTest() {
        return this._sideNavSettings
    }

    public get sideNavExplorer() {
        return this._sideNavExplorer
    }

    public get sideNavHome() {
        return this._homesection
    }

    public get sideNavDashboard() {
        return this._dashboard
    }

    public get sideNavSmartboard(){
        return this._sideNavSmartboard
    }
    public get sideNavUserrole() {
        return this._sideNavUserrole
    }

    public get sideNavContactIcon() {
        return this._sideNavContactIcon
    }

    public get sideNavContacts() {
        return this._sideNavContacts
    }
    public get sideNavRUM() {
        return this._sideNavRum
    }
    public get sideNavRecords() {
        return this._sideNavRecords
    }

    public get sideNavEndpointLocator() {
        return this._sideNavEndpoint
    }
    public get sideNavTestTemplates() {
        return this._testTemplate
    }

    public get sideNavDivisionLocator() {
        return this._sideNavDivision
    }

    public get sideNavlibraryLocator() {
        return this._library
    }

    public get sideNavSchedulesLocator() {
        return this._sideNavSchedules
    }

    public get sideNavInstantTestHistoryLocator() {
        return this._sideNavInstantTest
    }

    public get sideNavIndexesLocator() {
        return this._sideNavIndexes
    }

    public get newInstantTestCreateButtonLocator() {
        return this._createInstantTestButton
    }

    public get instantTestSideNavLocator() {
        return this._instantTestHistorySiveNav
    }

    public get sideNavContactGroupLocator() {
        return this._contactGroup
    }

    public get reportsSideNavBarLocator() {
        return this._reportsSideNavBar
    }

    public get reportPageLinkSideNavBarLocator() {
        return this._reportPageLinkSideNavBar
    }

    public get reportTemplateSideNavLocator() {
        return this._reportTemplateSideNav
    }

    public get alertNavBarLocator() {
        return this._alertSideNav
    }

    public get alertLogNavigationLocator() {
        return this._alertNavigation
    }


    public get mapNavigationFromNodesMenuLocator() {
        return this._mapNavigationFromNodesMenu
    }

    public get groupNavigationFromNodeMenuLocator() {
        return this._groupNavigationFromNodeMenu
    }

    public get nodeListNavigationFromNodeMenuLocator() {
        return this._nodeListNavigationFromNodeMenu
    }

    public get instancesFromNodesMenuLocator() {
        return this._instancesFromNodesMenu
    }

    public get nodesSideNavMenuLocator() {
        return this._nodesSideNavMenu
    }
    public get sideNavCV(){
        return this._customViz
    }

    public get sideNavZoneLocator() {
        return this._sideNaveZone
    }
    public get sideNavInternetSonarLocator() {
        return this._sideNavInternetSonar
    }
    public get endpointTabInInstantTestPage(){
        return this._endpointTabInInstantTestPage
    }
    public get endpointInstantTestCreateButtonLocator(){
        return this._endpointInstantTestCreateButton
    }
    public get synDetailListLocator(){
        return this._synDetailList
    }
    public get synNavigationTreeLocator(){
        return this._synNavigationTreeLocator
    }
    public get commonLocator(){
        return (text:string) => {return `//span[text()="${text}"]`}
    }
    public get instantTestHistoryListLocator(){
        return this._instantTestHistoryList
    }
    public get nodeSectionInNewInstantTestPage(){
        return this._nodeSectionInNewInstantTestPage
    }
    public get endpointInstantTestListSectionLocator(){
        return this._endpointInstantTestListSection
    }
    public get contactTableLocator() {
        return this._contactTable;
    }
    public get contactGroupLocator() {
        return this._contactGroupTable;
    }
    public get nodeListTableLocator() {
        return this._nodeTable;
    }
    public get nodeGroupTableLocator() {
        return this._nodeGroupTable;
    }
    public get instanceTableLocator() {
        return this._instanceTable;
    }
    public get nodeMapSectionLocator() {
        return this._map;
    }
    public get zonesTableLocator() {
        return this._zoneTable;
    }
    public get indexTableLocator() {
        return this._indexTable;
    }
    public get userroleTableLocator() {
        return this._userroleTable;
    }
    public get scheduleTableLocator() {
        return this._scheduleTable;
    }
    public get divisionTableLocator() {
        return this._divisionTable;
    }
    public get internetSonarListLocator() {
        return this._internetSonarList;
    }
    public get libraryListLocator() {
        return this._libraryList;
    }
    public get rumListLocator() {
        return this._rumList;
    }
    public get endpointsListLocator(){
        return this._endpointsList
    }
    public get internetSonarTabLocator() {
        return this._internetSonarTabInAlertsPage
    }
    public get rumAlertsListLocator(){
        return this._rumAlertList;
    }
    public get rumTabInAlertsPageLocator(){
        return this._rumTabInAlertsPage;
    }


    //#endregion

    async navigateToDashboardFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavHome)
        await webActions.clickElement(this.sideNavHome)
    }


    async navigateToSyntheticCCFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter)
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.synDetailListLocator)
        await webActions.waitForElementAttached(this.synNavigationTreeLocator)
    }

    async navigateToEndpointCCFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter)
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavEndpointLocator)
        await webActions.clickElement(this.sideNavEndpointLocator)
        await webActions.waitForElementAttached(this.endpointsListLocator)
    }

    async navigateToRUMFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter)
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavRUM)
        await webActions.clickElement(this.sideNavRUM)
        await webActions.waitForElementAttached(this.rumListLocator)
    }

    async navigateToTestTemplateFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter)
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavTestTemplates)
        await webActions.clickElement(this.sideNavTestTemplates)
    }

    async navigateToLibraryCCFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter)
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavlibraryLocator)
        await webActions.clickElement(this.sideNavlibraryLocator)
        await webActions.waitForElementAttached(this.libraryListLocator)
    }


    async navigateToExplorerFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavAnalytics)
        await webActions.clickElement(this.sideNavAnalytics)
        await webActions.waitForElementAttached(this.sideNavExplorer)
        await webActions.clickElement(this.sideNavExplorer)
    }

    async navigateToRecordsFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavAnalytics)
        await webActions.clickElement(this.sideNavAnalytics)
        await webActions.waitForElementAttached(this.sideNavRecords)
        await webActions.clickElement(this.sideNavRecords)
    }

    async navigateToSmartboardFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavAnalytics)
        await webActions.clickElement(this.sideNavAnalytics)
        await webActions.waitForElementAttached(this.sideNavSmartboard)
        await webActions.clickElement(this.sideNavSmartboard)
    }

    async navigateToNewInstantTestFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavInstantTestHistoryLocator)
        await webActions.clickElement(this.sideNavInstantTestHistoryLocator)
        await webActions.waitForElementAttached(this.instantTestHistoryListLocator)
        await webActions.waitForElementAttached(this.newInstantTestCreateButtonLocator)
        await webActions.clickElement(this.newInstantTestCreateButtonLocator)
        await webActions.waitForElementAttached(this.nodeSectionInNewInstantTestPage)
    }

    async navigateToInstantTestHistoryFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavInstantTestHistoryLocator)
        await webActions.clickElement(this.sideNavInstantTestHistoryLocator)
        await webActions.waitForElementAttached(this.instantTestHistoryListLocator);
    }

    async clickOnReportSideNavigation() {
        await webActions.waitForElementAttached(this.reportsSideNavBarLocator)
        await webActions.clickElement(this.reportsSideNavBarLocator)
}


    async navigateToAlertLogFromSideNavigation() {
        await webActions.waitForElementAttached(this.alertNavBarLocator)
        await webActions.clickElement(this.alertNavBarLocator)
    }

    async navigateToContactPageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavContactIcon)
        await webActions.hoverOnElement(this.sideNavContactIcon)
        await webActions.waitForElementAttached(this.sideNavContacts)
        await webActions.clickElement(this.sideNavContacts)
        await webActions.waitForElementAttached(this.contactTableLocator)
    }

    async navigateToContactGroupPageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavContactIcon)
        await webActions.hoverOnElement(this.sideNavContactIcon)
        await webActions.waitForElementAttached(this.sideNavContactGroupLocator)
        await webActions.clickElement(this.sideNavContactGroupLocator)
        await webActions.waitForElementAttached(this.contactTableLocator)
    }


    async navigateToUserrolePageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest)
        await webActions.hoverOnElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavUserrole)
        await webActions.clickElement(this.sideNavUserrole)
        await webActions.waitForElementAttached(this.userroleTableLocator)
    }
    
    async navigateToDivisionFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest)
        await webActions.clickElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavDivisionLocator)
        await webActions.clickElement(this.sideNavDivisionLocator)
        await webActions.waitForElementAttached(this.divisionTableLocator)
    }

    async navigateToSchedulesPageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest)
        await webActions.clickElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavSchedulesLocator)
        await webActions.clickElement(this.sideNavSchedulesLocator)
        await webActions.waitForElementAttached(this.scheduleTableLocator)
    }
    async navigateToIndexesPageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest)
        await webActions.clickElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavIndexesLocator)
        await webActions.clickElement(this.sideNavIndexesLocator)
        await webActions.waitForElementAttached(this.indexTableLocator)
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator)
    }
   

    async navigateToMapFromNodeSideNavigation() {
        await webActions.waitForElementAttached(this.nodesSideNavMenuLocator)
        await webActions.hoverOnElement(this.nodesSideNavMenuLocator)
        await webActions.waitForElementAttached(this.mapNavigationFromNodesMenuLocator)
        await webActions.clickElement(this.mapNavigationFromNodesMenuLocator)
        await webActions.waitForElementAttached(this.nodeMapSectionLocator)
    }

    async navigateToGroupsFromNodeSideNavigation() {
        await webActions.waitForElementAttached(this.nodesSideNavMenuLocator)
        await webActions.hoverOnElement(this.nodesSideNavMenuLocator)
        await webActions.waitForElementAttached(this.groupNavigationFromNodeMenuLocator)
        await webActions.clickElement(this.groupNavigationFromNodeMenuLocator)
        await webActions.waitForElementAttached(this.nodeGroupTableLocator)
    }

    async navigateToNodeFromNodeSideNavigation() {
        await webActions.waitForElementAttached(this.nodesSideNavMenuLocator)
        await webActions.hoverOnElement(this.nodesSideNavMenuLocator)
        await webActions.waitForElementAttached(this.nodeListNavigationFromNodeMenuLocator)
        await webActions.clickElement(this.nodeListNavigationFromNodeMenuLocator)
        await webActions.waitForElementAttached(this.nodeListTableLocator)
    }

    async navigateToInstancesFromNodeSideNavigation() {
        await webActions.waitForElementAttached(this.nodesSideNavMenuLocator)
        await webActions.hoverOnElement(this.nodesSideNavMenuLocator)
        await webActions.waitForElementAttached(this.instancesFromNodesMenuLocator)
        await webActions.clickElement(this.instancesFromNodesMenuLocator)
        await webActions.waitForElementAttached(this.instanceTableLocator)
    }
    
    async clickOnHomeIcon(){
        await webActions.waitForElementAttached(this.sideNavHome)
        await webActions.clickElement(this.sideNavHome)
    }

    async clickOnAnalyticsIcon(){
        await webActions.waitForElementAttached(this.sideNavAnalytics)
        await webActions.clickElement(this.sideNavAnalytics)
    }

    async navigateToCustomVizFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavAnalytics)
        await webActions.clickElement(this.sideNavAnalytics)
        await webActions.waitForElementAttached(this.sideNavCV)
        await webActions.clickElement(this.sideNavCV)
    }
   

    async navigateToZoneFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest)
        await webActions.clickElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavZoneLocator)
        await webActions.clickElement(this.sideNavZoneLocator)
        await webActions.waitForElementAttached(this.zonesTableLocator)
    }

    async navigateToInternetSonarCCFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter)
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavInternetSonarLocator)
        await webActions.clickElement(this.sideNavInternetSonarLocator)
        await webActions.waitForElementAttached(this.internetSonarListLocator)
    }

    async navigateToEndpointInstantTestHistoryFromSideNavigation() {
        this.navigateToInstantTestHistoryFromSideNavigation()
        await webActions.waitForElementAttached(this.endpointTabInInstantTestPage)
        await webActions.clickElement(this.endpointTabInInstantTestPage)
        await webActions.waitForElementAttached(this.endpointInstantTestListSectionLocator)
    }
    
    async navigateToRumAlertLogFromSideNavigation() {
        await webActions.waitForElementAttached(this.alertNavBarLocator)
        await webActions.clickElement(this.alertNavBarLocator)
        await webActions.waitForElementAttached(this.rumTabInAlertsPageLocator)
        await webActions.clickElement(this.rumTabInAlertsPageLocator)
        //await webActions.waitForElementAttached(this.rumAlertsListLocator)
    }
    async navigateToInternetSonarAlertLogFromSideNavigation() {
        await webActions.waitForElementAttached(this.alertNavBarLocator)
        await webActions.clickElement(this.alertNavBarLocator)
        await webActions.waitForElementAttached(this.internetSonarTabLocator)
        await webActions.clickElement(this.internetSonarTabLocator)
    }



}