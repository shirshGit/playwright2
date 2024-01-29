import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";

let webActions: WebActions;
let util: Utility;

export class InstancesListPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _instacesNameHeaderInInstanceListPage = '//span[text()="Instance Name"]';
    private _statusHeaderInInstanceList = '//span[text()="Status"]';
    private _hardwareHeaderHeaderInInstancesList = '//span[text()="Hardware"]';
    private _instanceTable = '//div[@class="ms-List-page"][1]' 

    public get instacesNameHeaderInInstanceListPageLocator(){
        return this._instacesNameHeaderInInstanceListPage;
    }

    public get statusHeaderInInstanceListLocator(){
        return this._statusHeaderInInstanceList;
    }

    public get hardwareHeaderHeaderInInstancesListLocator(){
        return this._hardwareHeaderHeaderInInstancesList;
    }
    public get instanceTableLocator(){
        return this._instanceTable
    }


    //#endregion

    //#region This region is to have the functions
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async navigateToNodeInstancePageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'NodeGroups');
        await util.delay(5000);
    }
    
    //#endregion

}