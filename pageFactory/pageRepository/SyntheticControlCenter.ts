// import { WebActions } from "@lib/WebActions";
// import { Page } from "@playwright/test";
// import {SideNavigationBar} from '@objects/SideNavigationBar';
// import { ControlCenter } from "@objects/ControlCenter";
// import { expect } from "@playwright/test";

// let webActions: WebActions;

// export class SyntheticControlCenter{
//     readonly page:Page;

//     constructor(page: Page) {
//         this.page = page;
//         webActions = new WebActions(this.page);
//     }

//     sideNavBar = new SideNavigationBar();
//     ccSynthetic = new ControlCenter();


//     async navigateToSyntheticCC(){
//         await webActions.navigateToURL(`ControlCenter/Tests`);
//     }

//     async navigateToSyntheticCCFromSideNavigation(){
//         await webActions.clickElement(this.sideNavBar.SIDE_NAV_CONTROLCENTER)
//         await webActions.clickElement(this.sideNavBar.SIDE_NAV_CCTEST);

//         // await webActions.delay(8000);
//         // await this.page.screenshot({path: 'rest123.png', fullPage:true});
//     }

//     async goToNewProductCreate(){
//         await webActions.clickElement(this.ccSynthetic.NEW_ITEM_CREATION);
//         await webActions.clickElement(this.ccSynthetic.NEW_PRODUCT_ITEM);
        
//     }

//     async goToNewFolderCreate(){
//         await webActions.clickElement(this.ccSynthetic.NEW_ITEM_CREATION);
//         await webActions.clickElement(this.ccSynthetic.NEW_FOLDER_ITEM);
        
//     }


//     async randomItemName(noOfChars : number){
//         var name = await webActions.generateRandomText(noOfChars);  
//         return 'AutomationUI_Delete' + name;     
//     }

//     async createAProductWithBasicSettings(productName: string, nodeName: string){
//         await webActions.enterElementText(this.ccSynthetic.PRODUCT_NAME_FIELD, productName);
//         await webActions.enterElementText(this.ccSynthetic.ADD_NODES_FIELD, nodeName);
//         await webActions.keyPress(this.ccSynthetic.ADD_NODES_FIELD , "Enter");
//         await webActions.clickElement(this.ccSynthetic.SAVE_BUTTON);
//     }

//     async clickSaveButton(){
//         await webActions.clickElement(this.ccSynthetic.SAVE_BUTTON);
//     }

//     async searchItem(item : string){
//         await webActions.enterElementText(this.ccSynthetic.SEARCH_BOX, item);
//         await webActions.delay(1000);
//         await webActions.clickElement(this.ccSynthetic.SEARCH_BOX);
//         await webActions.keyPress(this.ccSynthetic.SEARCH_BOX, 'Enter')
//         await webActions.onlyKeyPress('Enter');
//     }

//     async verifyIfSearchProductFound(productName:string){
//         await this.searchItem(productName);
//         await webActions.verifyElementText(this.ccSynthetic.FIRST_ROW_SEARCH_RESULT, productName);
//     }

//     async deleteItemFromThreeDotMenu(productName : string){
//         const [searchItem] = await Promise.all([
//             this.searchItem(productName)
//         ]);
//         await webActions.delay(2000);
//         await webActions.hoverOnElement(this.ccSynthetic.THREE_DOT_MENU_OF_SEARCHED_ITEM);
//         await webActions.clickElement(this.ccSynthetic.THREE_DOT_MENU_OF_SEARCHED_ITEM);
//         await webActions.clickElement(this.ccSynthetic.DELETE_OPTION_AFTER_THREE_DOT_MENU);
//         await webActions.clickElement(this.ccSynthetic.POPUP_DELETE_BUTTON);   
//     }

//     async deleteItemFromTableContainerBar(productName : string){
//         const [searchItem] = await Promise.all([
//             this.searchItem(productName)
//         ]);
//         await webActions.delay(2000);
//         await webActions.clickElement(this.ccSynthetic.FIRST_ROW_CHECKBOX_SELECTION);
//         await webActions.clickElement(this.ccSynthetic.DELETE_BUTTON);
//         await webActions.clickElement(this.ccSynthetic.POPUP_DELETE_BUTTON);   
//     }

//     async clickOnToogleButtonForTestDataWebhook(){
//         await webActions.clickElement(this.ccSynthetic.TESTDATA_WEBHOOK_TOOGLE_BUTTON);
//     }

//     async selectTestDataWebhookDuringItemCreation(webhookName : string){
//         await webActions.clickElement(this.ccSynthetic.TESTDATA_WEBHOOK_TOOGLE_BUTTON);
//         await webActions.clickElement(this.ccSynthetic.NEW_DATAWEBHOOK_DROPDOWN);
//         await webActions.clickElement(this.ccSynthetic.COMMON_LOCATOR_DATA_WEBHOOK_SELECTION(webhookName));
//     }

