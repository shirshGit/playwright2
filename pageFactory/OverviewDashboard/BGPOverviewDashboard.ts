import { WebActions } from "@lib/WebActions";
import { DefaultDashboardPage } from "./DefaultDashboardPage";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility


export class BGPOverviewDashboard extends DefaultDashboardPage{

    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _RPKIStatus = '//div[text()="RPKI"]';
    private _reachabilityField = '//div[@data-testid="data-cards"]//div[text()="% Reachability"]';
    private _hijacksField = '//div[@data-testid="data-cards"]//div[text()="# Hijacks"]';
    private _neighboringPeers = '//div[@data-testid="data-cards"]//div[text()="# Neighboring Peers"]';
    private _prefixesWithdrawnField = '//div[@data-testid="data-cards"]//div[text()="# Prefixes Withdrawn"]';
    private _BGPChangesOrigins = '//div[contains(@class,"BGPChangesByOriginHeaderstyles__Container")]';
    private _bgpMapField = '//div[contains(@data-testid,"header-title") and text() = "BGP Map"]';


    public get RPKIStatusLocator(){
        return this._RPKIStatus;
    }

    public get reachabilityFieldLocator(){
        return this._reachabilityField;
    }

    public get hijacksFieldLocator(){
        return this._hijacksField;
    }

    public get neighboringPeersLocator(){
        return this._neighboringPeers;
    }

    public get prefixesWithdrawnFieldLocator(){
        return this._prefixesWithdrawnField;
    }

    public get BGPChangesOriginsLocator(){
        return this._BGPChangesOrigins;
    }

    public get bgpMapFieldLocator(){
        return this._bgpMapField;
    }



    //#endregion

    //#region This region is to have the functions

  
   

    //#endregion
}