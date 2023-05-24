import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility

export class MyAccountPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _wptLogochBox = '//a[@id="WPTLogo"]'
    private _emailBox = '//input[@id="Username"]'
    private _passwordBox = '//input[@id="Password"]'
    private _loginButton = '//button[@id="user-login-button"]'
    private _forgotPasswordLink = '//a[@id="forgotPasswordLink"]'
    private _forgotPWEmailBox = '//input[@id="ResetPasswordEmail"]'
    private _forgotPasswordButton = '//button[@id="reset-password-button"]'
   
    public get wptLogoLocator() {
        return this._wptLogochBox;
    }
    public get emailFieldLocator() {
        return this._emailBox;
    }
    public get pwFieldLocator() {
        return this._passwordBox;
    }
    public get loginLocator() {
        return this._loginButton;
    }
    public get forgotPWLinkLocator() {
        return this._forgotPasswordLink;
    }
    public get fotgotPWEmailBocLocator() {
        return this._forgotPWEmailBox;
    }
    public get forgotPWButtonLocator() {
        return this._forgotPasswordButton;
    }


    //#endregion

    //#region This region is to have the functions

   
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    

    //#endregion

}