//     async verifyAParticularWebhookSelectedFromWebhookDropDown(webhookName:string){
//         await webActions.verifyElementText(this.ccSynthetic.GET_SELECTED_WEBHOOK_TEXT, webhookName);
//     }

//     async verifyTestDataWebhookElementIsNotDisplayed(){
//         await expect(await webActions.verifyElementIsNotPresent(this.ccSynthetic.NEW_DATAWEBHOOK_DROPDOWN)).toBeFalsy();
//     }

//     async clickOnSearchedItemInCC(productName: string){
//         await this.searchItem(productName);
//         await webActions.clickElement(this.ccSynthetic.LOCATOR_TO_CLICK_ON_SEARCHED_ITEM);
//     }

//     async createAFolderWithInheritedSettings(folderName: string){
//         await webActions.enterElementText(this.ccSynthetic.PRODUCT_NAME_FIELD, folderName);
//         await webActions.clickElement(this.ccSynthetic.SAVE_BUTTON);
//     }

//     async checkTheSearchedItem(folderName : string){
//         await this.searchItem(folderName);
//         await webActions.clickElement(this.ccSynthetic.FIRST_ROW_CHECKBOX_SELECTION);
//         // let classValue = await webActions.getElementAttributeValue(this.ccSynthetic.DEACTIVATE_BUTTON_IN_CONTAINER, 'class');
//         // expect(classValue.toString().includes('IconButton_selected')).toBeFalsy();
//         // //await webActions.enterElementText()
//     }

//     async delay(time : number){
//         await webActions.delay(time);
//     }

//     async createProductWithAllAdvanceSettings(productName : string, nodeName: string){
//         await webActions.enterElementText(this.ccSynthetic.PRODUCT_NAME_FIELD, productName);
//         await webActions.enterElementText(this.ccSynthetic.ADD_NODES_FIELD, nodeName);
//         await webActions.keyPress(this.ccSynthetic.ADD_NODES_FIELD , "Enter");
//         await webActions.clickElement(this.ccSynthetic.ADD_ADVANCE_SETTING_TITLE);
//         await webActions.clickElement(this.ccSynthetic.CHECKBOX_FOR_ALL_ADVANCE_SETTINGS);
//         await webActions.clickElement(this.ccSynthetic.APPLY_BUTTON);
//         await webActions.enterElementText(this.ccSynthetic.INCREASE_PING_COUNT_TEXT_BOX, '5');
//         await webActions.enterElementText(this.ccSynthetic.INCREASE_HOP_FAILURE_COUNT, '10');
//         await webActions.enterElementText(this.ccSynthetic.MQTT_SUBNET_CLIENTID_TXT_BOX, '8.8.8.8');
//         await webActions.enterElementText(this.ccSynthetic.EDNS_SUBNET_TXT_BOX,'8.8.8.8');
//         await webActions.enterElementText(this.ccSynthetic.VIEWPORT_WIDTH_TXT_BOX, '1200');
//         await webActions.enterElementText(this.ccSynthetic.VIEWPORT_LENGTH_TXT_BOX, '600');
//     }

//     async openPropertiesOfSerachedItem(item:string){
//         await webActions.hoverOnElement(this.ccSynthetic.SEARCH_BOX);
//         await this.searchItem(item);
//         await webActions.delay(2000);
//         await webActions.hoverOnElement(this.ccSynthetic.THREE_DOT_MENU_OF_SEARCHED_ITEM);
//         await webActions.clickElement(this.ccSynthetic.THREE_DOT_MENU_OF_SEARCHED_ITEM);
//         await webActions.clickElement(this.ccSynthetic.PROPERTIES_AFTER_THREE_DOT_MENU);
//     }

//     async getElementTextFromElements(element : string){
//         var elementsText = webActions.getTextFromWebElements(element);
//         return elementsText;
//     }

//     async clickOnCollapsableItem(element){
//         await webActions.clickElement(element);
//     }

//     async closePropertiesBlade(){
//         await webActions.clickElement(this.ccSynthetic.PROPERTIES_BLADE_CANCEL_BUTTUON);
//     }

//     async verifyTestLocationBladePresent(){
//         await webActions.verifyElementIsPresentInPage(this.ccSynthetic.SYNTHETIC_LOCATION_BLADE_TITILE);
//         await webActions.verifyElementIsPresentInPage(this.ccSynthetic.LOCATION_BLADE_NAVIGATION_TREE_TITLE);
//         await webActions.verifyElementIsPresentInPage(this.ccSynthetic.LOCATION_BLADE_NAV_ITEM_HEADER);
//     }

//     async getNoOfElementInSyntheticCCPage(locator: string)
//     {
//         let noOFElements = await webActions.getNoOfElementsPresentInPage(locator);
//         return noOFElements;
//     }

// }