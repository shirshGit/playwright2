import { WebActions } from "@lib/WebActions";
import { DefaultDashboardPage } from "./DefaultDashboardPage";
import { Page } from "playwright";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility


export class EndpointOverviewDashboard extends DefaultDashboardPage{


    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _worstLocationWidget = '//div[contains(@class,"ProblemEndpointsWidgetstyles__ProblemEndpointsHeader")]';
    private _worstEndpointsHeader = '//span[text() = "Worst Endpoints"]';
    private _worstAppHeader = '//span[text() = "Worst Apps"]'
    private _endpointTestHeaderInEndpointWidget = '//span[text() = "Tests"]'

    public get worstLocationWidgetLocator(){
        return this._worstLocationWidget;
    }

    public get worstEndpointsHeaderLocator(){
        return this._worstEndpointsHeader;
    }

    public get worstAppHeaderLocator(){
        return this._worstAppHeader;
    }

    public get endpointTestHeaderInEndpointWidgetLocator(){
        return this._endpointTestHeaderInEndpointWidget;
    }

    //#endregion

    //#region This region is to have the functions

  
   

    //#endregion
}