import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from 'playwright';
import { testConfig } from '../../testConfig';
import { BrowserContext, expect, TestInfo } from '@playwright/test';
import { HomePage } from "@objects/HomePage";



let webActions: WebActions;
const ENV = process.env.ENV;

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    private _emailInput = '#Username';
    private _passwordInput = '#Password';
    private _loginBtn = '#user-login-button';
    private _dashboardDDLabel = 'div[ id = "header"] label[class *= "DashboardHeader_dashboardLabel"]';
    private _Persona = '//div[@id="persona"]';
    private _logoutButton = '//button[@id="sign-out"]';
    public get emailInputLocator() {
        return this._emailInput;
    }

    public get passwordInputLocator(){
        return this._passwordInput
    }

    public get loginBtnLocator(){
        return this._loginBtn
    }
    
    public get dashboardDDLabelLocator(){
        return this._dashboardDDLabel;
    }

    public get persona() {
        return this._Persona
    }

    public get logout() {
        return this._logoutButton;
    }

    async navigateToCPUrl(): Promise<void> {

        if (ENV === 'qa') {
            await webActions.navigateToURL(`https://ioqa.catchpoint.com/auth/Account/Login`);
        }
        else if (ENV === 'stage') {
            await webActions.navigateToURL(`https://iostage.catchpoint.com/auth/Account/Login`);
        }

    }


    async loginToCP(): Promise<void> {
        await webActions.enterElementText(this.emailInputLocator, testConfig.cpun);
        await webActions.enterElementText(this.passwordInputLocator, testConfig.cppwd);
        await webActions.clickElement(this.loginBtnLocator);
        //await webActions.waitForPageNavigation('domcontentloaded');
        await webActions.waitForElementAttached(this.dashboardDDLabelLocator);
    }

    async logOutFromBrowser() {
        await webActions.clickElement(this.persona);
        await webActions.clickElement(this.logout);
    }

    async loginWithOtherContact(email: string, pw: string) {
        await webActions.enterElementText(this.emailInputLocator, email);
        await webActions.enterElementText(this.passwordInputLocator, pw);
        await webActions.clickElement(this.loginBtnLocator);
        await webActions.waitForElementAttached(this.dashboardDDLabelLocator);
    }
}