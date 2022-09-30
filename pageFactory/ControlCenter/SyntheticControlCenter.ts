import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
let webActions: WebActions;
let util: Utility

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
    private _targetScheduletab = '//div[@id="#targeting_and_scheduling"]//span[text()="Targeting & Scheduling"]';
    private _cancelTestDetailPage = '//span[text()="Cancel"]';
    private _cancelSearchedText = '//i[@data-icon-name="Clear"]/div';
    private _closeTestDetailPage = '//div[@data-testid="cancel-icon"]';
    private _copyOptionInThreeDotMenu = '//ul[contains(@class,"ms-ContextualMenu-list is-open")]//span[text()="Copy"]';
    private _copyButtonInTestLocationBlade = '//button[@type="button"]//span[text()="Copy"]';
    private _syntheticTestLocationTextAfterClickingOnCopy = '//div[contains(@class,"ms-Panel-main")]//span[text()="Tests Location"]';
    private _locationOfItem = '(//span[contains(@class,"ms-Breadcrumb-item")]/div[contains(@class,"ms-TooltipHost")])[2]';
    private _moveButtonInHeaderSection = '//button[text()="Move"]';
    private _moveButtonInTestLocationBlade = '//button[@type="button"]//span[text()="Move"]';
    private _divisionLevelDDInRootSection = '//div[contains(@class,"DivisionComboBox_divisionSelector")]//div[@id="chevron-down-icon"]';
    private _clientLevelInDivisionDropDown = '//div[contains(@class,"ms-Callout ms-Dropdown-callout")]//span[text()="Client Level"]';
    private _closeMasterBlade = '//div[@data-testid="cancel-icon"]';
    private _statusOfFirstItem = '//div[@data-automation-key="Status_4"]';
    private _getItemLocation = '//div[contains(@class,"BasicPropertySection_")]//div[@data-automation-id="visibleContent"]';
    private _testLocationTextIntestLocationBlade = '//span[text()="Tests Location"]';
    private _getDefaultItemselectedInDivisionDD = '//span[text()="Client Level"]';
    private _rumInRootBlade = '(//div[contains(@class,"NavigationTree_navGroupText_")][normalize-space()="RUM"])[2]';
    private _divLevelDropDown = '(//div[@data-testid="divisionSelector"]//div)[1]';
    private _closeChangeLogPage = '(//div[@data-testid="cancel-icon"])[2]';
    
    public get newItemCreation() {
        return this._newItemCreation;
    }

    public get threeDotMenuItems() {
        return (text: string) => { return `//ul[contains(@class,"ms-ContextualMenu-list is-open")]//span[text()="${text}"]` };
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

    public get copyOptionInThreeDotMenu() {
        return this._copyOptionInThreeDotMenu;
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
    public get cancelTestDetailPage() {
        return this._cancelTestDetailPage;
    }
    public get copyButtonInTestLocationBlade() {
        return this._copyButtonInTestLocationBlade;
    }

    public get closeItemPropertiesBlade() {
        return this._closeMasterBlade;
    }

    public get cancelSearchedItem() {
        return this._cancelSearchedText;
    }

    public get statusOfFirstItem(){
        return this._statusOfFirstItem;
    }

    public get getItemLocation(){
        return this._getItemLocation;
    }
   

    public get moveButtonInHeaderSection(){
        return this._moveButtonInHeaderSection;
    }

    public get moveButtonInTestLocationBlade(){
        return this._moveButtonInTestLocationBlade;
    }

    public get clickOnDivisionDropDown(){
        return this._divisionLevelDDInRootSection;
    }
    

    public get selectProductForTestLocation() {
        return (text: string) => { return `(//span[text()="${text}"])[2]` };
    }

    public get testLocationTextAfterClickingOnCopyInThreeDotMenu(){
        return this._testLocationTextIntestLocationBlade;
    }

    public get getItemSelectedInDivDropDown(){
        return this._getDefaultItemselectedInDivisionDD;
    }
 
    public get selectDivision(){
        return (text: string) => { return `//div[contains(@class,"dropdownItemsWrapper")]//span[text()="${text}"]` };
    }

    public get rumInRootBlade(){
        return this._rumInRootBlade
    }

    public get divLevelDropdown(){
        return this._divLevelDropDown;
    }

    public get closeChangeLogPage(){
        return this._closeChangeLogPage
    }

   
    
   
    //#endregion

    //#region This region is to have the functions

    

    async selectProductFromTestLocationBlade(productName: string) {
        let xpath = await this.selectProductForTestLocation(productName);
        await webActions.clickElement(xpath);
    }

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

    

    async copyItemFromThreeDotMenu(itemName: string, destinationProductID: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(itemName)
        ]);
        await util.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.copyOptionInThreeDotMenu);
        await this.selectProductFromTestLocationBlade(destinationProductID);
        await webActions.clickElement(this.copyButtonInTestLocationBlade);
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
        var elementsText = await webActions.getTextFromWebElements(element);
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

    async searchByLabel(label: string) {
        let searchByLabel = '/label:' + label;
        await this.searchItem(searchByLabel);
    }

    async pendoCloseIfPopsup() {
        let pendoElementCount = await webActions.getNoOfElementsPresentInPage(this.pendoCloseForNewFeature);
        if (+pendoElementCount > 0) {
            await webActions.clickElement(this.pendoCloseForNewFeature);
        }
    }

    async clickCancelTestPropertyButton() {
        await webActions.clickElement(this.cancelTestDetailPage);
    }

    async clearTextField(loc : string){
        await webActions.clearTextByBtnPress(loc);
    }

    async closeTestPropertyPage() {
        await webActions.clickElement(this._closeTestDetailPage);
    }

    
    async searchAndClickOnThreeDotMenu(itemName: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(itemName)
        ]);
        await util.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItem);
        await webActions.clickElement(this.threeDotMenuOfSearchedItem);
    }

    async threeDotMenuItem(itemName: string) {
        let xpath = this.threeDotMenuItems(itemName);
        return xpath;

    }

    async clickCopyButtonFromThreeDotMenu(itemName: string) {
        await this.searchAndClickOnThreeDotMenu(itemName);
        await webActions.clickElement(this.copyOptionInThreeDotMenu);
    }

    async fetchItemLocation() {
        let enddate = await webActions.getElementAttributeValue(this.getItemLocation, 'value');
        return enddate;
    }

    async closePropertyPage(){
        await webActions.clickElement(this._closeMasterBlade);
    }

    async moveSelectedItem(itemName : string ,product : string){
        await this.checkTheSearchedItem(itemName);
        await webActions.clickElement(this.moveButtonInHeaderSection);
        await this.selectProductFromTestLocationBlade(product);
        await webActions.clickElement(this.moveButtonInTestLocationBlade);
    }

    async clickDivisionDropDown(){
        await webActions.clickElement(this.clickOnDivisionDropDown);

    }

    async selectGivenDivisionFromDivisionDropDownInRoot(divName : string){
        await webActions.clickElement(this.selectDivision(divName));
    }

    async clickOnNewItemCreation(){
        return webActions.clickElement(this.newItemCreation);
    }

    async clickOnRumInRootBlade(){
        return webActions.clickElement(this.rumInRootBlade);

    }

    async closeChangeLogsPage(){
        await webActions.clickElement(this.closeChangeLogPage);
    }

   






    //#endregion

}