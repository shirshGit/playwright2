import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
let webActions: WebActions;
let util: Utility

export class TestOverviewDashboard {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

   
  

    //#endregion

    //#region This region is to have the functions

  
   

    //#endregion

}