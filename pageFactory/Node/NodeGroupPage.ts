import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";

let webActions: WebActions;
let util: Utility;

export class NodeGroupPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _nodeGroupIdHeaderInTable = '//span[text()="ID"]';
    private _nodeCountHeaderInTable = '//span[text()="Node Count"]';
    private _descriptionHeaderInTable = '//span[text()="Description"]';
    private _nodeGroupTable = '//div[@class="ms-List"]'

    public get nodeGroupIdHeaderInTableLocator(){
        return this._nodeGroupIdHeaderInTable;
    }
    public get nodeCountHeaderInTableLocator(){
        return this._nodeCountHeaderInTable;
    }
    public get descriptionHeaderInTableLocator(){
        return this._descriptionHeaderInTable;
    }
    public get nodeGroupTableLocator(){
        return this._nodeGroupTable;
    }

    //#endregion

    //#region This region is to have the functions
    
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async navigateToNodeGroupPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'NodeGroups');
        await util.delay(5000);
    }

    
    //#endregion

}