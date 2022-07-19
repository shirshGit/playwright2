import { WebActions } from "@lib/WebActions";
import { expect, Page } from "@playwright/test";

let webActions:WebActions;

export class Verification{

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async verifyHardAssertTrue(condition : boolean, errorMessage : string){
        await expect(condition, `${errorMessage}`).toBeTruthy();
    }

    async verifySoftAssertTrue(condition : boolean, errorMessage :string){
        await expect.soft(condition, `${errorMessage}`).toBeTruthy();
    }

    async verifyIfElementIsPresent(locator : string, errorMessage: string, typeOFverification : boolean = true){
        let noOFElements = await webActions.getNoOfElementsPresentInPage(locator);
        if(typeOFverification)
        {
            this.verifyHardAssertTrue(noOFElements>0, errorMessage);
        }
        else
        {
            this.verifySoftAssertTrue(noOFElements>0, errorMessage);
        }
    }

    async verifyElementIsNotPresent(locator : string, errorMessage: string, typeOFverification : boolean = true){
        let noOFElements = await webActions.getNoOfElementsPresentInPage(locator);
        if(typeOFverification)
        {
            this.verifyHardAssertTrue(noOFElements == 0, errorMessage);
        }
        else
        {
            this.verifySoftAssertTrue(noOFElements == 0, errorMessage);
        }
    }


    async verifyHardAssertForTextOfAnElement(locator : string, textTOMatch: string, errorMessage: string, typeOFverification : boolean = true){

        await expect(this.page.locator(locator), `${errorMessage}`).toContainText(textTOMatch);
    }

    async verifySoftAssertForTextOfAnElement(locator : string, textTOMatch: string, errorMessage: string, typeOFverification : boolean = true){

        await expect.soft(this.page.locator(locator), `${errorMessage}`).toContainText(textTOMatch);
    }

    async verifyAttributeValueOfLocatorMatch(locator: string, attribute:string, valueToMatch: string, errorMessage: string){
        let classValue = await webActions.getElementAttributeValue(locator, attribute);
        await expect.soft(classValue.toString().includes(valueToMatch), `${errorMessage}`).toBeTruthy();
    }

    async verifyAttributeValueOfLocatorDoesnotMatch(locator: string, attribute:string, valueToMatch: string, errorMessage: string){
        let classValue = await webActions.getElementAttributeValue(locator, attribute);
        await expect.soft(classValue.toString().includes(valueToMatch), `${errorMessage}`).toBeFalsy();
    }


    async verifyTwoSetOfTextsOfElements(listToComare, listToComareWith){
        await listToComare.forEach(val => expect.soft(listToComareWith.includes(val), `Value did not match for ${val} input`).toBeTruthy());
    }

}