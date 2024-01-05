import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";

let webActions: WebActions;
let util: Utility

export class SchedulePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    //#region This region is for getter

    private _createIcon = '//button[text()="Create"]';
    private _nameText = '//span[text()="Name"]';
    private _statusText = '//span[text()="Status"]';
    private _typeText = '//span[text()="Type"]';
    private _lastUpdatedColumnText = '//span[text()="Last Updated"]';
    private _scheduleTable = '//div[@class="ms-List-surface"]'
    

    public get newIconLocator() {
        return this._createIcon;
    }

    public get nameTextLocator() {
        return this._nameText;
    }

    public get statusTextLocator() {
        return this._statusText;
    }

    public get typeTextLocator() {
        return this._typeText;
    }

    public get lastUpdatedColumnTextLocator() {
        return this._lastUpdatedColumnText;
    }

    public get scheduleTableLocator() {
        return this._scheduleTable;
    }

 

    //#endregion

    //#region This region is to have the functions

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async navigateToSchedulePageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Schedules');
        await util.delay(5000);
    }

   

   
    

    //#endregion

}