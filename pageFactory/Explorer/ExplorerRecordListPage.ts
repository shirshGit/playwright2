import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
let webActions: WebActions;
let util: Utility

export class ExplorerRecordListPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

   private _firstRowInRecordListPage = '//div[@data-automationid="DetailsRowFields"]';
   
   public get firstRowLocator(){
    return this._firstRowInRecordListPage
   }

    //#endregion

    //#region This region is to have the functions

  
   

    //#endregion

}