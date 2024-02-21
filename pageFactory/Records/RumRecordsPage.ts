import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

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
    private _ganttChartSearchBox = '(//input[@data-testid="fabricsearchbox"])';
    private _zoneFilterDD = '//label[text()="Zone"]/..//i[@data-icon-name="chevron"]';
    private _testInSourceSelector = '//div[@data-testid="custom-picker-pill-container"]//span';
    private _appInSourceSelector = '//div[contains(@class,"Pill_pillContent")]//span';
    private _rumGanttChart = '//div[contains(@class,"RumGanttChartstyles__GanttContainer-")]';

    

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
    public get ganttChartLocator() {
        return this._rumGanttChart;
    }


    //#endregion
   
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async waitForElement(locator:string){
        await webActions.waitForElementAttached(locator)
    }

   

}