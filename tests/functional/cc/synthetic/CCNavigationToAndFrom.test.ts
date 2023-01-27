import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { expect } from "@playwright/test";


/*
    CP-44574 : Scenario: Verify Test properties open up on overview dashboard 
*/
test.skip("VerifyTestPropertiesPageOpenInOnOVD @SyntheticControlCenter", async ({ baseTestUtil, syntheticTestDetailPage, page, defaultDashboardPage, util, testUtility,testOverviewDashboard, verification }) => {
    //get tile wiget test name
    let testName = await defaultDashboardPage.getTestNameFromTestTable(1);
    //click on test widget first row three dot menu
    await testOverviewDashboard.hoverAndClickOnTestWidgetThreeDotMenu(1,'Properties');
    await util.delay(4000);
    //verify test property page
    await verification.verifyIfElementIsPresent(testOverviewDashboard.webTestPropertyTextLocator,'test property page is not');
    //fetch test name in properties page
    let testNameInPropertiesPage = await testOverviewDashboard.getPropertiesPageTestName();
    //validation for test name
    await verification.verifySoftAssertTrue(testName===testNameInPropertiesPage,"test name is not matching")
})


/*
    CP-44575 : Scenario: Verify Test properties open up on Test overview dashboard 
*/
test.skip("VerifyTestPropertiesPageOpenInTestOVD @SyntheticControlCenter", async ({ baseTestUtil, syntheticTestDetailPage, page, defaultDashboardPage, util, testUtility,testOverviewDashboard, verification }) => {
    await util.delay(2000);
    //click on test overview tab
    await defaultDashboardPage.clickOnTab('Tests'); 
    //get tile wiget test name
    let testName = await testOverviewDashboard.getTileWidgetTestName(1);
    //click on test widget first row three dot menu
    await testOverviewDashboard.hoverOnTileWidgetTestName(1);
    //click on properties option
    await testOverviewDashboard.clickOnTileWidgetOptions('Properties');
    await util.delay(4000);
    //verify test property page
    await verification.verifyIfElementIsPresent(testOverviewDashboard.webTestPropertyTextLocator,'test property page is not');
    //fetch test name in properties page
    let testNameInPropertiesPage = await testOverviewDashboard.getPropertiesPageTestName();
    //validation for test name
    await verification.verifySoftAssertTrue(testName===testNameInPropertiesPage,"test name is not matching")
})

/*
    CP-44576 : Scenario: Verify Test properties open up from Tests Smartboard page 
*/
test("VerifyTestPropertiesPageOpenFromTestsSB @SyntheticControlCenter", async ({ baseTestUtil, syntheticTestDetailPage, page, defaultDashboardPage, util, testUtility,testOverviewDashboard, verification }) => {
    //get tile wiget test name
    let testName = await defaultDashboardPage.getTestNameFromTestTable(1);
    //click on test widget first row three dot menu
    await testOverviewDashboard.hoverAndClickOnTestWidgetThreeDotMenu(1,'Properties');
    await util.delay(4000);
    //verify test property page
    await verification.verifyIfElementIsPresent(testOverviewDashboard.webTestPropertyTextLocator,'test property page is not');
    //fetch test name in properties page
    let testNameInPropertiesPage = await testOverviewDashboard.getPropertiesPageTestName();
    //validation for test name
    await verification.verifySoftAssertTrue(testName===testNameInPropertiesPage,"test name is not matching")
})







