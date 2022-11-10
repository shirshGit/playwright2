import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { ExplorerRecordListPage } from "@pageobjects/Explorer/ExplorerRecordListPage";
import { RecordsPage } from "@pageobjects/Records/RecordsPage";




/*
   CP-21690 : 119205 DES Records Blade Shows No Data For Traceroute and Ping Test 
*/
test("VerifyDataInRecordsListPageForTransactionTest  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, syntheticTestDetailPage, synCCPage, page, verification }) => {
   let data = new DataForEnv();
   let TransactionTestID = await data.getValueOfTheParameter('transactionTestWithMultipleStepAndStepName');
   //navigate to CC page
   await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
   //click on three dot menu and navigate recoeds page
   await synCCPage.navigateFromThreeDotMenu(TransactionTestID, 'Records');
   //validation for data
   await verification.verifyIfElementIsPresent(syntheticTestDetailPage.firstSearchRowInRecordsListPage, 'data is not present in records list page.');

})

/*
   CP-21779 : DES: Selected run is not displayed in Records when we navigate from errors tab
*/
test("VerifyNavigateFromErrorTab  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, context, loginPage, util, sourceSelectorExplorer, recordsPage, explorerPage, page, verification }) => {
   let data = new DataForEnv();
   let TransactionTestID = await data.getValueOfTheParameter('transactionTestId');
   //navigate to CC page
   await sideNavigationBar.navigateToExplorerFromSideNavigation();
   //select item from explorer selector
   await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(TransactionTestID);
   await util.delay(3000);
   //click on error tab
   await explorerPage.clickOnErrorTab();
   //get first row time
   let runTimeInexplorer = await explorerPage.getRowWiseTimeFromErrorTab(0);
   //click on records page
   await explorerPage.clickOnFirstRowThreeDotMenu();
   let getNewPage = await explorerPage.getNewWindow(context, explorerPage.recordInThreeDotMenuInErrorTabLocator);
   await util.delay(3000);
   let newRecordPage = new RecordsPage(getNewPage);
   //get url of records page
   let runTimeInRecordsPage = await newRecordPage.getRunTimeValues();
   //verification
   await verification.verifySoftAssertTrue(runTimeInexplorer == runTimeInRecordsPage,'run time is not matching.');

})

/*
   CP-21778 : DEQ: Pageviews and Impact values are displaying blank in sessions table in records blade 
*/
test("ValidationForPageViewsAndImpactValueForRumApp  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, synCCPage, controlCenterRecords, page, verification }) => {
   let data = new DataForEnv();
   let appName = await data.getValueOfTheParameter('rumAppName');
   //navigate to CC page
   await sideNavigationBar.navigateToRUMFromSideNavigation();
   //search app and click on records from three dot menu
   await synCCPage.navigateFromThreeDotMenu(appName, 'Records');
   //click on sessions in records page
   await controlCenterRecords.clickOnSessionsTab();
   //get now of row in session tab
   let rowCount = await controlCenterRecords.getRowCount();
   //get page views value
   let pageViewsValue: string[] = await controlCenterRecords.getSessionsTabPageViewsValue(parseInt(rowCount));
   //validation
   await verification.verifyValueIsNotNull(pageViewsValue, "getting null value");
   //get impact value
   let impactValue: string[] = await controlCenterRecords.getSessionsTabTmpactValue(parseInt(rowCount));
   //validation
   await verification.verifyValueIsNotNull(impactValue, "getting null value");
})

/*
  CP-21736 : Clicking on the waterfall from tile widget in synthetic overview dashboard fails
*/

test("VerifyNavigationFromTileWidgetInOverviewDashboardToRecords @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, verification, defaultDashboardPage, dashboardBlade, dashboardRecordListPage,util,context }) => {
   //click on overview dashboard 
   await defaultDashboardPage.clickOnOverviewdashboard();
   //clikc on overview dashboard dropdown
   await dashboardBlade.clickOnOverviewDashboardDropDown();
   //select test overview dashboard
   await dashboardBlade.selectDashboard('Test Overview');
   //navigate to records page from tooltip menu
   await dashboardBlade.navigateFromToolTip('Records');
   //validation for record list page
   await verification.verifyIfElementIsPresent(dashboardRecordListPage.recordListTextLocator, "record list page is not opening.");
   await util.delay(2000);
   let getNewPage = await dashboardRecordListPage.getNewWindow(context, dashboardRecordListPage.selectRowLocator(0));
   await util.delay(3000);
   let recordPage = new RecordsPage(getNewPage);
   //get url of records page
   let getCurrentPageUrl = await recordPage.getUrl();
   //verification for records page
   await verification.verifySoftAssertTrue(getCurrentPageUrl.includes('catchpoint.com/ui/Symphony/Record/'), 'Not able to navigate to records page');

})

/*
  CP-21853 : 125291 Explorer: Record blade shows NO DATA while the graph tooltip shows #n runs 
*/
test("VerifyRecordsBladeShowDataWhenToolTipShowsData  @ProductionDefectRecords@Records", async({baseTestUtil, sideNavigationBar, verification,util,sourceSelectorExplorer,explorerPage,explorerRecordListPage}) => {
   let data = new DataForEnv();
   //navigate to explorer page
   await sideNavigationBar.navigateToExplorerFromSideNavigation();
   let testID = await data.getValueOfTheParameter('transactionTestId');
   //select tests from source selector
   await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(testID);
   //click on data point
   await explorerPage.clickOnFirstDataPoint();
   //validation for data in record list page
   verification.verifyIfElementIsPresent(explorerRecordListPage.firstRowLocator,'data is not present.');

})




