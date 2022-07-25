import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";

let webActions: WebActions;

export class SynControlCenterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    //#region This region is for getter

    private _newItemCreation: string = '//button[text()="New"]';
    private _searchBox = '//div[@id = "callOutTarget"]//input[@id ="fabric-search-box"]';
    private _newProductItem = '//p[text()="Product"]';
    private _newFolderItem = '//p[text()="Folder"]';
    private _firstRowSearchResult = '//div[@data-testid = "table_row"]//a';
    private _firstRowCheckBoxOfContainer = '//div[@data-testid = "table_row"]//i[@data-icon-name = "StatusCircleCheckmark"]'
    private _deleteBtn = '//button[text()="Delete"]';
    private _popUpDeleteBtn = '//div[contains(@class, "DialogPopup")]//button[text()="Delete"]';
    private _locatorToClickOnSearchedItem = '//div[@data-testid = "table_row"]//div[@data-automationid = "DetailsRowCell"]//a';
    private _deactivateBtnInContainer = '//button[text()="Deactivate"]/..';
    private _threeDotMenuOfSearchedItem = '//div[@data-testid="icon-menu-cell"]//i';
    private _propertiesAfterThreeDotMenu = '//i[@data-icon-name="properties"]';
    private _deleteOptionAfterThreeDotMenu = '//i[@data-icon-name="delete"]';



    public get newItemCreation() {
        return this._newItemCreation;
    }

    public get searchBox() {
        return this._searchBox;
    }

    public get newProductItem() {
        return this._newProductItem;
    }

    public get firstRowSearchResult() {
        return this._firstRowSearchResult;
    }

    public get firstRowCheckBoxOfContainer() {
        return this._firstRowCheckBoxOfContainer;
    }

    public get deleteBtn() {
        return this._deleteBtn;
    }

    public get popUpDeleteBtn() {
        return this._popUpDeleteBtn;
    }

    public get locatorToClickOnSearchedItem() {
        return this._locatorToClickOnSearchedItem;
    }

    public get deactivateBtnInContainer() {
        return this._deactivateBtnInContainer;
    }

    public get threeDotMenuOfSearchedItem() {
        return this._threeDotMenuOfSearchedItem;
    }

    public get propertiesAfterThreeDotMenu() {
        return this._propertiesAfterThreeDotMenu;
    }

    public get deleteOptionAfterThreeDotMenu() {
        return this._deleteOptionAfterThreeDotMenu;
    }

    public get newFolderItem() {
        return this._newFolderItem;
    }




    //#endregion

    //#region This region is to have the functions

    async navigateToSyntheticCC() {
        await webActions.navigateToURL(`ControlCenter/Tests`);
    }

    async goToNewProductCreate() {
        await webActions.clickElement(this.newItemCreation);
        await webActions.clickElement(this.newProductItem);

    }

    async randomItemName(noOfChars: number) {
        var name = await webActions.generateRandomText(noOfChars);
        return 'AutomationUI_Delete' + name;
    }

    async searchItem(item: string) {
        await webActions.enterElementText(this.searchBox, item);
        await webActions.delay(1000);
        await webActions.clickElement(this.searchBox);
        await webActions.keyPress(this.searchBox, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    async deleteItemFromThreeDotMenu(productName: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(productName)
        ]);
        await webActions.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.deleteOptionAfterThreeDotMenu);
        await webActions.clickElement(this.popUpDeleteBtn);
    }

    async deleteItemFromTableContainerBar(productName: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(productName)
        ]);
        await webActions.delay(2000);
        await webActions.clickElement(this.firstRowCheckBoxOfContainer);
        await webActions.clickElement(this.deleteBtn);
        await webActions.clickElement(this.popUpDeleteBtn);
    }

    async clickOnSearchedItemInCC(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.locatorToClickOnSearchedItem);
    }


    async checkTheSearchedItem(folderName: string) {
        await this.searchItem(folderName);
        await webActions.clickElement(this.firstRowCheckBoxOfContainer);
    }

    async delay(time: number) {
        await webActions.delay(time);
    }

    async openPropertiesOfSerachedItem(item: string) {
        await webActions.hoverOnElement(this.searchBox);
        await this.searchItem(item);
        await webActions.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.propertiesAfterThreeDotMenu);
    }

    async getElementTextFromElements(element: string) {
        var elementsText = webActions.getTextFromWebElements(element);
        return elementsText;
    }

    async clickOnCollapsableItem(element) {
        await webActions.clickElement(element);
    }

    async getNoOfElementInSyntheticCCPage(locator: string) {
        let noOFElements = await webActions.getNoOfElementsPresentInPage(locator);
        return noOFElements;
    }



    //#endregion

}