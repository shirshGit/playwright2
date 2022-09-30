import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util :Utility;

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
    private _sideNavSettings = '//i[@data-icon-name="settingsSiteNav"]';
    private _sideNavUserrole = '//a[text()="User Roles"]';
    private _sideNavContactIcon = '//div[@id="contactsection"]//div';
    private _sideNavContacts = '//a[text()="Contacts"]/..';
    private _sideNavRum = '//a[text()="RUM"]'



    public get sideNavControlCenter(){
        return this._sideNavControlCenter;
    }

    public get sideNavCCTest(){
        return this._sideNavCCTest;
    }

    public get sideNavAnalytics(){
        return this._sideNavAnalytics;
    }

    public get sideNavSettingsTest(){
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

    public get sideNavRUMTest(){
        return this._sideNavRum;
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
        await webActions.waitForElementAttached(this.sideNavSettingsTest);
        await webActions.clickElement(this.sideNavSettingsTest)
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
        await webActions.waitForElementAttached(this.sideNavRUMTest);
        await webActions.clickElement(this.sideNavRUMTest);
    }

    


}