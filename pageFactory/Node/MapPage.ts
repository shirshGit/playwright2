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

export class MapPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }

    //#region This region is for getter
    private _mapContainer = '//div[contains(@class,"MasterPage__Root")]';
    private _nodesListIconInNodeMapPage = '//div[contains(@class,"fabricIcons_doubleChevronUp")]';
    private _nodeHeaderInNodeList = '//span[text()="Node"]';
    private _cityHeaderInNodeList = '//span[text()="City"]';
    private _map = '//div[@data-testid="map_container"]'

    public get mapContainerLocator(){
        return this._mapContainer;
    }

    public get nodesListIconInNodeMapPageLocator(){
        return this._nodesListIconInNodeMapPage;
    }

    public get nodeHeaderInNodeListLocator(){
        return this._nodeHeaderInNodeList;
    }

    public get cityHeaderInNodeListLocator(){
        return this._cityHeaderInNodeList;
    }

    public get mapLocator(){
        return this._map;
    }


    //#endregion

    //#region This region is to have the functions
    
    async clickOnFabricIconToOpenNodeList(){
        await webActions.clickElement(this.nodesListIconInNodeMapPageLocator);
    }
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async navigateToNodeMapPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Nodes/NodeInformation');
        await util.delay(5000);
    }
    async LoginToNodeMapPage() {
        this.navigateToNodeMapPageByURL();
        await webActions.enterElementText(login.emailInputLocator, testConfig.cpun);
        await webActions.enterElementText(login.passwordInputLocator, testConfig.cppwd);
        await webActions.clickElement(login.loginBtnLocator);
        await webActions.waitForElementAttached(this.mapLocator);
    }

    
    //#endregion

}