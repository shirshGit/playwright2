import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { LoginPage } from "@pageobjects/Login/LoginPage";
let webActions: WebActions;
let util: Utility;
let login : LoginPage;



export class ContactsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }

    loginPageObjects = new LoginPageObjects();
    
    
    

    //#region This region is for getter

    private _searchBox = '//input[@data-testid="contact-search-box"]';
    private _firstRowSearchResult = '//div[@data-automation-key="First Name_0"]';
    private _createButton = '//button[text()="Create"]';
    private _firstName   = '//span[text()="First Name"]';
    private _lastName   = '//span[text()="Last Name"]';
    private _status   = '//span[text()="Status"]';
    private _email   = '//span[text()="Email"]';
    private _telephone   = '//span[text()="Telephone"]';
    private _companyName    = '//span[text()="Company Name"]';
    private _systemAccess = '//span[text()="System Access"]';
    private _division  = '//span[text()="Division"]';
    private _contactTable = '//div[@class="ms-List"]';
    private _createcontactPage = '//div[contains(@class,"ms-Panel-main")]';



    public get searchBoxLocator() {
        return this._searchBox;
    }

    public get firstRowSearchResultLocator() {
        return this._firstRowSearchResult
    }

    public get createButtonLocator() {
        return this._createButton;
    }

    public get firstNameLocator() {
        return this._firstName;
    }

    public get lastNameLocator() {
        return this._lastName;
    }

    public get statusLocator() {
        return this._status;
    }

    public get emailLocator() {
        return this._email;
    }

    public get telephoneLocator() {
        return this._telephone;
    }

    public get companyNameLocator() {
        return this._companyName;
    }

    public get systemAccessLocator() {
        return this._systemAccess;
    }

    public get divisionLocator() {
        return this._division;
    }
    public get contactTableLocator() {
        return this._contactTable;
    }
    
    public get createcontactPageLocator() {
        return this._createcontactPage;
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
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async navigateToContactsPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Contacts');
        await util.delay(5000);
    }

    async LoginToContactsPage() {
        this.navigateToContactsPageByURL();
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.contactTableLocator);
    }

    async Click(locator:string) {
        await webActions.clickElement(locator);
    }



    //#endregion

}