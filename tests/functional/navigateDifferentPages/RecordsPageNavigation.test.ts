import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { expect } from "@playwright/test";

/*
  CP-44184 : Verify navigate to records page by left navigation 
*/
test("VerifyRecordsTestLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, sourceSelectorPage,syntheticRecordsPage, util}) => {
    let data = new DataForEnv();
    let transactionTestID = await data.getValueOfTheParameter('transactionTestId');
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to zone page by left nav
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    //validation for errors in source selector
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorPage.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(transactionTestID);
    //validation for errors
    await verification.validationsForPage();
    //validation for metrics and filters
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.waterFallTabLocator,"waterfall tab is not present");
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.searchBoxOfGanttChartLocator,"search box of gantt is not present")
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.wiredRequestMetricsLocator,"wired request metrics is not present")
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.hostMetricsLocator,"host metrics is not present");
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.requestFilterDDLocator,"request filter DD is not present")
    await verification.verifyIfElementIsPresent(syntheticRecordsPage.fileTypeDDLocator,"file type filter DD is not present") 
})
/*
   CP-44185 : Verify RUM record page loads properly 
*/
test("VerifyRecordsRUMLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, sourceSelectorPage,rumRecordsPage, util}) => {
    let data = new DataForEnv();
    let appId = await data.getValueOfTheParameter('rumAppId');
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to zone page by left nav
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorPage.myAppTabLocator, 'myApp Tab is not present in source selector');
    // click on my app tab
    await sourceSelectorPage.clickOnMyAppTab();
    //search app
    await sourceSelectorPage.clickOnFirstSearchedAPPInSelectorPage(appId);
    //validation for errors
    await verification.validationsForPage();
    //validation for metrics and filters
    await verification.verifyIfElementIsPresent(rumRecordsPage.changeSessionTabLocator,"change session tab is not present");
    await verification.verifyIfElementIsPresent(rumRecordsPage.ganttChartSearchBoxLocator,"search box of gantt chant is not present")
    await verification.verifyIfElementIsPresent(rumRecordsPage.zoneFilterLocator,"zone filter is not present")
    
})
