import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility;

export class SideNavBar {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }


    //#region This region is for locators as Property
    private _sideNavControlCenter = '#controlcentersection';
    private _sideNavCCTest = '//button/a[text()="Tests"]';
    private _sideNavAnalytics = '#analysissection';
    private _sideNavExplorer = '//a[text()="Explorer"]';
    private _homesection = '#homesection';
    private _dashboard = '//a[text()="Dashboard"]';
    private _sideNavSettings = '//i[@data-icon-name="settingsSiteNav"]';
    private _sideNavUserrole = '//a[text()="User Roles"]';
    private _sideNavContactIcon = '//i[@data-icon-name="contactsSiteNav"]//div';
    private _sideNavContacts = '//a[text()="Contacts"]/..';
    private _sideNavRum = '//a[text()="RUM"]';
    private _sideNavRecords = '//a[text()="Records"]';
    private _sideNavEndpoint = '//a[text()="Endpoint"]';
    private _sideNavSmartboard = '//a[text()="Smartboard"]';
    private _testTemplate = '//a[text()="Test Templates"]';
    private _sideNavDivision = '//a[text()="Divisions"]';
    private _library = '//a[text()="Library"]';
    private _sideNavSchedules = '//a[text()="Schedules"]';
    private _sideNavInstantTest = '#instanttestssection';
    private _sideNavIndexes = '//a[text()="Indexes"]';
    private _newInstantTestSiveNav = '//a[text()="New Instant Test"]';
    private _contactGroup = '//a[text()="Contact Groups"]';
    private _instantTestHistorySiveNav = '//a[text()="History"]';
    private _reportsSideNavBar = '#reportssection';
    private _reportPageLinkSideNavBar = '//span[contains(@class,"SiteNavigationSubGroupMenu") and text()="Reports"]';
    private _reportTemplateSideNav = '//span[text()="Templates"]';
    private _alertSideNav = "#alertsection";
    private _alertNavigation = '//a[text()="Alert Log"]';
    private _nodesSideNavMenu = '#nodesection';
    private _mapNavigationFromNodesMenu = '//a[text()="Map"]';
    private _groupNavigationFromNodeMenu = '//a[text()="Groups"]';
    private _nodeListNavigationFromNodeMenu = '//a[text()="Nodes"]';
    private _instancesFromNodesMenu = '//a[text()="Instances"]';
