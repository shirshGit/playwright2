import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";
import { SyntheticDetailPage } from "@pageobjects/ControlCenter/SyntheticDetailsPage";

let webActions: WebActions;

/*
     This file is going to have locators and funtionaities specific to Folder detail page
*/

export class SyntheticFolderDetailPage extends SyntheticDetailPage {

    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
    }


    //#region This for properties of Folder Detail Page
    private _folderNameField = '#name-input';


    public get folderNameField() {
        return this._folderNameField;
    }



    //#endregion


    //#region This region is to have the functions

    async goToNewFolderCreate() {
        await webActions.clickElement(this.newItemCreation);
        await webActions.clickElement(this.newFolderItem);

    }

    async createAFolderWithInheritedSettings(folderName: string) {
        await webActions.enterElementText(this.folderNameField, folderName);
        await webActions.clickElement(this.saveButton);
    }

    async clickOnCollapsableItemAtFolderProperties(element) {
        await webActions.clickElement(element);
    }

    async getElementTextFromElementsFromFolderProperties(element: string) {
        var elementsText = webActions.getTextFromWebElements(element);
        return elementsText;
    }

    async closeFolderPropertiesBlade() {
        await webActions.clickElement(this.propertiesBladeCancelButton);
    }

    //#endregion

}