import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { ContactsPage } from "@pageobjects/Contacts/ContactsPage";

let webActions: WebActions;
let util: Utility

export class ContactDetailsPage extends ContactsPage {
    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _systemAccessDropDown = '(//i[@data-icon-name="chevronDark"])[1]';
    private _cancelContactPropertyPage = '//div[@data-testid="cancel-icon"]';
    private _applyButtonOnconatctPropertyPage = '//span[text()="Apply"]';


    public get systemAcessDropDown() {
        return this._systemAccessDropDown
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