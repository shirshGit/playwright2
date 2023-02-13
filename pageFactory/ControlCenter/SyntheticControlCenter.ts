import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";
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

    private _newItemCreation = '//button[text()="New"]';
    private _searchBox = '//div[contains(@class,"FilterPanel_filter_")]//input[@data-testid="fabricsearchbox"]';
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
    private _transactionChromeTest = '//p[text() = "Transaction"]/../../..//p[text() = "Chrome"]';
    private _pendoCloseForNewFeature = '//button[contains(@id, "pendo-close-guide")]';
    private _targetScheduletab = '//div[@id="#targeting_and_scheduling"]//span[text()="Targeting & Scheduling"]';
    private _cancelTestDetailPage = '//span[text()="Cancel"]';
    private _cancelSearchedText = '//i[@data-icon-name="Clear"]/div';
    private _closeItemDetailPage = '//div[@data-testid="cancel-icon"]';
    private _statusInTestPropertyPage = '(//label[@id="toggle-stateText"])[1]';   
    private _closeTestDetailPage = '//div[@data-testid="cancel-icon"]';
    private _copyOptionInThreeDotMenu = '//ul[contains(@class,"ms-ContextualMenu-list is-open")]//span[text()="Copy"]';
    private _copyButtonInTestLocationBlade = '//button[@type="button"]//span[text()="Copy"]';
    private _syntheticTestLocationTextAfterClickingOnCopy = '//div[contains(@class,"ms-Panel-main")]//span[text()="Tests Location"]';
    private _locationOfItem = '(//span[contains(@class,"ms-Breadcrumb-item")]/div[contains(@class,"ms-TooltipHost")])[2]';
    private _moveButtonInHeaderSection = '//button[text()="Move"]';
    private _moveButtonInTestLocationBlade = '//button[@type="button"]//span[text()="Move"]';
    private _divisionLevelDDInRootSection = '//div[contains(@class,"DivisionComboBox_divisionSelector")]//div[@id="chevron-down-icon"]';
    private _clientLevelInDivisionDropDown = '//span[text()="Client Level"]';
    private _closeMasterBlade = '//div[@data-testid="cancel-icon"]';
    private _statusOfFirstItem = '//div[@data-automation-key="Status_4"]';
    private _getItemLocation = '(//span[contains(@class,"ms-Breadcrumb-item")])[2]/div';
    private _testLocationTextIntestLocationBlade = '//span[text()="Tests Location"]';
    private _getDefaultItemselectedInDivisionDD = '//span[text()="Client Level"]';
    private _rumInRootBlade = '(//div[contains(@class,"NavigationTree_navGroupText_")][normalize-space()="RUM"])[2]';
    private _divLevelDropDown = '(//div[@data-testid="divisionSelector"]//div)[1]';
    private _closeChangeLogPage = '(//div[@data-testid="cancel-icon"])[2]';
    private _testsTreeSideSideNav = '//div[contains(@class,"NavigationTree_navGroupText") and text() = "Tests"]';
    private _copyTestProductName = '//div[text()="ProductForCopyScenariosDoNotDelete"]'
    private _activeStatusOfFirstSearchedItem = '//span[text()="Active"]';

    public get newItemCreationLocator() {
        return this._newItemCreation;
    }

    public get threeDotMenuItemsLocator() {
        return (text: string) => { return `//ul[contains(@class,"ms-ContextualMenu-list is-open")]//span[text()="${text}"]` };
    }

    public get searchBoxLocator() {
        return this._searchBox;
    }

    public get newProductItemLocator() {
        return this._newProductItem;
    }

    public get firstRowSearchResultLocator() {
        return this._firstRowSearchResult;
    }

    public get firstRowCheckBoxOfContainerLocator() {
        return this._firstRowCheckBoxOfContainer;
    }

    public get deleteBtnLocator() {
        return this._deleteBtn;
    }

    public get popUpDeleteBtnLocator() {
        return this._popUpDeleteBtn;
    }

    public get locatorToClickOnSearchedItem() {
        return this._locatorToClickOnSearchedItem;
    }

    public get deactivateBtnInContainerLocator() {
        return this._deactivateBtnInContainer;
    }

    public get threeDotMenuOfSearchedItemLocator() {
        return this._threeDotMenuOfSearchedItem;
    }

    public get propertyInThreeDotMenuLocator() {
        return this._propertiesAfterThreeDotMenu;
    }

    public get deleteOptionInThreeDotMenuLocator() {
        return this._deleteOptionAfterThreeDotMenu;
    }

    public get copyOptionInThreeDotMenuLocator() {
        return this._copyOptionInThreeDotMenu;
    }

    public get newFolderItemLocator() {
        return this._newFolderItem;
    }

    public get webChromeTestLocator(){
        return this._webChromeTest;
    }

    public get transactionChromeTestLocator(){
        return this._transactionChromeTest;
    }
    

    public get pendoCloseForNewFeatureLocator(){
        return this._pendoCloseForNewFeature;
    }

    public get cancelTestDetailPageLocator() {
        return this._cancelTestDetailPage;
    }

    public get copyButtonInTestLocationBladeLocator() {
        return this._copyButtonInTestLocationBlade;
    }

    public get closeItemPropertiesBladeLocator() {
        return this._closeMasterBlade;
    }

    public get cancelSearchedItemLocator() {
        return this._cancelSearchedText;
    }

    public get statusOfFirstItemLocator(){
        return this._statusOfFirstItem;
    }

    public get getStatus() {
        return this._statusInTestPropertyPage;
    }
    
    public get getItemLocationLocator(){
        return this._getItemLocation;
    }

    public get copyTestproductNameInTestPropertyPageLocator(){
        return this._copyTestProductName;
    }
   

    public get itemInMasterBladeLocator(){
        return (text: string) => { return `//span[text()="${text}"]` }; 
    }

    public get moveButtonInHeaderSectionLocator(){
        return this._moveButtonInHeaderSection;
    }

    public get moveButtonInTestLocationBladeLocator(){
        return this._moveButtonInTestLocationBlade;
    }

    public get clickOnDivisionDropDownLocator(){
        return this._divisionLevelDDInRootSection;
    }
    

    public get selectProductForTestLocationLocator() {
        return (text: string) => { return `(//span[text()="${text}"])[2]` };
    }

    public get testLocationTextAfterClickingOnCopyInThreeDotMenuLocator(){
        return this._testLocationTextIntestLocationBlade;
    }

    public get selectedItemLocatorInDivDropDownLocator(){
        return this._getDefaultItemselectedInDivisionDD;
    }
 
    public get selectDivisionLocator(){
        return (text: string) => { return `//div[contains(@class,"dropdownItemsWrapper")]//span[text()="${text}"]` };
    }

    public get rumInRootBladeLocator(){
        return this._rumInRootBlade
    }

    public get divLevelDropdownLocator(){
        return this._divLevelDropDown;
    }

    public get closeChangeLogPageLocator(){
        return this._closeChangeLogPage
    }


    public get itemInThreeDotMenu() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }

    public get testsTreeSideSideNavLocator(){
        return this._testsTreeSideSideNav;
    }
    public get selectedItemLocatorInDivDropDown(){
        return this._clientLevelInDivisionDropDown;
    }
    public get activeStatsLocatorOfFirstSearchedItem(){
        return this._activeStatusOfFirstSearchedItem;
    }


   
    
   
    //#endregion

    //#region This region is to have the functions

    

    async selectProductFromTestLocationBlade(productName: string) {
        let xpath = await this.selectProductForTestLocationLocator(productName);
        await webActions.clickElement(xpath);
    }

    async navigateToSyntheticCC() {
        await webActions.navigateToURL(`ControlCenter/Tests`);
    }

    async goToNewProductCreate() {
        await webActions.clickElement(this.newItemCreationLocator);
        await webActions.clickElement(this.newProductItemLocator);

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

    async deleteItemFromThreeDotMenu(productName: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(productName)
        ]);
        await util.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElement(this.deleteOptionInThreeDotMenuLocator);
        await webActions.clickElement(this.popUpDeleteBtnLocator);
    }

    

    async copyItemFromThreeDotMenu(itemName: string, destinationProductID: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(itemName)
        ]);
        await util.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElement(this.copyOptionInThreeDotMenuLocator);
        await this.selectProductFromTestLocationBlade(destinationProductID);
        await webActions.clickElement(this.copyButtonInTestLocationBladeLocator);
    }

    async deleteItemFromTableContainerBar(productName: string) {
        const [searchItem] = await Promise.all([
            this.searchItem(productName)
        ]);
        await util.delay(2000);
        await webActions.clickElement(this.firstRowCheckBoxOfContainerLocator);
        await webActions.clickElement(this.deleteBtnLocator);
        await webActions.clickElement(this.popUpDeleteBtnLocator);
    }

    async navigateFromThreeDotMenu(item: string, navigationFromThreeDotMenu : string) {
        const [searchItem] = await Promise.all([
            this.searchItem(item)
        ]);
        await util.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElementJS(this.itemInThreeDotMenu(navigationFromThreeDotMenu));
    }

    async clickOnSearchedItemInCC(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.locatorToClickOnSearchedItem);
    }


    async checkTheSearchedItem(folderName: string) {
        await this.searchItem(folderName);
        await webActions.clickElement(this.firstRowCheckBoxOfContainerLocator);
    }

    async openPropertiesOfSerachedItem(item: string) {
        await webActions.hoverOnElement(this.searchBoxLocator);
        await this.searchItem(item);
        await util.delay(2000);
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElement(this.propertyInThreeDotMenuLocator);
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
        await webActions.clickElement(this.newItemCreationLocator);
        await webActions.clickElement(this.newFolderItemLocator);

    }

    async goToNewWebChromeTestCreate() {
        await webActions.clickElement(this.newItemCreationLocator);
        await webActions.clickElement(this.webChromeTestLocator);

    }

    async goToNewTransactionChromeTestCreate() {
        await webActions.clickElementJS(this.newItemCreationLocator);
        await webActions.clickElement(this.transactionChromeTestLocator);

    }

    async searchByLabel(label: string) {
        let searchByLabel = '/label:' + label;
        await this.searchItem(searchByLabel);
    }

    async pendoCloseIfPopsup() {
        let pendoElementCount = await webActions.getNoOfElementsPresentInPage(this.pendoCloseForNewFeatureLocator);
        if (+pendoElementCount > 0) {
            await webActions.clickElement(this.pendoCloseForNewFeatureLocator);
        }
    }

    async clickCancelTestPropertyButton() {
        await webActions.clickElement(this.cancelTestDetailPageLocator);
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
        await webActions.hoverOnElement(this.threeDotMenuOfSearchedItemLocator);
        await webActions.clickElement(this.threeDotMenuOfSearchedItemLocator);
    }

    async waitForItemPresentInMasterBlade(item : string){
        await webActions.waitForElementAttached(this.itemInMasterBladeLocator(item));
    }

    async getThreeDotMenuItem(itemName: string) {
        let xpath = this.threeDotMenuItemsLocator(itemName);
        let item =  await webActions.getElementText(xpath);
        return item;
    }


    async clickCopyButtonFromThreeDotMenu(itemName: string) {
        await this.searchAndClickOnThreeDotMenu(itemName);
        await webActions.clickElement(this.copyOptionInThreeDotMenuLocator);
    }

    async fetchItemLocation() {
        let enddate = await webActions.getElementAttributeValue(this.getItemLocationLocator, 'value');
        return enddate;
    }

    async closePropertyPage(){
        await webActions.clickElement(this._closeMasterBlade);
    }

    async moveSelectedItem(itemName : string ,product : string){
        await this.checkTheSearchedItem(itemName);
        await webActions.clickElement(this.moveButtonInHeaderSectionLocator);
        await this.selectProductFromTestLocationBlade(product);
        await webActions.clickElement(this.moveButtonInTestLocationBladeLocator);
    }

    async clickDivisionDropDown(){
        await webActions.clickElement(this.clickOnDivisionDropDownLocator);

    }

    async selectGivenDivisionFromDivisionDropDownInRoot(divName : string){
        await webActions.clickElement(this.selectDivisionLocator(divName));
    }

    async clickOnNewItemCreation(){
        return webActions.clickElement(this.newItemCreationLocator);
    }

    async clickOnRumInRootBlade(){
        return webActions.clickElement(this.rumInRootBladeLocator);

    }

    async closeChangeLogsPage(){
        await webActions.clickElement(this.closeChangeLogPageLocator);
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

   






    //#endregion

}