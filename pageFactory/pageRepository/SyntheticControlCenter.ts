import { WebActions } from "@lib/WebActions";
import type { Page } from 'playwright';
import {SideNavigationBar} from '@objects/SideNavigationBar';
import { ControlCenter } from "@objects/ControlCenter";
import { expect } from "@playwright/test";

let webActions: WebActions;

export class SyntheticControlCenter{
    readonly page:Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    sideNavBar = new SideNavigationBar();
    ccSynthetic = new ControlCenter();


    async navigateToSyntheticCC(){
        await webActions.navigateToURL(`ControlCenter/Tests`);
    }

    async navigateToSyntheticCCFromSideNavigation(){
        await webActions.clickElement(this.sideNavBar.SIDE_NAV_CONTROLCENTER)
        await webActions.clickElement(this.sideNavBar.SIDE_NAV_CCTEST);

    }

    async goToNewProductCreate(){
        await webActions.clickElement(this.ccSynthetic.NEW_ITEM_CREATION);
        await webActions.clickElement(this.ccSynthetic.NEW_PRODUCT_ITEM);
        
    }

    async randomProductName(noOfChars : number){
        var name = await webActions.generateRandomText(noOfChars);  
        return 'AutomationUI_Delete' + name;     
    }

    async createAProductWithBasicSettings(productName: string, nodeName: string){
        await webActions.enterElementText(this.ccSynthetic.PRODUCT_NAME_FIELD, productName);
        await webActions.enterElementText(this.ccSynthetic.ADD_NODES_FIELD, nodeName);
        await webActions.keyPress(this.ccSynthetic.ADD_NODES_FIELD , "Enter");
        await webActions.clickElement(this.ccSynthetic.SAVE_BUTTON);
    }

    async searchProduct(productName : string){
        await webActions.enterElementText(this.ccSynthetic.SEARCH_BOX, productName);
        await webActions.clickElement(this.ccSynthetic.SEARCH_BOX);
        //await webActions.keyPress(this.ccSynthetic.SEARCH_BOX, "Enter");
        //await webActions.delay(5000);
        await webActions.onlyKeyPress('Enter');
    }

    async verifyIfSearchProductFound(productName:string){
        await this.searchProduct(productName);
        await webActions.verifyElementText(this.ccSynthetic.FIRST_ROW_SEARCH_RESULT, productName);
    }

    async deleteProduct(productName : string){
        await this.searchProduct(productName);
        await webActions.clickElement(this.ccSynthetic.FIRST_ROW_CHECKBOX_SELECTION);
        await webActions.clickElement(this.ccSynthetic.DELETE_BUTTON);
        await webActions.clickElement(this.ccSynthetic.POPUP_DELETE_BUTTON);    
    }

    async clickOnToogleButtonForTestDataWebhook(){
        await webActions.clickElement(this.ccSynthetic.TESTDATA_WEBHOOK_TOOGLE_BUTTON);
    }

    async selectTestDataWebhookDuringItemCreation(webhookName : string){
        await webActions.clickElement(this.ccSynthetic.TESTDATA_WEBHOOK_TOOGLE_BUTTON);
        await webActions.clickElement(this.ccSynthetic.NEW_DATAWEBHOOK_DROPDOWN);
        await webActions.clickElement(this.ccSynthetic.COMMON_LOCATOR_DATA_WEBHOOK_SELECTION(webhookName));
    }

    async verifyAParticularWebhookSelectedFromWebhookDropDown(webhookName:string){
        await webActions.verifyElementText(this.ccSynthetic.GET_SELECTED_WEBHOOK_TEXT, webhookName);
    }

    async verifyTestDataWebhookElementIsNotDisplayed(){
        await expect(await webActions.verifyElementIsNotPresent(this.ccSynthetic.NEW_DATAWEBHOOK_DROPDOWN)).toBeFalsy();
    }

}