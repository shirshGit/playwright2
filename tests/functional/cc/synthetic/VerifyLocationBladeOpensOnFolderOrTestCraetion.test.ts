import test from '@lib/BaseTest';
import { ControlCenter } from '@objects/ControlCenter';
import { expect } from '@playwright/test';
import { TestStatus } from '@playwright/test/reporter';

test.beforeEach(async ({ baseTestUtil }) => {
});

/*
    CP-6675:Verify When user selects Folder/test on create blade then location selection blade should display
*/
<<<<<<< HEAD
test('VerifyWhenUserSelectsFolderOnCreateBladeThenLocationSelectionBladeShouldDisplay    @Smoke@SyntheticControlCenter', async({util, sideNavigationBar, syntheticFolderDetailPage,synLocationBlade,synCCPage, verification}) => {
=======
test('VerifyWhenUserSelectsFolderOnCreateBladeThenLocationSelectionBladeShouldDisplay @Smoke@SyntheticControlCenter@ControlCente', async({util, sideNavigationBar, syntheticFolderDetailPage,synLocationBlade,synCCPage, verification}) => {
>>>>>>> 08cebc9627e4d078d0d75219d95155c31cb6e3c7
    
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await syntheticFolderDetailPage.goToNewFolderCreate();
    await util.delay(3000);

    //Verifying If Test Blade is Present.
    await verification.verifyIfElementIsPresent(synLocationBlade.syntheticLocationBladeTitleLocator, 'Test Location Blade Title Not Present');
    await verification.verifyIfElementIsPresent(synLocationBlade.syntheticLocationBladeNavigationTreeTitleLocator, 'Test Location Navigation Blade Title Not Present');
    await verification.verifyIfElementIsPresent(synLocationBlade.syntheticLocationBladeTitleLocator, 'Test Location Blade Nav item header Not Present');    

}) 