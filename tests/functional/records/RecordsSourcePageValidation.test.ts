import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";




/*
    CP-14491 : Verify the user is able to search the test based on test id/test name from source selector
*/
test("VerifyUserShouldAbleToSelectTestIsSourceBlade  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util,sourceSelectorPage, recordsPage, page, verification }) => {
    let data = new DataForEnv();
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID = await data.getValueOfTheParameter('webPingTestID');
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //validation for data tabs
    await verification.verifyIfElementIsPresent(recordsPage.waterFallTabLocator,"WaterFall tab is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.pingTabLocator,"Ping tab is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.pillDeleteButtonLocator,"Pill delete button is not present.");
    
})


/*
     CP-32065 : Verify user can only search for tests under selected division 
*/
test("VerifyUserShouldAbleToSearchTestUnderSelectedDivision @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util,sourceSelectorPage , recordsPage, page,charmBar, verification }) => {
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('webPingTestIDForDivision');
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    await sourceSelectorPage.selectDivision('ToCreateFromAutomation');
    await util.delay(1000);
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    let pageURL = await baseTestUtil.getUrl();
    //validation for selected test
    await verification.verifySoftAssertTrue(pageURL.includes(testID), 'TestId is not present in url');
   
})

