import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
let webActions: WebActions;
let util: Utility

export class ContactsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _searchBox = '//input[@data-testid="contact-search-box"]';
    private _firstRowSearchResult = '//div[@data-automation-key="First Name_0"]';




    public get searchBoxLocator() {
        return this._searchBox;
    }

    public get firstRowSearchResultLocator() {
        return this._firstRowSearchResult
    }


    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInContactPage(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.firstRowSearchResultLocator);
    }

    async searchItem(item: string) {
        await webActions.waitForElementAttached(this.searchBoxLocator);
        await webActions.clickElement(this.searchBoxLocator);
        await webActions.enterElementText(this.searchBoxLocator, item);
        await util.delay(1000);
        await webActions.clickElement(this.searchBoxLocator);
        await webActions.keyPress(this.searchBoxLocator, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }





    //#endregion

}