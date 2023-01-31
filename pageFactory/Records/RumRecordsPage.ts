import { WebActions } from "@lib/WebActions";
import { expect } from "@playwright/test";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "playwright";

let webActions: WebActions;
let util: Utility

export class RumRecordsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _changeSessionTab = '//button[text()="Change Session"]';
    private _ganttChartSearchBox = '(//input[@data-testid="fabricsearchbox"])[2]';
    private _zoneFilterDD = '//label[text()="Zone"]/..//i[@data-icon-name="chevron"]';
    private _testInSourceSelector = '//div[@data-testid="custom-picker-pill-container"]//span';
    private _appInSourceSelector = '//div[contains(@class,"Pill_pillContent")]//span';
   

    

    public get changeSessionTabLocator(){
        return this._changeSessionTab
    }
    public get ganttChartSearchBoxLocator(){
        return this._ganttChartSearchBox
    }
    public get zoneFilterLocator(){
        return this._zoneFilterDD
    }

    public get testInSourceSelectorLocator() {
        return this._testInSourceSelector;
    }
    public get appInSourceSelectorLocator() {
        return this._appInSourceSelector;
    }


    //#endregion
   
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

   

}