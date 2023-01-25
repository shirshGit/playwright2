import test from "@lib/BaseTest"

/*
   CP-44296 : verify left navigation of instant test page.
*/
test("InstantPageTestNavigation @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, instantTest, util}) => {
    await util.delay(3000);
    await sideNavigationBar.navigateToNewInstantTestFromSideNavigation();
    await verification.verifyIfElementIsPresent(instantTest.testTypeDDInstantTestLocator,'Test Type DD for Instant Test');
    await verification.verifyIfElementIsPresent(instantTest.monitorDDInstantTestLocator,'Monitor DD for Instant Test');
    await verification.verifyIfElementIsPresent(instantTest.nodesInputFieldLocator,'Nodes input for Instant Test');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})

/*
   CP-44297 : verify left navigation of instant test history page.
*/
test("InstantTestHistoryiNavigation @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, instantTestHistory, util}) => {
    await util.delay(3000);
    await sideNavigationBar.navigateToInstantTestHistoryFromSideNavigation();
    await verification.verifyIfElementIsPresent(instantTestHistory.dailyInstantTestUsageLocator,'Instant Test Usage is not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.urlHeaderForIntantTestHistoryLocator,'Url Header for Instant Test Table not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.testTypeHeaderInInstantTestHistoryTableLocator,'Test Type for Instant Test Table not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.statusInstantTestHistoryTableLocator,'Status for Instant Test Table not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})