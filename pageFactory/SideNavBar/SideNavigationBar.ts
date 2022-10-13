import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;

export class SideNavBar{

    readonly page:Page;

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
    private _sideNavSettings = '#settingssection';
    private _sideNavUserrole = '//a[text()="User Roles"]';
    private _sideNavContactIcon = '#contactsection';
    private _sideNavContacts = '//a[text()="Contacts"]/..';
    private _sideNavRum = '//a[text()="RUM"]'
    private _sideNavEndpoint = '//a[text()="Endpoint"]';
    private _sideNavTestTemplate = '//a[text()="Test Templates"]';



    public get sideNavControlCenter(){
        return this._sideNavControlCenter;
    }

    public get sideNavCCTest(){
        return this._sideNavCCTest;
    }

    public get sideNavAnalytics(){
        return this._sideNavAnalytics;
    }

    public get sideNavSettings(){
        return this._sideNavSettings;
    }

    public get sideNavExplorer(){
        return this._sideNavExplorer;
    }

    public get sideNavHome(){
        return this._homesection;
    }

    public get sideNavDashboard(){
        return this._dashboard;
    }
    
    public get sideNavUserrole(){
        return this._sideNavUserrole;
    }

    public get sideNavContactIcon(){
        return this._sideNavContactIcon;
    }

    public get sideNavContacts(){
        return this._sideNavContacts;
    }

    public get sideNavRUM(){
        return this._sideNavRum;
    }

    public get sideNavEndpoint(){
        return this._sideNavEndpoint;
    }

    public get sideNavTestTemplate(){
        return this._sideNavTestTemplate;
    }

    //#endregion

    async navigateToSyntheticCCFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavCCTest);
        await webActions.clickElement(this.sideNavCCTest);
    }

    async navigateToExplorerFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavAnalytics);
        await webActions.clickElement(this.sideNavAnalytics)
        await webActions.waitForElementAttached(this.sideNavExplorer);
        await webActions.clickElement(this.sideNavExplorer);
    }
    async navigateToUserrolePageFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavSettings);
        await webActions.clickElement(this.sideNavSettings)
        await webActions.waitForElementAttached(this.sideNavUserrole);
        await webActions.clickElement(this.sideNavUserrole);
    }

    async navigateToDashboardFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavHome);
        await webActions.clickElement(this.sideNavHome)
        await webActions.waitForElementAttached(this.sideNavDashboard);
        await webActions.clickElement(this.sideNavDashboard);
    }


    async navigateToContactPageFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavContactIcon);
        await webActions.clickElement(this.sideNavContactIcon)
        await webActions.waitForElementAttached(this.sideNavContacts);
        await webActions.clickElement(this.sideNavContacts);
    }

    async navigateToRUMFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavRUM);
        await webActions.clickElement(this.sideNavRUM);
    }

    async navigateToEndpointFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavEndpoint);
        await webActions.clickElement(this.sideNavEndpoint);
    }

    async navigateToTestTemplateFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavTestTemplate);
        await webActions.clickElement(this.sideNavTestTemplate);
    }

    


}