import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util : Utility

export class SynControlCenterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
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
    private _webChromeTest = '//p[text() = "Web"]/../../..//p[text() = "Chrome"]';
    private _pendoCloseForNewFeature = '//button[contains(@id, "pendo-close-guide")]';
    private _targetScheduletab = '//div[@id="#targeting_and_scheduling"]';
    private _cancelTestDetailPage = '//span[text()="Cancel"]';
    private _cancelSearchedText = '//i[@data-icon-name="Clear"]/div';
    private _closeTestDetailPage = '//div[@data-testid="cancel-icon"]';
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
    public get webChromeTest(){
        return this._webChromeTest;
    }
    public get pendoCloseForNewFeature(){
        return this._pendoCloseForNewFeature;
    }
    public get cancelTestDetailPage(){
        return this._cancelTestDetailPage;
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

    async searchItem(item: string) {
        await webActions.waitForElementAttached(this.searchBox);
        await webActions.clickElement(this.searchBox);
        await webActions.enterElementText(this.searchBox, item);
        await util.delay(1000);
        await webActions.clickElement(this.searchBox);
        await webActions.keyPress(this.searchBox, 'Enter')
        await webActions.onlyKeyPress('Enter');
        
    }

    async deleteItemFromThreeDotMenu(productName: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(productName)
        ]);
        await util.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.deleteOptionAfterThreeDotMenu);
        await webActions.clickElement(this.popUpDeleteBtn);
    }

    async deleteItemFromTableContainerBar(productName: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(productName)
        ]);
        await util.delay(2000);
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

    async openPropertiesOfSerachedItem(item: string) {
        await webActions.hoverOnElement(this.searchBox);
        await this.searchItem(item);
        await util.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.propertiesAfterThreeDotMenu);
    }

    async getElementTextFromElements(element: string) {
        var elementsText =await webActions.getTextFromWebElements(element);
        return elementsText;
    }

    async clickOnCollapsableItem(element) {
        await webActions.clickElement(element);
    }

    async getNoOfElementInSyntheticCCPage(locator: string) {
        let noOFElements = await webActions.getNoOfElementsPresentInPage(locator);
        return noOFElements;
    }

    async goToNewFolderCreate() {
        await webActions.clickElement(this.newItemCreation);
        await webActions.clickElement(this.newFolderItem);

    }

    async goToNewWebChromeTestCreate() {
        await webActions.clickElement(this.newItemCreation);
        await webActions.clickElement(this.webChromeTest);

    }

    async searchByLabel(label : string){
        let searchByLabel = '/label:' + label;
        await this.searchItem(searchByLabel);
    }

    async pendoCloseIfPopsup(){
        let pendoElementCount = await webActions.getNoOfElementsPresentInPage(this.pendoCloseForNewFeature);
        if(+pendoElementCount > 0)
        {
            await webActions.clickElement(this.pendoCloseForNewFeature);
        }
    }

    async clickCancelTestPropertyButton(){
        await webActions.clickElement(this.cancelTestDetailPage);
    }

    async cancelSearchedText(){
        await webActions.clickElement(this._cancelSearchedText);
    }

    async closeTestPropertyPage(){
        await webActions.clickElement(this._closeTestDetailPage);
    }

    


    //#endregion

}