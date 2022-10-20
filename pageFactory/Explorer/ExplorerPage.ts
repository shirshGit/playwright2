import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class ExplorerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter
    
    private _errorTab = '//li[@data-testid="Errors"]';
    private _firstThreeDotMenuInErrorTab = '(//div[@data-testid="table_row"]//span[@data-automationid="splitbuttonprimary"])[1]//i';
    private _recordsInThreeDotMenuInErrorTab = '//span[normalize-space()="Records"]';
    private _errorTabFirstRowTime = '';
    
    public get errorTab(){
        return this._errorTab;
    }
    public get firstThreeDotInErrorTab(){
        return this._firstThreeDotMenuInErrorTab;
    }
    public get recordInThreeDotMenuInErrorTab(){
        return this._recordsInThreeDotMenuInErrorTab;
    }
    public get errorTabFirstRowTime(){
        return (text: number) => { return `//div[@data-item-index="${text}"]//div[@aria-colindex="3"]//div`};
    }
   

   
    //#endregion

    async clickOnErrorTab(){
        await webActions.clickElement(this.errorTab);
    }

    async firstRowRecordNavigationFromThreeDotMenu() {
        await util.delay(3000);
        await webActions.hoverOnElement(this.firstThreeDotInErrorTab);
        await webActions.clickElement(this.firstThreeDotInErrorTab);
    }

    async getNewWindow(context : BrowserContext,locator : string){
        return await webActions.newWindowHandle(context,locator);
        
    }
    
    async getErrorTabRowTime(rowNum : number){
        let metricValue = await webActions.getElementText(this.errorTabFirstRowTime(rowNum));
        return metricValue;
    }
   
    

    
}