import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { ExplorerPage } from "@pageobjects/Explorer/ExplorerPage";



/*
    CP-40695 : Verify smartboard option is displayed in left navigation 
*/
test("VerifySmartboardOptionIsDisplayedInLeftNavigation @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorSmartboard,syntheticSmartboardPage, util}) => {
    //verification for home icon
    await verification.verifyIfElementIsPresent(sideNavigationBar.sideNavHome,'home section icon is not present');
    //click on home Icon
    await sideNavigationBar.clickOnAnalyticsIcon();
    //verification for smartboard option
    await verification.verifyIfElementIsPresent(sideNavigationBar.sideNavSmartboard,'smartboard option is not present');
    
})

/*
    CP-40696 : Verify smartboard is opened when clicked on smartboard option in left navigation 
*/
test("VerifySmartboardOpenWhenClickedOnSBOptionInInLeftNavigation @PageNavigation@CustomDashboard@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorSmartboard,syntheticSmartboardPage, util}) => {
    //navigate to smartboard by left navigation
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    //validation for smartboard page
    let getPageUrl = await syntheticSmartboardPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getPageUrl.includes('Symphony/Smartboard/Test?lui=1'), 'smartboard page is not opening after clicking on smartboard in home section');
  
})

/*
    CP-41008 : Verify applied other filter is passed as filter in smartboard when navigated from CD
*/
test("VerifyAppliedFilterIsPassedIsAsFilterInSB @PageNavigation@CustomDashboard", async({baseTestUtil, verification, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade,sideNavigationBar}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = 'Country';
    let otherFilterOptions : string[] = ['United State'];
    let vizName = 'Tile';
    let endpointName = 'Test';
    let endpointOption = 'Test';
    let dbName = await testUtility.getDashboardName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test tile
    await customDBPage.clickTileWidge(1);
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    let filterValue = await syntheticSmartboardPage.getFilterValue(1);
    //verification for passed filter
    await verification.verifySoftAssertTrue(filterValue.includes(otherFilters[0]) && filterValue.includes(otherFilterOptions[0]),'filter value is not matching')
    //delete created db
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await dashboardBlade.clickOnOverviewDashboard();
    await dashboardBlade.deleteDB(dbName);
})
/*
    CP-41009 : Verify applied filter is passed as filter in smartboard when navigated from test overview dashboard
*/
test("VerifyAppliedFilterIsPassedIsAsFilterInSBWhenNavigateFromTestOVDB @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage, util,testOverviewDashboard}) => {
    //click on test over view dashboard
    await defaultDashboardPage.clickOnTab('Tests');
    //click on filter button
    await testOverviewDashboard.clickOnFilter();
    //select all geo filter
    await testOverviewDashboard.selectCityInGeoFilter('Denver');
    //click on apply button
    await testOverviewDashboard.applyFilterButton();
    //click on first tile
    await testOverviewDashboard.clickOnFirstTile(1);
    //get url
    let url =  await testOverviewDashboard.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    await util.delay(3000);
    let filterValue = await testOverviewDashboard.getFilterValue(1);
    //verification for passed filter
    await verification.verifySoftAssertTrue(filterValue.includes('City') && filterValue.includes('Denver'),'filter value is not matching')
    
})

/*
    CP-41010 :Verify when clicked on smartboard in table viz in explorer then able to navigate to smartboard 
*/
test("VerifyClickTableVizInExplorerNavigateToSB @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorExplorer, util,explorerPage,syntheticSmartboardPage,context}) => {
    //navigate to explorer page
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    let data = new DataForEnv();
    let testId = await data.getValueOfTheParameter('transactionTest');
    //select test
    await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(testId);
    await util.delay(3000);
    //select vizualization
    await explorerPage.selectVizualization('Table');
    //click on three dot menu and navigate to SB
    await explorerPage.clickOnThreeDotMenuForTableViz(0);
    let getNewPage = await explorerPage.getNewWindow(context, await explorerPage.tableVizThreeDotMenuSB);
    let sbPage = new ExplorerPage(getNewPage);
    await util.delay(4000);
    //fetch url of test property page
    let url =  await sbPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
   
})

/*
    CP-41011 : Verify gauge tile navigation to smartboard 
*/
test("VerifyGaugeTileNavigationToSB @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Experience Score'];
    let otherFilters : string = null
    let otherFilterOptions : string[] = null
    let vizName = 'Gauge';
    let endpointName = 'Test';
    let endpointOption = 'Test';
    let dbName = await testUtility.getDashboardName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.clickTileWidge(1);
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test gauge not able to navigate to smarboardpage');
    //delete created db
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await dashboardBlade.clickOnOverviewDashboard();
    await dashboardBlade.deleteDB(dbName);
})

/*
    CP-41012 : Verify gauge tile navigation to smartboard BY 3DOT MENU
*/
test("VerifyGuageTileNavigationToSBByThreeDotMenu @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Experience Score'];
    let otherFilters : string = null;
    let otherFilterOptions : string[] = null;
    let vizName = 'Gauge';
    let endpointName = 'Test';
    let endpointOption = 'Test';
    let dbName = await testUtility.getDashboardName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.navigateByThreeDotMenu("Smartboard");
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    //delete created db
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await dashboardBlade.clickOnOverviewDashboard();
    await dashboardBlade.deleteDB(dbName);
})

