import { LoginPage } from "@pageobjects/Login/LoginPage";
import { Page, TestInfo } from "@playwright/test";
import { TestResult, TestStatus } from "@playwright/test/reporter";
import { WebActions } from "./WebActions";


let webActions: WebActions;
let loginPage: LoginPage;

export class BaseTestUtility {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        loginPage = new LoginPage(this.page);
    }



    async beforeEveryTest() {
        await loginPage.navigateToCPUrl();
        await loginPage.loginToCP();
    }

    async fullPageScreenShot(testInfo: TestInfo) {

        if (testInfo.status.toString() === 'failed' || testInfo.errors.length > 0) {
            await webActions.takeFullPageScreenShot(testInfo);
        }

    }

    async getUrl() {
        let url = await webActions.getCurrentPageUrl();
        return url;
    }

    
}