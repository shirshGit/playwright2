import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util: Utility

export class UserrolePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _searchBox = '//div[@data-testid="userRolePage"]//input[@id="fabric-search-box"]';
    private _firstRowSearchCheckBoxInUserroleDetailPage = '//div[@data-list-index="1"]';
    private _firstRowSearchCheckBoxInUserrolePage = '//a[text()="abc"]/../../../..//i[@data-icon-name="StatusCircleCheckmark"]';
    private _deleteButtonInURPage = '//button[text()="Delete"]';
    private _deactivateBtnInContainer = '//button[text()="Deactivate"]/..';
    private _threeDotMenuOfSearchedItem = '//div[@data-testid="icon-menu-cell"]//i';
    private _firstRowCheckBoxOfContainer = '//div[@data-testid = "table_row"]//i[@data-icon-name = "StatusCircleCheckmark"]'
    private _popUpDeleteBtn = '//div[contains(@class, "DialogPopup")]//button[text()="Delete"]';
    private _deleteOptionAfterThreeDotMenu = '//i[@data-icon-name="delete"]';

    public get searchBoxLocator() {
        return this._searchBox;
    }

    public get firstRowSearchCheckBoxInURDetailPageLocator() {
        return this._firstRowSearchCheckBoxInUserroleDetailPage
    }
    
    public get firstRowSearchCheckBoxInUserRolePageLocator() {
        return this._firstRowSearchCheckBoxInUserrolePage
    }

    public get deleteButtonInUserRolePageLocator() {
        return this._deleteButtonInURPage;
    }
    
    public get threeDotMenuOfSearchedItemLocator() {
        return this._threeDotMenuOfSearchedItem;
    }

    public get firstRowCheckBoxLocator() {
        return this._firstRowCheckBoxOfContainer;
    }

    public get popUpDeleteBtnLocator() {
        return this._popUpDeleteBtn;
    }

    public get deleteOptionAfterThreeDotMenuLocator() {
        return this._deleteOptionAfterThreeDotMenu;
    }
  

    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInContactPage(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.firstRowSearchCheckBoxInURDetailPageLocator);
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

    async deleteItemFromTableContainerBar(userroleName: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(userroleName)
        ]);
        await util.delay(2000);
        await webActions.clickElement(this.firstRowCheckBoxLocator);
        await webActions.clickElement(this.deleteButtonInUserRolePageLocator);
        await webActions.clickElement(this.popUpDeleteBtnLocator);
    }

    

    //#endregion

}