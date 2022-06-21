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

}