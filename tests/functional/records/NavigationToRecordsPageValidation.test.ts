import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { ExplorerRecordListPage } from "@pageobjects/Explorer/ExplorerRecordListPage";
import { TestOverviewDashboard } from "@pageobjects/OverviewDashboard/TestOverviewDashboardPage";
import { SyntheticRecordsPage } from "@pageobjects/Records/SyntheticRecordsPage";
/*
   CP-21690 : 119205 DES Records Blade Shows No Data For Traceroute and Ping Test 
*/
test("VerifyDataInRecordsListPageForTransactionTest  @ProductionDefectRecords@Records", async ({  syntheticRecordsPage, synCCPage, page, verification }) => {
   let data = new DataForEnv();
   let TransactionTestID = await data.getValueOfTheParameter('transactionTestWithMultipleStepAndStepName');
   //navigate to CC page
   await synCCPage.LoginToCCPage();
   //click on three dot menu and navigate recoeds page
   await synCCPage.navigateFromThreeDotMenu(TransactionTestID, 'Records');
   //validation for data
   await verification.verifyIfElementIsPresent(syntheticRecordsPage.firstSearchRowInRecordsListPage, 'data is not present in records list page.');

})

/*
   CP-44053 : DES: Selected run is not displayed in Records when we navigate from errors tab
*/
test("VerifyNavigationFromErrorTab  @ProductionDefectRecords@Records", async ({  context, loginPage, util, sourceSelectorExplorer,  recordsPage, explorerPage, page, verification }) => {
   let data = new DataForEnv();
   let TransactionTestID = await data.getValueOfTheParameter('transactionTestId');
   //navigate to CC page
   await explorerPage.LoginToExplorerPage();
   //select item from explorer selector
   await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(TransactionTestID);
   //click on error tab
   await explorerPage.clickOnErrorTab();
   //get first row time
   let runTimeInexplorer = await explorerPage.getRowWiseTimeFromErrorTab(1);
   //click on records page
   await explorerPage.clickOnFirstRowThreeDotMenu();
   let getNewPage = await explorerPage.getNewWindow(context, explorerPage.recordInThreeDotMenuInErrorTabLocator);
   await util.delay(3000);
   let newRecordPage = new SyntheticRecordsPage(getNewPage);
   //get url of records page
   let runTimeInRecordsPage = await newRecordPage.getRunTimeValues();
   //verification
   await verification.verifySoftAssertTrue(runTimeInexplorer+' UTC'  == runTimeInRecordsPage,'run time is not matching.');

})

/*
   CP-21778 : DEQ: Pageviews and Impact values are displaying blank in sessions table in records blade 
*/
test("ValidationForPageViewsAndImpactValueForRumApp  @ProductionDefectRecords@Records", async ({  synCCPage, controlCenterRecords, rumControCenter, verification }) => {
   let data = new DataForEnv();
   let appName = await data.getValueOfTheParameter('rumAppName');
   //login to CC rum page
   await rumControCenter.LoginToRUMCCPage();
   //search app and click on records from three dot menu
   await synCCPage.navigateFromThreeDotMenu(appName, 'Records');
   //click on sessions in records page
   await controlCenterRecords.clickOnSessionsTab();
   //get row count 
   let rowCount = await controlCenterRecords.getRowCount();
   //get page views value
   let pageViewsValue: string[] = await controlCenterRecords.getSessionsTabPageViewsValue(parseInt(rowCount));
   //validation
   await verification.verifyValueIsNotNull(pageViewsValue, "getting null value for pageview metrics");
   //get impact value
   let impactValue: string[] = await controlCenterRecords.getSessionsTabTmpactValue(parseInt(rowCount));
   //validation
   await verification.verifyValueIsNotNull(impactValue, "getting null value for impact metrics");
})

/*
  CP-21736 : Clicking on the waterfall from tile widget in synthetic overview dashboard fails
*/

test("VerifyNavigationFromTileWidgetInOverviewDashboardToRecords @ProductionDefectRecords@Records", async ({ baseTestUtil, verification, defaultDashboardPage, dashboardBlade, dashboardRecordListPage,util,testOverviewDashboard }) => {
   //click on test over view dashboard
   await defaultDashboardPage.clickOnTab('Tests');
   //navigate to records page from tooltip menu
   await dashboardBlade.navigateFromTileWidgetToolTipFromTestDB(testOverviewDashboard.recordOptionInTileToolTipLocator);
   //validation for record list page
   await verification.verifyIfElementIsPresent(dashboardRecordListPage.recordListTextLocator, "record list page is not opening.");
   await verification.verifyIfElementIsPresent(dashboardRecordListPage.recordListPageGraphLocator, "record list page graph is not opening.");
   await verification.verifyIfElementIsPresent(dashboardRecordListPage.selectRowLocator(0), "record row is not present.");

})





