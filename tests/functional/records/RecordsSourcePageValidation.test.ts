import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();


/*
    CP-14491 : Verify the user is able to search the test based on test id/test name from source selector
*/
test("VerifyUserShouldAbleToSelectTestIsSourceBlade  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util,sourceSelectorPage ,recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID = await data.getValueOfTheParameter('webPingTestID');
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID);
    await util.delay(3000);
    //validation for data tabs
    await verification.verifyIfElementIsPresent(recordsPage.waterFallTab,"WaterFall tab is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.pingTab,"Ping tab is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.pillDeleteButton,"Pill delete button tab is not present.");
    
})


/*
     CP-32065 : Verify user can only search for tests under selected division 
*/
test("VerifyUserShouldAbleToSearchTestUnderSelectedDivision @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util,sourceSelectorPage ,recordsPage, page,charmBar, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID = await data.getValueOfTheParameter('webPingTestIDForDivision');
    await charmBar.selectDivFromCharmbar('ToCreateFromAutomation');
    await util.delay(3000);
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID);
    let pageURL = await baseTestUtil.getUrl();
    //validation for selected test
    await verification.verifySoftAssertTrue(pageURL.includes(testID), 'testId Is not present in url');
   
})