////div[@data-testid="site-nav"]//div[@id="homesection"]

    public get sideNavControlCenter() {
        return this._sideNavControlCenter;
    }

    public get sideNavCCTest() {
        return this._sideNavCCTest;
    }

    public get sideNavAnalytics() {
        return this._sideNavAnalytics;
    }

    public get sideNavSettingsTest() {
        return this._sideNavSettings;
    }

    public get sideNavExplorer() {
        return this._sideNavExplorer;
    }

    public get sideNavHome() {
        return this._homesection;
    }

    public get sideNavDashboard() {
        return this._dashboard;
    }

    public get sideNavUserrole() {
        return this._sideNavUserrole;
    }

    public get sideNavContactIcon() {
        return this._sideNavContactIcon;
    }

    public get sideNavContacts() {
        return this._sideNavContacts;
    }


    public get sideNavRUM() {
        return this._sideNavRum;
    }


    public get sideNavRecords() {
        return this._sideNavRecords;
    }

    public get sideNavEndpointLocator() {
        return this._sideNavEndpoint;
    }

    public get sideNavSmartboard() {
        return this._sideNavSmartboard;
    }

    public get sideNavTestTemplates() {
        return this._testTemplate;
    }

    public get sideNavDivisionLocator() {
        return this._sideNavDivision;
    }

    public get sideNavlibraryLocator() {
        return this._library;
    }

    public get sideNavSchedulesLocator() {
        return this._sideNavSchedules;
    }

    public get sideNavInstantTestLocator() {
        return this._sideNavInstantTest;
    }

    public get sideNavIndexesLocator() {
        return this._sideNavIndexes;
    }

    public get newInstantTestSiveNavLocator() {
        return this._newInstantTestSiveNav;
    }

    public get instantTestHistorySiveNavLocator() {
        return this._instantTestHistorySiveNav;
    }

    public get sideNavContactGroupLocator() {
        return this._contactGroup;
    }

    public get reportsSideNavBarLocator() {
        return this._reportsSideNavBar;
    }

    public get reportPageLinkSideNavBarLocator() {
        return this._reportPageLinkSideNavBar;
    }

    public get reportTemplateSideNavLocator() {
        return this._reportTemplateSideNav;
    }

    public get alertNavBarLocator() {
        return this._alertSideNav;
    }

    public get alertLogNavigationLocator() {
        return this._alertNavigation;
    }


    public get mapNavigationFromNodesMenuLocator() {
        return this._mapNavigationFromNodesMenu;
    }

    public get groupNavigationFromNodeMenuLocator() {
        return this._groupNavigationFromNodeMenu;
    }

    public get nodeListNavigationFromNodeMenuLocator() {
        return this._nodeListNavigationFromNodeMenu;
    }

    public get instancesFromNodesMenuLocator() {
        return this._instancesFromNodesMenu;
    }

    public get nodesSideNavMenuLocator() {
        return this._nodesSideNavMenu;
    }
    //#endregion

    async navigateToSyntheticCCFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavCCTest);
        await webActions.clickElement(this.sideNavCCTest);
    }

    async navigateToEndpointCCFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavEndpointLocator);
        await webActions.clickElement(this.sideNavEndpointLocator);
    }


    async navigateToExplorerFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavAnalytics);
        await webActions.clickElement(this.sideNavAnalytics)
        await webActions.waitForElementAttached(this.sideNavExplorer);
        await webActions.clickElement(this.sideNavExplorer);
    }

    async navigateToRecordsFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavAnalytics);
        await webActions.clickElement(this.sideNavAnalytics)
        await webActions.waitForElementAttached(this.sideNavRecords);
        await webActions.clickElement(this.sideNavRecords);
    }

    async navigateToUserrolePageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest);
        await webActions.clickElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavUserrole);
        await webActions.clickElement(this.sideNavUserrole);
    }

    async navigateToDashboardFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavHome);
        await webActions.clickElement(this.sideNavHome)
        await webActions.waitForElementAttached(this.sideNavDashboard);
        await webActions.clickElement(this.sideNavDashboard);
    }


    async navigateToContactPageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavContactIcon);
        await webActions.clickElement(this.sideNavContactIcon)
        await webActions.waitForElementAttached(this.sideNavContacts);
        await webActions.clickElement(this.sideNavContacts);
    }

    async navigateToRUMFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavRUM);
        await webActions.clickElement(this.sideNavRUM);
    }


    async navigateToSmartboardFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavHome);
        await webActions.clickElement(this.sideNavHome)
        await webActions.waitForElementAttached(this.sideNavSmartboard);
        await webActions.clickElement(this.sideNavSmartboard);
    }

    async navigateToTestTemplateFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavTestTemplates);
        await webActions.clickElement(this.sideNavTestTemplates);
    }

    async navigateToLibraryCCFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavlibraryLocator);
        await webActions.clickElement(this.sideNavlibraryLocator);
    }


    async navigateToDivisionFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest);
        await webActions.clickElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavDivisionLocator);
        await webActions.clickElement(this.sideNavDivisionLocator);
    }


    async navigateToNewInstantTestFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavInstantTestLocator);
        await webActions.clickElement(this.sideNavInstantTestLocator)
        await webActions.waitForElementAttached(this.newInstantTestSiveNavLocator);
        await webActions.clickElement(this.newInstantTestSiveNavLocator);
    }

    async navigateToSchedulesPageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest);
        await webActions.clickElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavSchedulesLocator);
        await webActions.clickElement(this.sideNavSchedulesLocator);
    }

    async navigateToInstantTestHistoryFromSideNavigation() {
            await webActions.waitForElementAttached(this.sideNavInstantTestLocator);
            await webActions.clickElement(this.sideNavInstantTestLocator);
            await webActions.waitForElementAttached(this.instantTestHistorySiveNavLocator);
            await webActions.clickElement(this.instantTestHistorySiveNavLocator);
        }
    

    async navigateToIndexesPageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavSettingsTest);
        await webActions.clickElement(this.sideNavSettingsTest);
        await webActions.waitForElementAttached(this.sideNavIndexesLocator);
        await webActions.clickElement(this.sideNavIndexesLocator);
    }
    

    async clickOnReportSideNavigation() {
            await webActions.waitForElementAttached(this.reportsSideNavBarLocator);
            await webActions.clickElement(this.reportsSideNavBarLocator);
    }

    async navigateToContactGroupPageFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavContactIcon);
        await webActions.clickElement(this.sideNavContactIcon);
        await webActions.waitForElementAttached(this.sideNavContactGroupLocator);
        await webActions.clickElement(this.sideNavContactGroupLocator);
    }

    
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);
    }
    async navigateToAlertLogFromSideNavigation() {
        await webActions.waitForElementAttached(this.alertNavBarLocator);
        await webActions.clickElement(this.alertNavBarLocator)
        await webActions.waitForElementAttached(this.alertLogNavigationLocator);
        await webActions.clickElement(this.alertLogNavigationLocator);
    }

    async navigateToMapFromNodeSideNavigation() {
        await webActions.waitForElementAttached(this.nodesSideNavMenuLocator);
        await webActions.clickElement(this.nodesSideNavMenuLocator)
        await webActions.waitForElementAttached(this.mapNavigationFromNodesMenuLocator);
        await webActions.clickElement(this.mapNavigationFromNodesMenuLocator);
    }

    async navigateToGroupsFromNodeSideNavigation() {
        await webActions.waitForElementAttached(this.nodesSideNavMenuLocator);
        await webActions.clickElement(this.nodesSideNavMenuLocator)
        await webActions.waitForElementAttached(this.groupNavigationFromNodeMenuLocator);
        await webActions.clickElement(this.groupNavigationFromNodeMenuLocator);
    }

    async navigateToNodeFromNodeSideNavigation() {
        await webActions.waitForElementAttached(this.nodesSideNavMenuLocator);
        await webActions.clickElement(this.nodesSideNavMenuLocator)
        await webActions.waitForElementAttached(this.nodeListNavigationFromNodeMenuLocator);
        await webActions.clickElement(this.nodeListNavigationFromNodeMenuLocator);
    }

    async navigateToInstancesFromNodeSideNavigation() {
        await webActions.waitForElementAttached(this.nodesSideNavMenuLocator);
        await webActions.clickElement(this.nodesSideNavMenuLocator)
        await webActions.waitForElementAttached(this.instancesFromNodesMenuLocator);
        await webActions.clickElement(this.instancesFromNodesMenuLocator);
    }

    async clickOnHomeIcon(){
        await webActions.waitForElementAttached(this.sideNavHome);
        await webActions.clickElement(this.sideNavHome)
    }


}