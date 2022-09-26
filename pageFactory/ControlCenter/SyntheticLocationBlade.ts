import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";
import { SynControlCenterPage } from "@pageobjects/ControlCenter/SyntheticControlCenter";

let webActions: WebActions;

export class SyntheticLocationBlade extends SynControlCenterPage {
    constructor(page: Page) {
        super(page);
        //this.page = page;
        webActions = new WebActions(this.page);
    }

    //#region  This place is to have the properties

    private _syntheticLocationBladeTitle = 'div[class*="Blade_header"]';
    private _syntheticLocationBladeNavigationTreeTitle = 'div[class*="NavigationTree_navGroupWrapper"]';
    private _syntheticLocationBladeNavItemheader = 'div[class*="Blade_contentWithHeaderAndFooter"] div[data-testid = "navigation"] ul';

    public get syntheticLocationBladeTitle() {
        return this._syntheticLocationBladeTitle;
    }

    public get syntheticLocationBladeNavigationTreeTitle() {
        return this._syntheticLocationBladeNavigationTreeTitle;
    }

    public get syntheticLocationBladeNavItemheader() {
        return this._syntheticLocationBladeNavItemheader;
    }

    public get selectProductForTestLocation() {
        return (text: string) => { return `(//span[text()="${text}"])[2]` };
    }

    //#endregion

    async selectProductFromTestLocationBlade(productName: string) {
        let xpath = await this.selectProductForTestLocation(productName);
        await webActions.clickElement(xpath);
        await webActions.clickElement(this.copyButtonInTestPropertyBlade);
    }


}