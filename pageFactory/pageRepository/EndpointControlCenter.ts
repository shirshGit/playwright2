import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import {testConfig} from '../../testConfig';
import { BrowserContext, expect } from '@playwright/test';


let webActions: WebActions;
const ENV = process.env.ENV;

export class EndpointCC {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToCCEndpointUrl(): Promise<void>{

        if (ENV === 'qa') {
            await webActions.navigateToURL(`https://qaportal.catchpoint.com/ui/Preview/ControlCenter/Endpoint/Alerts`);
        }

    }

    async searchItemInEndpointSearchBox() : Promise<void>{
        await webActions.enterElementText('(//input[@id = "fabric-search-box"])[2]', 'EndpointAlert1');

    }


}