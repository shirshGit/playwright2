import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
   CP-44182 : Verify left navigation of explorer page
*/
test("VerifyExplorerTestLoads @PageNavigation@ProductionSmoke@Smoke", async({instantTestHistoryPage,sideNavigationBar, verification, sourceSelectorExplorer,explorerPage,explorerSyntheticDetails, util}) => {
    let data = new DataForEnv();
    let transactionTestID = await data.getValueOfTheParameter('transactionTestId');
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to explorer page
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorExplorer.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(transactionTestID);
    // click on summary tab
    await explorerPage.clickOnSummaryTab();
    //validation for errors
    await verification.validationsForPage();
    //validation for summary tab metrics and value
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.runMetricsTextLocator,"run metrics text is not present");
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.testTimeMetricsTextLocator,"test time metrics text is not present")
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.availabilityMetricsTextLocator,"availability metrics yexy is not present")
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.runMetricsValueLocator,"run metrics value is not present");
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.testTimeMetricsValueLocator,"test time metrics value is not present")
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.availabilityMetricsValueLocator,"availability metrics value is not present")
    
})

/*
   CP-44183 : Verify left navigation of  explorer RUM page
*/

test("VerifyExplorerRUMLoads @PageNavigation@ProductionSmoke@Smoke", async({instantTestHistoryPage,sideNavigationBar, verification, sourceSelectorExplorer,explorerPage,explorerRUMDetails, util}) => {
    let data = new DataForEnv();
    let appId = await data.getValueOfTheParameter('rumAppId');
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to rum from side nav
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorExplorer.myAppTabInSourceSelectorLocator, 'myApp Tab is not present in source selector');
    //select myApp tab
    await sourceSelectorExplorer.clickOnMyAppTab();
    await util.delay(2000);
    //search app
    await sourceSelectorExplorer.clickOnFirstSearchAppInSelectorPage(appId);
    await util.delay(2000);
    // click on summary tab
    await explorerPage.clickOnSummaryTab();
    //validation for errors
    await verification.validationsForPage();
    //validation for summary tab metrics and value
    await verification.verifyIfElementIsPresent(explorerRUMDetails.avgDOCCompleteMetricsTextLocator,"avg doc complete metrics text is not present");
    await verification.verifyIfElementIsPresent(explorerRUMDetails.pageViewsMetricsTextLocator,"page view metrics text is not present")
    await verification.verifyIfElementIsPresent(explorerRUMDetails.avgDOCCompleteMetricsValueLocator,"avg doc complete metrics value is not present")
    await verification.verifyIfElementIsPresent(explorerRUMDetails.pageViewsMetricValueLocator,"page view metrics value is not present");
    
})