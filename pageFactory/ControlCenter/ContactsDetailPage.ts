import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
import { LoginPageObjects } from "@objects/LoginPageObjects";

let webActions: WebActions;
let util: Utility

export class ContactDetailsPage {
    readonly page: Page;
    loginPageObjects = new LoginPageObjects();

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _searchBox = '//input[@data-testid="contact-search-box"]';
    private _firstRowSearchResult = '//div[@data-automation-key="First Name_0"]';
    private _systemAccessDropDown = '(//i[@data-icon-name="chevronDark"])[1]';
    private _userrole = '//span[contains(text(), "OnlyMangeTestPermission")]'
    private _cancelContactPropertyPage = '//div[@data-testid="cancel-icon"]';
    private _applyButtonOnconatctPropertyPage = '//span[text()="Apply"]';




    public get searchBox() {
        return this._searchBox;
    }

    public get systemAcessDropDown() {
        return this._systemAccessDropDown
    }

    public get firstRowSearchResult() {
        return this._firstRowSearchResult
    }

    public get selectUserrole() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }

    public get cancelContactPropertyPage() {
        return this._cancelContactPropertyPage
    }

    public get applyButton() {
        return this._applyButtonOnconatctPropertyPage;
    }

    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInContactPage(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.firstRowSearchResult);
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

    async clickOnSystemAcessDropDown() {
        await webActions.clickElement(this.systemAcessDropDown);
    }

    async cancelContactsPropertyPage() {
        await webActions.clickElement(this.cancelContactPropertyPage);
    }

    async selectGivenUserrole(userroleName: string) {
        await this.clickOnSystemAcessDropDown();
        let xpath = this.selectUserrole(userroleName);
        await webActions.clickElement(xpath);
        await this.clickOnApplyButton();
    }

    async clickOnApplyButton() {
        await webActions.clickElement(this.applyButton);
    }



    //#endregion

}