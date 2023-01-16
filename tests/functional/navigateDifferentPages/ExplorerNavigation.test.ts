import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
   CP-44182 : Verify left navigation of explorer page
*/
test("VerifyExplorerTestLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorExplorer,explorerPage,explorerSyntheticDetails, util}) => {
    let data = new DataForEnv();
    let transactionTestID = await data.getValueOfTheParameter('transactionTestId');
    await util.delay(5000);
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    await verification.verifyIfElementIsPresent(sourceSelectorExplorer.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(transactionTestID);
    // click on summary tab
    await explorerPage.clickOnSummaryTab();
    //validation for summary tab metrics and value
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.runMetricsTextLocator,"run metrics is not present");
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.testTimeMetricsTextLocator,"test time metrics is not present")
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.availabilityMetricsTextLocator,"availability metrics is not present")
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.runMetricsValueLocator,"run metrics  value is not present");
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.testTimeMetricsValueLocator,"test time metrics value is not present")
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.availabilityMetricsValueLocator,"availability metrics value is not present")
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})

/*
   CP-44183 : Verify left navigation of  explorer RUM page
*/

test("VerifyExplorerRUMLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorExplorer,explorerPage,explorerRUMDetails, util}) => {
    let data = new DataForEnv();
    let appId = await data.getValueOfTheParameter('rumAppId');
    await util.delay(5000);
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(sourceSelectorExplorer.myAppTabInSourceSelectorLocator, 'myApp Tab is not present in source selector');
    //select myApp tab
    await sourceSelectorExplorer.clickOnMyAppTab();
    await util.delay(2000);
    //search app
    await sourceSelectorExplorer.clickOnFirstSearchAppInSelectorPage(appId);
    await util.delay(2000);
    // click on summary tab
    await explorerPage.clickOnSummaryTab();
    //validation for summary tab metrics and value
    await verification.verifyIfElementIsPresent(explorerRUMDetails.avgDOCCompleteMetricsTextLocator,"run metrics is not present");
    await verification.verifyIfElementIsPresent(explorerRUMDetails.pageViewsMetricsTextLocator,"test time metrics is not present")
    await verification.verifyIfElementIsPresent(explorerRUMDetails.avgDOCCompleteMetricsValueLocator,"availability metrics is not present")
    //await verification.verifyIfElementIsPresent(explorerRUMDetails.pageViewsMetricsLocator,"run metrics value is not present");
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})