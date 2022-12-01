import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

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
    private _sideNavContactIcon = '//div[@id="contactsection"]//div';
    private _sideNavContacts = '//a[text()="Contacts"]/..';
    private _sideNavRum = '//a[text()="RUM"]';
    private _sideNavRecords = '//a[text()="Records"]';
    private _sideNavEndpoint = '//a[text()="Endpoint"]';
    private _sideNavSmartboard = '//a[text()="Smartboard"]';
    private _testTemplate = '//a[text()="Test Templates"]';
    private _library = '//a[text()="Library"]';
    private _sideNavInstantTest = '#instanttestssection';
    private _newInstantTestSiveNav = '//a[text()="New Instant Test"]';
    private _instantTestHistorySiveNav = '//a[text()="History"]'

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

    public get sideNavlibraryLocator(){
        return this._library;
    }

    public get sideNavInstantTestLocator(){
        return this._sideNavInstantTest;
    }

    public get newInstantTestSiveNavLocator(){
        return this._newInstantTestSiveNav;
    }

    public get instantTestHistorySiveNavLocator(){
        return this._instantTestHistorySiveNav;
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

    async navigateToNewInstantTestFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavInstantTestLocator);
        await webActions.clickElement(this.sideNavInstantTestLocator)
        await webActions.waitForElementAttached(this.newInstantTestSiveNavLocator);
        await webActions.clickElement(this.newInstantTestSiveNavLocator);
    }

    async navigateToInstantTestHistoryFromSideNavigation() {
        await webActions.waitForElementAttached(this.sideNavInstantTestLocator);
        await webActions.clickElement(this.sideNavInstantTestLocator)
        await webActions.waitForElementAttached(this.instantTestHistorySiveNavLocator);
        await webActions.clickElement(this.instantTestHistorySiveNavLocator);
    }


}