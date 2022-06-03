import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from 'playwright';
import {testConfig} from '../../testConfig';
import { BrowserContext, expect } from '@playwright/test';

let webActions: WebActions;
const ENV = process.env.ENV;

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    loginPageObjects = new LoginPageObjects();

    async navigateToCPUrl(): Promise<void>{

        if (ENV === 'qa') {
            await webActions.navigateToURL(`https://ioqa.catchpoint.com/auth/Account/Login`);
        }
        else if(ENV === 'stage')
        {
            await webActions.navigateToURL(`https://iostage.catchpoint.com/auth/Account/Login`);
        }

    }

   async loginToCP() : Promise<void> {
       await webActions.enterElementText(this.loginPageObjects.CP_EMAIL_FIELD, testConfig.cpun);
       await webActions.enterElementText(this.loginPageObjects.CP_PASSWORD_FIELD, testConfig.cppwd);
       await webActions.clickElement(this.loginPageObjects.CP_LOGIN_BTN);
       
   }

   async openInstantTest(): Promise<void>{
       await webActions.clickElement(this.loginPageObjects.CP_INSTANT_TEST_ID);
   }

   async typeUrlInInstantTest(): Promise<void> {
       await webActions.enterElementText(this.loginPageObjects.CP_INSTANT_TEST_SYNTHETIC_URL, 'https://www.google.com')
   }

   async newWindowHandle(context: BrowserContext, locator: string){
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        await this.page.click(locator)
    ])

    await newWindow.waitForLoadState("load");
    return newWindow;
   }


   async navigateToEndpointOverviewDB(): Promise<void> {
       await webActions.clickElement('div[class *= "DashboardHeader_dashboardNameCont"]');
       await webActions.clickElement('span[title = "Overview Dashboards"]');
       await webActions.clickElement('//span[text()="Endpoint Monitoring Overview"]');
    //    this.page.$eval(document.evaluate('//span[text()="Endpoint Monitoring Overview"]', document, null, XPathResult.ANY_TYPE, null), (element: HTMLElement) => element.click());
    //    webActions.clickElement(String(xpath));
   }

   async openDivisionList(): Promise<void> {
       await webActions.clickElement('div[data-testid = "division-section-root-div"]');
   }
}
