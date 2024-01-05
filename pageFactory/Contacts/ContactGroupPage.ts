import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
let webActions: WebActions;
let util: Utility

export class ContactGroupPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _createButton = '//button[text()="Create"]';
    private _name   = '//span[text()="Name"]';
    private _division  = '//span[text()="Division"]';
    private _activeContact  = '//span[text()="Active Contacts"]';
    private _inactiveContact = '//span[text()="Inactive Contacts"]';
    private _status = '//span[text()="Status"]';
    private _lastUpdate = '//span[text()="Last Updated"]';
    private _contactGroupTable = '//div[@class="ms-List-page"][1]'




    
    public get createButtonLocator() {
        return this._createButton;
    }

    public get nameTextLocator() {
        return this._name;
    }

    public get divisionTextLocator() {
        return this._division;
    }

    public get statusTextLocator() {
        return this._status;
    }

    public get activeContactTextLocator() {
        return this._activeContact;
    }

    public get inactiveContactTextLocator() {
        return this._inactiveContact;;
    }

    public get lastUpdatedTextTextLocator() {
        return this._lastUpdate;
    }
    public get contactGroupLocator() {
        return this._contactGroupTable;
    }

    



    //#endregion

    //#region This region is to have the functions

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async navigateToContactsGroupPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'ContactGroups');
        await util.delay(5000);
    }






    //#endregion

}