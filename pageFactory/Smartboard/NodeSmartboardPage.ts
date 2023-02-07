import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class NodeSmartboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _nodeName = '(//div[text()="Name"]/..//div)[1]';
    private _networkType = '(//div[text()="Network Type"]/..//div)[1]';
    private _location = '(//div[text()="Location"]/..//div)[1]';
    private _networkRadarGrph = "//*[name()='path' and contains(@class,'PieChart_s')]";

    public get nodeNameLocator(){
        return this._nodeName;
    }

    public get networkTypeLocator(){
        return this._networkType;
    }

    public get locationLocator(){
        return this._location;
    }

    public get networkRadarLocator(){
        return this._networkRadarGrph;
    }

   
    //#endregion

   

   
   
    

    
}