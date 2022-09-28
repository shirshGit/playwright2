import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
import { LoginPageObjects } from "@objects/LoginPageObjects";

let webActions: WebActions;
let util: Utility

export class ContactsPage {
    readonly page: Page;
    loginPageObjects = new LoginPageObjects();

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _searchBox = '//input[@data-testid="contact-search-box"]';
    private _firstRowSearchResult = '//div[@data-automation-key="First Name_0"]';




    public get searchBox() {
        return this._searchBox;
    }

    public get firstRowSearchResult() {
        return this._firstRowSearchResult
    }


    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInContactPage(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.firstRowSearchResult);
    }

    async searchItem(item: string) {
        await webActions.waitForElementAttached(this.searchBox);
        await webActions.clickElement(this.searchBox);
        await webActions.enterElementText(this.searchBox, item);
        await util.delay(1000);
        await webActions.clickElement(this.searchBox);
        await webActions.keyPress(this.searchBox, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }





    //#endregion

}