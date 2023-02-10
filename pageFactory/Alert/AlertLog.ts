import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility;

export class AlertLogPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _alertsForTests = '//span[text()="Tests"]';
    private _alertsForRum = '//span[text()="RUM"]';
    private _testIDInAlertLogTable = '//span[text()="Test ID"]';
    private _searchBox = '(//input[@id="fabric-search-box"])[2]';
    private _threeDotMenu = '//div[@data-selection-index="0"]//span[@data-automationid="splitbuttonprimary"]';


    public get alertSectionForTestsLocator(){
        return this._alertsForTests;
    }

    public get alertSectionForRumLocator(){
        return this._alertsForRum;
    }

    public get testIDHeaderInAlertLogListLocator(){
        return this._testIDInAlertLogTable;
    }

    public get searchBoxLocator(){
        return this._searchBox;
    }
    public get threeDotMenuLocator(){
        return (text:number) => { return `//div[@data-selection-index="${text}"]//span[@data-automationid="splitbuttonprimary"]`}
    }

    public get threeDotMenuItemLocator(){
        return (text:string) => { return `//span[contains(@class,'ms-ContextualMenu-itemText')][normalize-space()='${text}']`}
    }




    //#endregion

    //#region This region is to have the functions
    
    async clickOnThreeDotMenu(num:number,threeDotMenuItem:string){
        await this.hoverOnThreeDotMenu(num)
        await webActions.clickElement(this.threeDotMenuItemLocator(threeDotMenuItem))
    }

    async hoverOnThreeDotMenu(num:number){
        await webActions.hoverOnElement(this.threeDotMenuLocator(num))
        await webActions.clickElement(this.threeDotMenuLocator(num))
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async clickOnRumTab(){
        return await webActions.clickElement(this.alertSectionForRumLocator);
    }


    //#endregion

}