import test from '@lib/BaseTest';
import { ControlCenter } from '@objects/ControlCenter';
import { expect } from '@playwright/test';
import { TestStatus } from '@playwright/test/reporter';


let cc = new ControlCenter();

test.beforeEach(async ({ baseTestUtil }) => {
});

/*
    CP-6675:Verify When user selects Folder/test on create blade then location selection blade should display
*/
test('@Smoke @SyntheticControlCenter Verify When user selects Folder on create blade then location selection blade should display', async({page, syntheticControlCenter, verification}) => {
    
    await syntheticControlCenter.navigateToSyntheticCCFromSideNavigation();
    await syntheticControlCenter.goToNewFolderCreate();
    await syntheticControlCenter.delay(3000);

    //Verifying If Test Blade is Present.
    await verification.verifyIfElementIsPresent(cc.SYNTHETIC_LOCATION_BLADE_TITILE, 'Test Location Blade Title Not Present');
    await verification.verifyIfElementIsPresent(cc.LOCATION_BLADE_NAVIGATION_TREE_TITLE, 'Test Location Navigation Blade Title Not Present');
    await verification.verifyIfElementIsPresent(cc.SYNTHETIC_LOCATION_BLADE_TITILE, 'Test Location Blade Nav item header Not Present');

    

}) 