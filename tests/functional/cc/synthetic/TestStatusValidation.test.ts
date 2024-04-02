import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';

let data = new DataForEnv();


test.beforeEach(async ({ baseTestUtil }) => {
});
/*
CP-12776 : Bug 125031 Active Tests are Changing to Inactive once wehe refresh the Page
*/

test("ActiveTestsAreChangingToInactiveOnceWehenRefreshPage  @ProductionDefect@SyntheticControlCenter@ControlCenter", async ({ page, verification, syntheticTestDetailPage, sideNavigationBar, testUtility,synCCPage, util, baseTestUtil }) => {
  
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let testName = await testUtility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    let endDate = await util.getDate(2,'mmm dd yyyy');
    //navigate to cc
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createTestWithEndDate(prodForTestCreate, testName, url, endDate);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await synCCPage.waitForElement(synCCPage.synDetailListLocator);
    //search and click created test
    await synCCPage.clickOnSearchedItemInCC(testName);
    //clear end date
    await synCCPage.clearTextField(syntheticTestDetailPage.endDateValueLocator);
    //click on save
    await syntheticTestDetailPage.clickSaveButton();
    //reload page
    await util.delay(10000);
    await page.reload();
    await synCCPage.waitForItemPresentInMasterBlade('Selenium');
    //navigate to dashboard page
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    //navigate to cc page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //search and click created test
    await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
    //fetch end date
    await util.delay(3000);
    let endDateAfterSavingDate = await syntheticTestDetailPage.fetchEndDate();
    //close test property page by clicking on cross icon
    await syntheticTestDetailPage.closePropertyPage();
    //validation
    await verification.verifySoftAssertTrue(endDateAfterSavingDate === "", 'end date should be null after removing it.');
    //In script its given to wait for sometime, so adding wait for 15 sec
    await util.delay(15000);
    //search test
    await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
    //validation for active status
    await verification.verifyIfElementIsPresent(synCCPage.activeStatsLocatorOfFirstSearchedItem,"Test got inactive after removing end date");
    //close test property page by clicking on cross icon
    await syntheticTestDetailPage.closePropertyPage();
    //delete test
    await synCCPage.deleteItemFromThreeDotMenu(testName);
  
    
  });

  
  