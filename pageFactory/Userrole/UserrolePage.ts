import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { LoginPage } from "@pageobjects/Login/LoginPage";

let webActions: WebActions;
let util: Utility
let login : LoginPage;

export class UserrolePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
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
    private _createIcon = '//button[text()="Create"]';
    private _UserRolePropertiesBlade = '//div[contains(@class,"ms-Panel-main")]';
    private _nameText = '//span[text()="Name"]';
    private _divisionText = '//span[text()="Division"]';
    private _activeContactText = '//span[text()="Active Contacts"]';
    private _inactiveContactText = '//span[text()="Inactive Contacts"]';
    private _userroleTable = "//div[@class='ms-List-page']";

    

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

    public get createIconLocator() {
        return this._createIcon;
    }

    public get divisionTextLocator() {
        return this._divisionText;
    }
    public get activeContactTextLocator() {
        return this._activeContactText;
    }
    public get inactiveContactTextLocator() {
        return this._inactiveContactText;
    }
    public get nameTextLocator() {
        return this._nameText;
    }
    public get userroleTableLocator() {
        return this._userroleTable;
    }

    public get UserRolePropertiesBladeLoacator() {
        return this._UserRolePropertiesBlade;
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
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async navigateToUserrolePageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'UserRoles');
        await util.delay(5000);
    }
    async LoginToUserrolePage() {
        this.navigateToUserrolePageByURL();
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.userroleTableLocator);
    }

    async click(locator:string) {
        await webActions.clickElement(locator);
    }
    

    //#endregion

}