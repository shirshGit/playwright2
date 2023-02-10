import test from '@lib/BaseTest';
import { ControlCenter } from '@objects/ControlCenter';
import { expect } from '@playwright/test';
import { TestStatus } from '@playwright/test/reporter';

test.beforeEach(async ({ baseTestUtil }) => {
});

/*
    CP-6675:Verify When user selects Folder/test on create blade then location selection blade should display
*/
test('VerifyWhenUserSelectsFolderOnCreateBladeThenLocationSelectionBladeShouldDisplay @Smoke@SyntheticControlCenter@ControlCente', async({util, sideNavigationBar, syntheticFolderDetailPage,synLocationBlade,synCCPage, verification}) => {
    
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await syntheticFolderDetailPage.goToNewFolderCreate();
    await util.delay(3000);

    //Verifying If Test Blade is Present.
    await verification.verifyIfElementIsPresent(synLocationBlade.syntheticLocationBladeTitleLocator, 'Test Location Blade Title Not Present');
    await verification.verifyIfElementIsPresent(synLocationBlade.syntheticLocationBladeNavigationTreeTitleLocator, 'Test Location Navigation Blade Title Not Present');
    await verification.verifyIfElementIsPresent(synLocationBlade.syntheticLocationBladeTitleLocator, 'Test Location Blade Nav item header Not Present');    

}) 