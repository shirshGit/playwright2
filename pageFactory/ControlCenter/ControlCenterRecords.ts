import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";
import { SynControlCenterPage } from "@pageobjects/ControlCenter/SyntheticControlCenter";

let webActions: WebActions;

export class ControlCenterRecords extends SynControlCenterPage {
    constructor(page: Page) {
        super(page);
        //this.page = page;
        webActions = new WebActions(this.page);
    }

    //#region  This place is to have the properties

   private _sessionsTabForRumRecordPopUpPage = '//div[contains(@class,"RumRecordsTablestyles__InnerTableContainer")]//button[contains(@name,"Sessions")]';
   private _pageViewTabForRumRecordsPopUpPage = '//div[contains(@class,"RumRecordsTablestyles__InnerTableContainer")]//button[contains(@name,"Page Views")]';
   private _pageViewValue = '';
   private _fetchTimeFrame = '((//div[contains(@class,"ScatterPlot_container_")]//div[2]//*/*/*)[14]/*)[8]';

   public get sessionsTabForRumRecordPopUpPageLocator(){
        return this._sessionsTabForRumRecordPopUpPage
   }
   public get pageViewsTabForRumRecordPopUpPageLocator(){
    return this._pageViewTabForRumRecordsPopUpPage
   }

   public get graphTimeLocator(){
    return (text:number) => { return `((//*[local-name()="g"])[3]//*)[${text}]`}
   }

   public get getSessionsTabPageViewValueLocator(){
    return (text: number) => { return `(//div[@data-item-index="${text}"])[2]//div[@data-automation-key="Page Views_4"]//div` };
   }

   public get getSessionsTabImpactValueLocator(){
    return (text: number) => { return `(//div[@data-item-index="${text}"])[2]//div[@data-automation-key="Impact_6"]//div` };
   }
    //#endregion

    async clickOnSessionsTab(){
        await webActions.clickElement(this.sessionsTabForRumRecordPopUpPageLocator);
    }
    async clickOnPageViewTab(){
        await webActions.clickElement(this.pageViewsTabForRumRecordPopUpPageLocator);
    }

    async getSessionsTabPageViewsValue(numberOfRows : number){
        let pageViewsValue : string[] =[];
        for (let index = 0; index < numberOfRows; index++) {
            let value = await webActions.getElementText(this.getSessionsTabPageViewValueLocator(index));
            pageViewsValue.push(value);
        }
        return pageViewsValue;
        
    }

    async getSessionsTabTmpactValue(numberOfRows : number){
        let impactValues : string[] =[];
        for (let index = 0; index < numberOfRows; index++) {
            let value = await webActions.getElementText(this.getSessionsTabImpactValueLocator(index));
            impactValues.push(value);
        }
        return impactValues;
        
    }

    async getRowCount(){
        let text = await webActions.getTextFromWebElements(this.sessionsTabForRumRecordPopUpPageLocator);
        let count = text.toString().substring(10,11);
        return count;

    }


    async getStartGraphTime(){
        return await webActions.getElementText(this.graphTimeLocator(2))
    }

    async getlastGraphTime(){
        return await webActions.getElementText(this.graphTimeLocator(24))
    }
   

   
}

