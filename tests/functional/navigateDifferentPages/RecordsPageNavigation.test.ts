import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { expect } from "@playwright/test";

/*
 CP-41352 : Verify Metrics for Web chrome test in Summary tab
*/
test("VerifyRecordsTestLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorPage,syntheticRecordsPage, util}) => {
    let data = new DataForEnv();
    let transactionTestID = await data.getValueOfTheParameter('transactionTestId');
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(sourceSelectorPage.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(transactionTestID);
    //validation for metrics and filters
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.waterFallTabLocator,"waterfall tab is not present");
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.searchBoxOfGanttChartLocator,"search box of gantt is not present")
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.wiredRequestMetricsLocator,"wired request metrics is not present")
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.hostMetricsLocator,"host metrics is not present");
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.requestFilterDDLocator,"request filter DD is not present")
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.fileTypeDDLocator,"file type filter DD is not present")
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})
/*
   CP-44185 : Verify RUM record page loads properly 
*/
test("VerifyRecordsRUMLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorPage,rumRecordsPage, util}) => {
    let data = new DataForEnv();
    let appId = await data.getValueOfTheParameter('rumAppId');
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(sourceSelectorPage.myAppTabLocator, 'myApp Tab is not present in source selector');
    // click on my app tab
    await sourceSelectorPage.clickOnMyAppTab();
    //search app
    await sourceSelectorPage.clickOnFirstSearchedAPPInSelectorPage(appId);
    await util.delay(2000);
    //validation for metrics and filters
    await verification.verifyIfElementIsPresent(rumRecordsPage.changeSessionTabLocator,"change session tab is not present");
    await verification.verifyIfElementIsPresent(rumRecordsPage.ganttChartSearchBoxLocator,"search box of gantt chant is not present")
    await verification.verifyIfElementIsPresent(rumRecordsPage.zoneFilterLocator,"zone filter is not present")
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})
