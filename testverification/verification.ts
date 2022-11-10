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
        let noOFElements = await webActions.getNoOfElementsPresentInPage(locator);
        if (isHardAssert) {
            this.verifyHardAssertTrue(noOFElements > 0, errorMessage);
        }
        else {
            this.verifySoftAssertTrue(noOFElements > 0, errorMessage);
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

    async verifyValueIsNotNull(itemList, errorMessage : string){
        await itemList.forEach(element =>  {
        let value = element;
         expect.soft((value),errorMessage).not.toBeNull();
        });
    }



}