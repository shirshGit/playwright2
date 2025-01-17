import { WebActions } from "@lib/WebActions";
import { expect, Page } from "@playwright/test";


let webActions: WebActions;

export class Verification {

    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async verifyHardAssertTrue(condition: boolean, errorMessage: string) {
        await expect(condition, `${errorMessage}`).toBeTruthy();
    }

    async verifySoftAssertTrue(condition: boolean, errorMessage: string) {
        await expect.soft(condition, `${errorMessage}`).toBeTruthy();
    }

    async verifyIfElementIsPresent(locator: string, errorMessage: string, isHardAssert: boolean = true) {
        await webActions.waitForElementAttached(locator);
        let noOFElements = await webActions.getNoOfElementsPresentInPage(locator);
        if (isHardAssert) {
            this.verifyHardAssertTrue(noOFElements > 0, errorMessage);
        }
        else {
            this.verifySoftAssertTrue(noOFElements > 0, errorMessage);
        }
    }

    async verifyTextIsNotPresentInPage(text: string, errorMessage: string, isHardAssert: boolean = true) {
        let noOFElements = await this.page.$$(`text=${text}`);
        let isElementPresent = await this.page.isVisible(`text=${text}`);
        if (isHardAssert) {
            await expect(noOFElements.length > 0 && isElementPresent === true, `${errorMessage}`).toBeFalsy();
        }
        else {
            await expect(noOFElements.length > 0 && isElementPresent === true, `${errorMessage}`).toBeFalsy();
        }
    }

    async verifyElementIsNotPresent(locator: string, errorMessage: string, isHardAssert: boolean = true) {
        let noOFElements = await webActions.getNoOfElementsPresentInPage(locator);
        if (isHardAssert) {
            this.verifyHardAssertTrue(noOFElements == 0, errorMessage);
        }
        else {
            this.verifySoftAssertTrue(noOFElements == 0, errorMessage);
        }
    }


    async verifyHardAssertForTextOfAnElement(locator: string, textTOMatch: string, errorMessage: string) {
        await expect(this.page.locator(locator), `${errorMessage}`).toContainText(textTOMatch);
    }

    async verifySoftAssertForTextOfAnElement(locator: string, textTOMatch: string, errorMessage: string) {
        await expect.soft(this.page.locator(locator), `${errorMessage}`).toContainText(textTOMatch);
    }

    async verifyAttributeValueOfLocatorMatch(locator: string, attribute: string, valueToMatch: string, errorMessage: string) {
        let classValue = await webActions.getElementAttributeValue(locator, attribute);
        await expect.soft(classValue.toString().includes(valueToMatch), `${errorMessage}`).toBeTruthy();
    }

    async verifyAttributeValueOfLocatorDoesNotMatch(locator: string, attribute: string, valueToMatch: string, errorMessage: string) {
        let classValue = await webActions.getElementAttributeValue(locator, attribute);
        await expect.soft(classValue.toString().includes(valueToMatch), `${errorMessage}`).toBeFalsy();
    }


    async verifyTwoSetOfTextsOfElements(listToCompare, listToCompareWith) {
        await listToCompare.forEach(val => expect.soft(listToCompareWith.includes(val), `Value did not match for ${val} input`).toBeTruthy());
    }

    async verifyValueIsNotNull(itemList: string[], errorMessage: string) {
        await itemList.forEach(element => {
            let value = element;
            expect.soft((value), errorMessage).not.toBeNull();
        });
    }
  
    async validationsForPage() {
        //validation for Rollback error
        await this.verifyTextIsNotPresentInPage("Rollback: An unexpected database related exception was encountered.Failed to Save Entity.", 'getting roll back error.');
        //validation for something went wrong
        await this.verifyTextIsNotPresentInPage("'Something went wrong!'", 'getting something went wrong message.');
        //validation for 500 error
        await this.verifyTextIsNotPresentInPage("500 - An unexpected error was encountered.", 'getting 500 error.');
        //validation for 404 error
        await this.verifyTextIsNotPresentInPage("Page not found", 'getting page not found error.');

    }

    async verifyIsDisabled(locator: string) {
        //await expect((await this.page.$(locator)).isDisabled(), `element is not disable`)
        const isDis = (await this.page.getByRole('button',{name:'Sign Up'}).isDisabled())
        console.log(isDis)
        await expect.soft(isDis, `element is not disable`).toBeTruthy();
 
    }








}