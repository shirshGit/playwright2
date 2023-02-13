import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import {testConfig} from '../../testConfig';
import { BrowserContext, expect } from '@playwright/test';

let webActions: WebActions;

export class NewTabInstatntTest{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    loginPageObjects = new LoginPageObjects();

    async typeUrlInInstantTest(): Promise<void> {
        await webActions.enterElementText(this.loginPageObjects.CP_INSTANT_TEST_SYNTHETIC_URL, 'https://www.google.com');
    }

    async clickOnInstantTestRun(): Promise<void> {
        await webActions.clickElement('#primary-button');
    }

    async clickOnSystemDropDown(): Promise<void> {
        await webActions.clickElement('#contact-section-root');
    }
}