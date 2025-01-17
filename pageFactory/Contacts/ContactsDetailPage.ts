import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { ContactsPage } from "@pageobjects/Contacts/ContactsPage";
import { Page } from "@playwright/test";

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



    public get systemAcessDropDownLocator() {
        return this._systemAccessDropDown
    }

    public get selectUserroleLocator() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }

    public get cancelContactPropertyPageLocator() {
        return this._cancelContactPropertyPage
    }

    public get applyButtonLocator() {
        return this._applyButtonOnconatctPropertyPage;
    }

    //#endregion

    //#region This region is to have the functions


    async clickOnSystemAcessDropDown() {
        await webActions.clickElement(this.systemAcessDropDownLocator);
    }

    async cancelContactsPropertyPage() {
        await webActions.clickElement(this.cancelContactPropertyPageLocator);
    }

    async selectGivenUserrole(userroleName: string) {
        await webActions.clickElement(this.systemAcessDropDownLocator);
        let xpath = this.selectUserroleLocator(userroleName);
        await webActions.clickElement(xpath);
        await this.clickOnApplyButton();
    }

    async clickOnApplyButton() {
        await webActions.clickElement(this.applyButtonLocator);
    }

    async ClickDiv() {
        await webActions.clickElement('(//i[@data-icon-name="chevronDark"]/div)[2]');
    }
    

    async clickI() {
        await webActions.clickElement('(//i[@data-icon-name="chevronDark"])[2]');
    }

    async clickBox() {
        await webActions.clickElement('//div[contains(text(),"System Access")]/../div/div//span[@id="Dropdown5450-option"]');
    }




    //#endregion

}