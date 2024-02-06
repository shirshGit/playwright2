import { WebActions } from "@lib/WebActions";
import { Locator, Page, expect } from "@playwright/test";

let webActions: WebActions;

export class ScreenShotVerification{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async verifyScreenShotOfAComponent(locator:string, screenshotname:string){
        expect(await webActions.takeScreeShotOfComponent(locator)).toMatchSnapshot(screenshotname,{maxDiffPixelRatio:0.015});
        //expect(await this.page.locator(locator).screenshot()).toMatchSnapshot(screenshotname);
    }

    async verifyScreenShotOfAPageWithMaskedElement(maskedElements: Locator[],screenshotname:string){
        expect(await webActions.takeFullPageScreeShotOfComponentWithMaskedElements(maskedElements)).toMatchSnapshot(screenshotname,{maxDiffPixelRatio:0.015})
        //expect(await this.page.locator(locator).screenshot()).toMatchSnapshot(screenshotname);
    }

    async verifyScreenShotOfFullPage(screenshotname:string){
        expect (await this.page.screenshot({fullPage: true })).toMatchSnapshot(screenshotname,{maxDiffPixelRatio:0.015});
    }

}