import { WebActions } from "@lib/WebActions";
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
   

    

    public get changeSessionTabLocator(){
        return this._changeSessionTab
    }
    public get ganttChartSearchBoxLocator(){
        return this._ganttChartSearchBox
    }
    public get zoneFilterLocator(){
        return this._zoneFilterDD
    }


    //#endregion

   

   

}