import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";

let webActions: WebActions;
let util: Utility;

export class NodeListPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _nodeNameHeaderInNodeListTable = '//span[text()="Node Name"]';
    private _statusHeaderInNodeListPage = '//span[text()="Status"]';
    private _runRateHeaderInNodeListPage = '//span[text()="Run Rate"]';
    private _nodeTable = '//div[@class="ms-List-page"][1]'

    public get nodeNameHeaderInNodeListTableLocator(){
        return this._nodeNameHeaderInNodeListTable;
    }

    public get statusHeaderInNodeListPageLocator(){
        return this._statusHeaderInNodeListPage;
    }

    public get runRateHeaderInNodeListPageLocator(){
        return this._runRateHeaderInNodeListPage;
    }
    public get nodeTableLocator(){
        return this._nodeTable;
    }


    //#endregion

    //#region This region is to have the functions
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async navigateToNodesPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Nodes');
        await util.delay(5000);
    }
    
    //#endregion

}