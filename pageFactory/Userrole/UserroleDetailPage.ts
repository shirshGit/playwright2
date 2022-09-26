import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { ListenOptions } from "net";
import { Page } from "playwright";
import { UserrolePage } from "./UserrolePage";

let webActions: WebActions;
let util: Utility

export class UserroleDetailPage extends UserrolePage {
    readonly page: Page;


    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _nameInputBox = '//input[contains(@class,"TextBox_detail_")]';
    private _searchBoxInDetailPage = '//div[contains(@class,"UserRoleDetailsBladestyles__UserRolePermissionSearch")]//input[@id="fabric-search-box"]';
    private _closeUserrolePropertyPage = '//div[@data-testid="cancel-icon"]';
    private _applyButtonOnconatctPropertyPage = '//span[text()="Apply"]';
    private _firstCheckBox = '//button//i[@data-icon-name="CircleRing"]';
    private _cancelButton = '//span[text()="Cancel"]';




    public get nameInputField() {
        return this._nameInputBox
    }
    public get searchBoxInDetailPage() {
        return this._searchBoxInDetailPage;
    }


    public get selectPermissions() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }

    public get cancelPropertiesPage() {
        return this._cancelButton
    }

    public get closePropertyPage() {
        return this._closeUserrolePropertyPage
    }

    public get applyButtonInpropertiesPage() {
        return this._applyButtonOnconatctPropertyPage;
    }

    public get firstCheckBox() {
        return this._firstCheckBox;
    }

   
    

    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedPermissionCheckBox(permissions: string) {
        const [searchItem] = await Promise.all([
            this.searchPermissionsInDetailPage(permissions)
        ]);
        await util.delay(2000);
        await webActions.hoverOnElement(this.firstCheckBox);
        await webActions.clickElement(this.firstCheckBox);
    }

    async cancelPropertyPage() {
        await webActions.clickElement(this.cancelPropertiesPage);
    }

    async applyButton() {
        await webActions.clickElement(this.applyButtonInpropertiesPage);
    }

    async searchPermissionsInDetailPage(Permissions: string) {
        await webActions.waitForElementAttached(this.searchBoxInDetailPage);
        await webActions.clickElement(this.searchBoxInDetailPage);
        await webActions.enterElementText(this.searchBoxInDetailPage, Permissions);
        await util.delay(1000);
        await webActions.clickElement(this.searchBoxInDetailPage);
        await webActions.keyPress(this.searchBoxInDetailPage, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    async createUserrole(userroleName : string , permissions : string[]){
        await webActions.clickElement(this.createIcon);
        await util.delay(2000);
        await webActions.waitForElementAttached(this.nameInputField);
        await webActions.clickElement(this.nameInputField);
        await webActions.enterElementText(this.searchBoxInDetailPage, userroleName);
        for (let index = 0; index < permissions.length; index++) {
            const element = permissions[index];
            await this.searchPermissionsInDetailPage(element);
            await webActions.clickElement(this.firstCheckBox);
        }
        webActions.clickElement(this.applyButtonInpropertiesPage);

    }



    //#endregion

}