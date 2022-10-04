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
    private _searchBox = '//input[@placeholder="Search Name, Parent, Url"]';
    private _firstRowSearchCheckBoxInSelectorPage = '//i[@data-icon-name="StatusCircleCheckmark"]/div';
    
    public get searchBox() {
        return this._searchBox;
    }

    public get firstRowSearchCheckBoxInSelectorPage() {
        return this._firstRowSearchCheckBoxInSelectorPage
    }

  
    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInSelectorPage(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.firstRowSearchCheckBoxInSelectorPage);
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