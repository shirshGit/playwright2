import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility;

export class MapPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _mapContainer = '//div[contains(@class,"MasterPage__Root")]';
    private _nodesListIconInNodeMapPage = '//div[contains(@class,"fabricIcons_doubleChevronUp")]';
    private _nodeHeaderInNodeList = '//span[text()="Node"]';
    private _cityHeaderInNodeList = '//span[text()="City"]';

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

    
    //#endregion

}