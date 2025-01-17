import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { LoginPage } from "@pageobjects/Login/LoginPage";

let webActions: WebActions;
let util: Utility;
let login : LoginPage;

export class NodeListPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }

    //#region This region is for getter
    private _nodeNameHeaderInNodeListTable = '//span[text()="Node Name"]';
    private _statusHeaderInNodeListPage = '//span[text()="Status"]';
    private _runRateHeaderInNodeListPage = '//span[text()="Run Rate"]';
    private _nodeTable = '//div[@class="ms-List-page"][1]'
    private _NewButton ='//button[text()="New"]';
    private _NewNodeBlade ='//div[contains(@class,"ms-Panel-main")]';
    private _NewNodeIcon ='//div[@id="nodesection"]';

    public get nodeNameHeaderInNodeListTableLocator(){
        return this._nodeNameHeaderInNodeListTable;
    }

    public get statusHeaderInNodeListPageLocator(){
        return this._statusHeaderInNodeListPage;
    }
    public get NewNodeIconLocator(){
        return this._NewNodeIcon;
    } 

    public get NewButtonLocator(){
        return this._NewButton;
    }
    public get NewNodeBladeLocator(){
        return this._NewNodeBlade;
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
        await webActions.navigateToURL(baseURL + 'Nodes/NodeList');
        await util.delay(5000);
    }

    async LoginToNodeListPage() {
        this.navigateToNodesPageByURL();
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.nodeTableLocator);
    }

    async LoginToNodePage() {
        this.navigateToNodesPageByURL();
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.nodeTableLocator);
    }

    async click(locator:string) {
        await webActions.clickElement(locator);
    }
    
    //#endregion

}