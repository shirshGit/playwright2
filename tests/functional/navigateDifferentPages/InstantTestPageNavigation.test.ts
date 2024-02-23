import test from "@lib/BaseTest"

/*
   CP-44296 : verify left navigation of instant test page.
*/
test("InstantPageTestNavigation @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, instantTest, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to instant test page by side navigation
    await sideNavigationBar.navigateToNewInstantTestFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(instantTest.testTypeDDInstantTestLocator,'Test Type DD for Instant Test');
    await verification.verifyIfElementIsPresent(instantTest.monitorDDInstantTestLocator,'Monitor DD for Instant Test');
    await verification.verifyIfElementIsPresent(instantTest.nodesInputFieldLocator,'Nodes input for Instant Test');
    
})

/*
   CP-44297 : verify left navigation of instant test history page.
*/
test("InstantTestHistoryiNavigation @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, instantTestHistory, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to instant test history page by side navigation
    await sideNavigationBar.navigateToInstantTestHistoryFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(instantTestHistory.dailyInstantTestUsageLocator,'Instant Test Usage is not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.urlHeaderForIntantTestHistoryLocator,'Url Header for Instant Test Table not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.testTypeHeaderInInstantTestHistoryTableLocator,'Test Type for Instant Test Table not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.statusInstantTestHistoryTableLocator,'Status for Instant Test Table not present');
   
})