import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
import { DefaultDashboardPage } from "./DefaultDashboardPage";
let webActions: WebActions;
let util: Utility

export class TestOverviewDashboard extends DefaultDashboardPage{


    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _testWidgetInTestOverviewDB = '//div[contains(@class,"Tiles_container")]';
   
  

    public get testWidgetInTestOverviewDBLocator(){
        return this._testWidgetInTestOverviewDB;
    }
   
    //#endregion

    //#region This region is to have the functions

  
   

    //#endregion

}