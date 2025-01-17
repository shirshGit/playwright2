import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
let webActions: WebActions;
let util: Utility

export class DashboardRecordListPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _recordListText = '//span[text()="Records List"]'; 
    private _recordPageGraph = '//div[contains(@class,"RecordsScatterplot_scatterplot_")]';
    
    public get recordListTextLocator(){
        return this._recordListText;
    }
    public get selectRowLocator(){
        return (text:number) => { return `(//div[@data-automationid="DetailsList"])[2]//div[@data-list-index="${text}"]`}
    }
    public get recordListPageGraphLocator(){
        return this._recordPageGraph;
    }

    //#endregion

    //#region This region is to have the functions

    async selectRow(rowNum : number){
        await webActions.clickElement(this.selectRowLocator(rowNum));
    }

    async getNewWindow(context : BrowserContext,locator : string){
        return await webActions.newWindowHandle(context,locator);
    }
   

    //#endregion

}