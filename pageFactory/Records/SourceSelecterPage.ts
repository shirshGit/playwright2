import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
import { ContactsPage } from "@pageobjects/Contacts/ContactsPage";
import { RecordsPage } from "./RecordsPage";

let webActions: WebActions;
let util: Utility

export class SourceSelectorPage extends RecordsPage{
    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _searchBox = '//input[@data-testid="searchText"]';
    private _firstRowSearchCheckBoxInSelectorPage = '//i[@data-icon-name="StatusCircleCheckmark"]/div';
    
    public get searchBoxLocator() {
        return this._searchBox;
    }

    public get firstRowSearchCheckBoxInSelectorPageLocator() {
        return this._firstRowSearchCheckBoxInSelectorPage
    }

  
    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInSelectorPage(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.firstRowSearchCheckBoxInSelectorPageLocator);
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