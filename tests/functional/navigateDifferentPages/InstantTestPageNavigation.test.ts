import test from "@lib/BaseTest"

test("InstantPageTestNavigation @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, instantTest, util}) => {
    await sideNavigationBar.navigateToNewInstantTestFromSideNavigation();
    await verification.verifyIfElementIsPresent(instantTest.testTypeDDInstantTestLocator,'Test Type DD for Instant Test');
    await verification.verifyIfElementIsPresent(instantTest.monitorDDInstantTestLocator,'Monitor DD for Instant Test');
    await verification.verifyIfElementIsPresent(instantTest.nodesInputFieldLocator,'Nodes input for Instant Test');

})

test("InstantTestHistoryiNavigation @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, instantTestHistory, util}) => {
    await sideNavigationBar.navigateToInstantTestHistoryFromSideNavigation();
    await verification.verifyIfElementIsPresent(instantTestHistory.dailyInstantTestUsageLocator,'Instant Test Usage is not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.urlHeaderForIntantTestHistoryLocator,'Url Header for Instant Test Table not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.testTypeHeaderInInstantTestHistoryTableLocator,'Test Type for Instant Test Table not present');
    await verification.verifyIfElementIsPresent(instantTestHistory.statusInstantTestHistoryTableLocator,'Status for Instant Test Table not present');

})