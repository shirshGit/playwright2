import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class EndpointSmartboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _goButton = '//span[text()="Go"]';
    private _timeZoneDropDown = '//div[@data-testid="timezone-dropdown"]';
    private _compareDropDown = '(//i[@data-icon-name="chevrondownLarge"])[1]';
    private _timeLine = '//div[contains(@class,"EndpointSmartboardstyles__EndpointSmartboardTimeline-")]';
    private _summary = '//span[text()="Summary"]';
    private _endpoint = '//span[text()="Endpoint"]';
    private _network = '//span[text()="Network"]';
    private _application = '//span[text()="Application"]';


    public get locationTabLocator() {
        return this._goButton;
    }

    public get testTabLocator() {
        return this._timeZoneDropDown;
    }

    public get compareDDLocator() {
        return this._compareDropDown;
    }
    public get timeLineLocator() {
        return this._timeLine;
    }

    public get summaryTabLocator() {
        return this._summary;
    }

    public get endpointTabLocator() {
        return this._endpoint;
    }

    public get applicationTabLocator() {
        return this._application;
    }

    public get networkTabLocator() {
        return this._network;
    }




    //#endregion

    //#region This region is to have the functions

    








}