import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _myAccount = '//ul[@class="wptheader_acct"]//li//a[@href="/account"]'
    private _threeLine = '//details[@class="wptheader_menu"]//summary'
    private _logoutButton = '//button[text()="Logout"]'
    private _simpleConfig  = '//label[@for="simple"]'
    private _webPageTestLogo = '//a[normalize-space()="WebPageTest"]'
    private _advanceConfig = '//label[@for="advanced"]'
    private _repeatView = '//label[@for="rv"]'
    private _lightHouseAudit = '//label[@for="lighthouse-simple"]'
    private _startTestButton = '//div[@class="test_presets_easy_submit"]//input[@name="submit"]'
    private _testsettingstabButton ='//a[contains(@href,"#test-settings")]';
    private _testsettingstab = '//div[contains(@id ,"test-settings")]';
    private _advancedtabButton ='//a[contains(@href,"#advanced-settings")]';
    private _advancedtab ='//div[contains(@id ,"advanced-settings")]';
    private _ChromiumtabButton ='//a[contains(@href,"#advanced-chrome")]';
    private _Chromiumtab ='//div[contains(@id ,"advanced-chrome")]';
    private _AuthtabButton ='//a[contains(@href,"#auth")]';
    private _Authtab ='//div[contains(@id ,"auth")]';
    private _BlocktabButton ='//a[contains(@href,"#block")]';
    private _Blocktab ='//div[contains(@id ,"block")]';
    private _SpoftabButton ='//a[contains(@href,"#spof")]';
    private _Spoftab ='//div[contains(@id ,"spof")]';

    public get threeLineLocator() {
        return this._threeLine;
    }
    public get SpoftabButtonLocator() {
        return this._SpoftabButton;
    }
    public get _SpoftabLocator() {
        return this._Spoftab;
    }
    public get BlocktabButtonLocator() {
        return this._BlocktabButton;
    }

    public get BlocktabLocator() {
        return this._Blocktab;
    }

    public get AuthtabLocator() {
        return this._Authtab;
    }
    public get AuthtabButtonLocator() {
        return this._AuthtabButton;
    }
    public get ChromiumtabButtonLocator() {
        return this._ChromiumtabButton;
    }
    public get ChromiumtabLocator() {
        return this._Chromiumtab;
    }
    public get testsettingsLocator() {
        return this._testsettingstabButton;
    }
    public get testsettingstabLocator() {
        return this._testsettingstab;
    }
    public get advancedtabButtonLocator() {
        return this._advancedtabButton;
    }
    public get advancedtabLocator() {
        return this._advancedtab;
    }

    public get myAccountLinkLocator() {
        return this._myAccount;
    }
    public get logoutLinkLocator() {
        return this._logoutButton;
    }
    public get simpleConfigTextLocator() {
        return this._simpleConfig;
    }
    public get advanceConfigTextLocator() {
        return this._advanceConfig;
    }
    public get repeatViewTextLocator() {
        return this._repeatView;
    }
    public get lHTextLocator() {
        return this._lightHouseAudit;
    }
    public get startButtonLocator() {
        return this._startTestButton;
    }
    public get wptLogoLocator() {
        return this._webPageTestLogo;
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

    

    //#endregion

}