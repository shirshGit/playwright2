import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility

export class SignUpPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _searchBox = '//div[@data-testid="userRolePage"]//input[@id="fabric-search-box"]';
    private _firstName = '//input[@name="first-name"]'
    private _lastName = '//input[@name="last-name"]'
    private _company = '//input[@name="company-name"]'
    private _email = '//input[@name="email"]'
    private _pw = '//input[@name="password"]'
    private _cpw = '//input[@name="confirm-password"]'
    private _checkBox = '//input[@id="terms-service-check"]'
    private _signUpButton = '//button[text()="Sign Up"]'
    private _signUpPageLink = '//a[text()="Sign-up"]'
    private _freeStarterPlan = '//button[text()="Start for free"]'
    private _billingCycleDD = '//select[@id="billing-cycle"]'
    private _annualPlan = '//option[text()="Annual"]'
    private _monthlyPlan = '//option[text()="Monthly"]'
    private _yearlyPlanCycle = '//span[normalize-space()="/year"]'
    private _monthlyPlanCycle = '//span[normalize-space()="/month"]'

    public get searchBoxLocator() {
        return this._searchBox;
    }
    public get firstNameLocator() {
        return this._firstName;
    }
    public get lastNameLocator() {
        return this._lastName;
    }
    public get companyNameLocator() {
        return this._company;
    }
    public get emailLocator() {
        return this._email;
    }
    public get pwLocator() {
        return this._pw;
    }
    public get confirmPwLocator() {
        return this._cpw;
    }
    public get checkBoxLocator() {
        return this._checkBox;
    }
    public get signUpButtonLocator() {
        return this._signUpButton;
    }
    public get freeStarterPlanLocator() {
        return this._freeStarterPlan;
    }
    public get billingCyclePlanLocator() {
        return this._billingCycleDD;
    }
    public get annualPlanLocator() {
        return this._annualPlan;
    }
    public get monthlyPlanLocator() {
        return this._monthlyPlan;
    }
    public get signUpPageLinkLocator() {
        return this._signUpPageLink;
    }
    public get monthlyPlanCycleLocator() {
        return this._monthlyPlanCycle;
    }
    public get yearlyPlanCycleLocator() {
        return this._yearlyPlanCycle;
    }
   

    //#endregion

    //#region This region is to have the functions

   
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async clickItem(loc:string){
        await webActions.clickElement(loc) 
    }
    async enterTextToField(loc:string , text:string){
        await webActions.enterElementText(loc,text)
        await webActions.onlyKeyPress('Enter')
    }
    async getElementText(loc:string){
       return  await webActions.getElementText(loc)
    }
    async fillSignUpDetails(firstName:string, lastName:string, email:string, companyName:string, pw:string, cpw:string){
        await webActions.enterElementText(this.firstNameLocator,firstName)
        await webActions.enterElementText(this.lastNameLocator,lastName)
        await webActions.enterElementText(this.emailLocator,email)
        await webActions.enterElementText(this.companyNameLocator,companyName)
        await webActions.enterElementText(this.pwLocator,pw)
        await webActions.enterElementText(this.confirmPwLocator,cpw)
        await webActions.clickElement(this.checkBoxLocator)
    }
   

    

    //#endregion

}