/*
    CP-41013 : Verify tile navigation to smartboard BY 3DOT MENU
*/
test("VerifyTileNavigationToSBByThreeDotMenu @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = 'Country';
    let otherFilterOptions : string[] = ['United State'];
    let vizName = 'Tile';
    let endpointName = 'Test';
    let endpointOption = 'Test';
    let dbName = await testUtility.getDashboardName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    await util.delay(4000);
    //click on test 
    await customDBPage.navigateByThreeDotMenu("Smartboard");
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    //delete created db
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await dashboardBlade.clickOnOverviewDashboard();
    await dashboardBlade.deleteDB(dbName);
})

/*
    CP-41014 : Verify tile navigation to smartboard 
*/
test("VerifyTileNavigationToSB @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = null
    let otherFilterOptions : string[] = null
    let vizName = 'Tile';
    let endpointName = 'Test';
    let endpointOption = 'Test';
    let dbName = await testUtility.getDashboardName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    await util.delay(4000);
    //click on test 
    await customDBPage.clickTileWidge(1);
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    //delete created db
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await dashboardBlade.clickOnOverviewDashboard();
    await dashboardBlade.deleteDB(dbName);
})


/*
    CP-41015 : Verify table navigation to smartboard 
*/
test("VerifyTableNavigationToSB @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let dimension : string[] = ['Test'];
    let otherFilters : string = null
    let otherFilterOptions : string[] = null
    let vizName = 'Table';
    let endpointName = 'Test';
    let endpointOption = 'Test';
    let dbName = await testUtility.getDashboardName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTableWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,dimension,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    await util.delay(4000);
    //click on test 
    await customDBPage.clickTableWidgeTest();
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    //delete created db
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await dashboardBlade.clickOnOverviewDashboard();
    await dashboardBlade.deleteDB(dbName);
})

/*
    CP-41016 : Verify SLA widget navigation to smartboard 
*/
test("VerifySLANavigationToSB @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = null
    let otherFilterOptions : string[] = null
    let vizName = 'Table';
    let endpointName = 'Test';
    let endpointOption = 'SLA';
    let dbName = await testUtility.getDashboardName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createSLAWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,null,metrics,'Last 3 Days');
    //click on save db
    await customDBPage.saveDB();
    await util.delay(4000);
    //click on test 
    await customDBPage.clickTableWidgeTest();
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    //delete created db
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await dashboardBlade.clickOnOverviewDashboard();
    await dashboardBlade.deleteDB(dbName);
})

/*
    CP-41017 : Verify test widget navigation to smartboard in overview dashboard
*/
test("VerifyTestWidgetNavigationToSBInOVDB @PageNavigation@CustomDashboard", async({baseTestUtil, verification, defaultDashboardPage,testOverviewDashboard, util}) => {
    await util.delay(4000);
    //click on test in test widget page
    await defaultDashboardPage.clickOnTestInTableTestWidget(1);
    //get url
    let url =  await testOverviewDashboard.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
})

/*
    CP-41018 :Verify tile widget navigation to smartboard in Test overview dashboard
*/
test("VerifyTileWidgetNavigationToSBInOVDB @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,testOverviewDashboard, util,syntheticSmartboardPage}) => {
    //click on test over view dashboard
    await defaultDashboardPage.clickOnTab('Tests');
    //click on test in test widget page
    await defaultDashboardPage.clickOnTestInTileTestWidget(1);
    //get url
    let url =  await testOverviewDashboard.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
})


/*
    CP-41019 : Verify alert page navigation to smartboard
*/
test("VerifyAlertPageNavigationToSB @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar,util, verification, alertLogPage}) => {
    //navigate to records page
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    //click hover first test three dot menu amd click on smartboard
    await alertLogPage.clickOnThreeDotMenu(0,'Smartboard');
    await util.delay(3000);
    //fetch url of test property page
    let getPageURL = await alertLogPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getPageURL.includes('/Smartboard/Test?'), 'smartboard page is not opening after clicking on three dot menu smartboard option');
   
})

/*
    CP-41379 : Verify Smartboard navigation from CC 
*/
test("VerifySmartboardNavigationToCC @PageNavigation@CustomDashboard", async({baseTestUtil,sideNavigationBar,util, verification, syntheticTestDetailPage,syntheticSmartboardPage,synCCPage}) => {
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestId');
    //navigate to CC page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(3000);
    //1.Smartboard navigation from three dot menu
    await syntheticTestDetailPage.navigateFromThreeDotMenu(testID,'Smartboard');
    await util.delay(3000);
    let getSBPageURL = await synCCPage.getUrl();
    //validation for smartboard page
    await verification.verifySoftAssertTrue(getSBPageURL.includes('Smartboard/Test?ti=' + testID ), 'smartboard page is not opening after clicking on three dot manu smartboard button');
    //validation for last 6 hour time frame selected
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.lastSixHourTimeFrame,'');
})

