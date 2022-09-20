import { WebActions } from "@lib/WebActions";
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
    private _sideNavSettings = '//i[@data-icon-name="settingsSiteNav"]';
    private _sideNavUserrole = '//a[text()="User Roles"]';
    private _sideNavContact = '#contactsection';
    private _sideNavContacts = '//a[text()="Contacts"]';
    private _sideNavRum = '//a[text()="RUM"]'



    public get sideNavControlCenter(){
        return this._sideNavControlCenter;
    }

    public get sideNavCCTest(){
        return this._sideNavCCTest;
    }

    public get sideNavSettingsTest(){
        return this._sideNavSettings;
    }

    public get sideNavUserroleTest(){
        return this._sideNavUserrole;
    }

    public get sideNavContactTest(){
        return this._sideNavContact;
    }

    public get sideNavContactsTest(){
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

    async navigateToUserrolePageFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavSettingsTest);
        await webActions.clickElement(this.sideNavSettingsTest)
        await webActions.waitForElementAttached(this.sideNavUserroleTest);
        await webActions.clickElement(this.sideNavUserroleTest);
    }

    async navigateToContactPageFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavContactTest);
        await webActions.clickElement(this.sideNavContactTest)
        await webActions.waitForElementAttached(this.sideNavContactsTest);
        await webActions.clickElement(this.sideNavContactsTest);
    }

    async navigateToRUMFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavRUMTest);
        await webActions.clickElement(this.sideNavRUMTest);
    }

    


}