import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';

let data = new DataForEnv();


test.beforeEach(async ({ baseTestUtil }) => {
});


/*
 CP-12529 :Bug 130312: CC: Safari: To Date is not getting saved
*/

test("CheckEndDateAfterSavingTest  @ProductionDefect@SyntheticControlCenter", async ({ verification, syntheticTestDetailPage, sideNavigationBar, testUtilility, util }) => {

    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let testName = await testUtilility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    let endDate = await syntheticTestDetailPage.getDate(2);
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createTestWithEndDate(prodForTestCreate, testName, url, endDate);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(1000);
    //search and click created test
    await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
    await util.delay(3000);
    //fetch end date after saving test
    let endDateAfterSavingDate = await syntheticTestDetailPage.fetchEndDate();
    //validation
    await verification.verifySoftAssertTrue(endDateAfterSavingDate === endDate, 'end date which is provided while creating test is not same after saving test.');
    //close test property page by clicking on cross icon
    await syntheticTestDetailPage.closeTestPropertyPage();
    await util.delay(1000);
    //delete test
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);

  });


 



