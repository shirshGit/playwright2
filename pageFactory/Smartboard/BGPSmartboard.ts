import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class BGPSmartboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _selectedTimeInTimeFrame = '//input[@value="Last 24 Hours"]';
    private _peerInfoWidget = '//div[text()="Peer Information"]/..';
    private _isolatedPeer = '//div[contains(text(),"Isolated")]';
    private _peerCountInFilterBlade = '(//div[contains(@class,"ListViewItem_bubble_")])[1]//span';
    private _isCheckPeerCount = '//div[contains(@class,"ms-Check is-checked")]';
    private _filterTextInFilterPage = '(//span[text()="Filters"])[2]';

    public get selectedTimeInTimeFrameLocator(){
        return this._selectedTimeInTimeFrame;
    }
    public get peerInfoWidgetLocator(){
        return this._peerInfoWidget;
    }
    public get isolatedPeerLocator(){
        return this._isolatedPeer;
    }
    public get isCheckPeerCountLocator(){
        return this._isCheckPeerCount;
    }
    public get filterTextLocator(){
        return this._filterTextInFilterPage;
    }

 
   
    //#endregion

    async clickOnIsolatedPeer(){
        await webActions.clickElementJS(this.isolatedPeerLocator);
    }

    async countIsolatedPeer(){
        return await this.page.locator(this.isCheckPeerCountLocator).count;
    }

    async dragAndDrop(){
        const exampleOneDrag = await this.page.$(
            `(//*[local-name()='svg' and @data-testid="chart"]//*[name()='rect'])[4]`
          )
          const exampleTwoDrag = await this.page.$(
            `[data-testid=""]`
          )
          const oneBoundingBox = await exampleOneDrag?.boundingBox()
          const twoBoundingBox = await exampleTwoDrag?.boundingBox()
          
          if (oneBoundingBox && twoBoundingBox) {
            await this.page.mouse.move(
              oneBoundingBox.x + oneBoundingBox.width / 2,
              oneBoundingBox.y + oneBoundingBox.height / 2,)
            await this.page.mouse.down()
            await this.page.mouse.move(
              twoBoundingBox.x + twoBoundingBox.width / 2,
              twoBoundingBox.y + twoBoundingBox.height / 2,)
            await this.page.mouse.up()
          }
    }

    
   
    

    
}