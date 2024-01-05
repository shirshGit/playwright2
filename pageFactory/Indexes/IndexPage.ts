import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";

let webActions: WebActions;
let util: Utility

export class IndexPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _newIcon = '//button[text()="New"]';
    private _nameText = '//span[text()="Name"]';
    private _descriptionText = '//span[text()="Description"]';
    private _IDText = '//span[text()="ID"]';
    private _numberOfTestText = '//span[text()="Number of Tests"]';
    private _indexTable = "//div[@class='ms-List-page']"


   

    public get newIconLocator() {
        return this._newIcon;
    }

    public get nameTextLocator() {
        return this._nameText;
    }

    public get descrptionTextLocator() {
        return this._descriptionText;
    }

    public get idTextLocator() {
        return this._IDText;
    }

    public get noOfTestTextLocator() {
        return this._numberOfTestText;
    }
    public get indexTableLocator() {
        return this._indexTable;
    }


    //#endregion

    //#region This region is to have the functions

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async navigateToIndexPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Administration/Indexes');
        await util.delay(5000);
    }

    //#endregion

}