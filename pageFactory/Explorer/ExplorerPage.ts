import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class ExplorerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter
    
    private _errorTab = '//li[@data-testid="Errors"]';
    private _firstThreeDotMenuInErrorTab = '(//div[@data-testid="table_row"]//span[@data-automationid="splitbuttonprimary"])[1]//i';
    private _recordsInThreeDotMenuInErrorTab = '//span[normalize-space()="Records"]';
    private _myAppTabInSourceSelector = '//li[text()="My Apps"]';
    private _firstDataPoint = "//*[name()='g']//*[name()='g' and contains(@transform,'translate(')]//*[name()='g' and contains(@class,'Chart_line')]//*[name()='circle'][3]";
    private _graph = "(//div[contains(@class,'Chart_chartContainer_')]//*[name()='g' and contains(@class,'Chart_line')])[1]//*";
    
    public get errorTabLocator(){
        return this._errorTab;
    }
    public get firstThreeDotInErrorTabLocator(){
        return this._firstThreeDotMenuInErrorTab;
    }
    public get recordInThreeDotMenuInErrorTabLocator(){
        return this._recordsInThreeDotMenuInErrorTab;
    }
    public get errorTabRowWiseTimeLocator(){
        return (text: number) => { return `//div[@data-item-index="${text}"]//div[@aria-colindex="3"]//div`};
    }
    public get myAppTabInSourceSelectorLocator(){
        return this._myAppTabInSourceSelector;
    }
    public get firstDataPointLocator(){
        return this._firstDataPoint;
    }
    public get graphLocator(){
        return this._graph;
    }
   

   
    //#endregion

    async clickOnErrorTab(){
        await webActions.clickElement(this.errorTabLocator);
    }
    async clickOnFirstRowThreeDotMenu() {
        await util.delay(3000);
        await webActions.hoverOnElement(this.firstThreeDotInErrorTabLocator);
        await webActions.clickElement(this.firstThreeDotInErrorTabLocator);
    }
    async getNewWindow(context : BrowserContext,locator : string){
        return await webActions.newWindowHandle(context,locator);
        
    }
    async getRowWiseTimeFromErrorTab(rowNum : number){
        let metricValue = await webActions.getElementText(this.errorTabRowWiseTimeLocator(rowNum));
        return metricValue;
    }
    async clickOnMyTabInSourceSelector(){
        await webActions.clickElement(this.myAppTabInSourceSelectorLocator);
    }

    async clickOnFirstDataPoint(){
        await util.delay(1000);
        await webActions.waitForElementAttached(this.graphLocator);
        let variable = await this.page.locator(this.graphLocator);
        
        var x =  await this.page.evaluate(() => {
            var elemRect = document.getElementsByClassName('Chart_line_4eOS7')[0].getBoundingClientRect();
            console.log(elemRect);
            return elemRect.x
        });
        var y =  await this.page.evaluate(() => {
            var elemRect = document.getElementsByClassName('Chart_line_4eOS7')[0].getBoundingClientRect();
            console.log(elemRect);
            return elemRect.y;
        });
        

        //this.page.mouse.click(x,y);
        //this.page.mouse.move(x,y)
        //this.page.mouse.move(369.44464111328125,246.979156);
        this.page.mouse.move(360,246);
        this.page.mouse.dblclick(360,246);

        //await webActions.hoverOnElement();
        //await variable.click();
        await util.delay(5000);
        //await webActions.clickElement(this.firstDataPointLocator);
    }

     forDatapoint(){
        var element = document.getElementsByClassName('Chart_line_4eOS7')[0];
        var elemRect = element.getBoundingClientRect();
        console.log(elemRect);
     }


      getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
      }
   
    

    
}