import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { DefaultDashboardPage } from "@pageobjects/OverviewDashboard/DefaultDashboardPage";
import { TestOverviewDashboard } from "@pageobjects/OverviewDashboard/TestOverviewDashboardPage";
import { TestUtility } from "@util/TestUtility";

/*
     CP-40695 : Verify smartboard option is displayed in left navigation 
*/
test.skip("VerifySmartboardOptionIsDisplayedInLeftNavigation @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorSmartboard,syntheticSmartboardPage, util}) => {
    //verification for home icon
    await verification.verifyIfElementIsPresent(sideNavigationBar.sideNavHome,'home section icon is not present');
    //click on home Icon
    await sideNavigationBar.clickOnHomeIcon();
    //verification for smartboard option
    await verification.verifyIfElementIsPresent(sideNavigationBar.sideNavSmartboard,'smartboard option is not present');
    
})

/*
    CP-40696 : Verify smartboard is opened when clicked on smartboard option in left navigation 
*/
test.skip("VerifySmartboardOpenWhenClickedOnSBOptionInInLeftNavigation @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorSmartboard,syntheticSmartboardPage, util}) => {
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
test.skip("VerifyAppliedFilterIsPassedIsAsFilterInSB @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = 'Country';
    let otherFilterOptions : string[] = ['United State'];
    let vizName = 'Tile';
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(await testUtility.getDashboardName());
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization('Test','Test',vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.clickTileWidge(1);
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    let filterValue = await syntheticSmartboardPage.getFilterValue(1);
    //verification for passed filter
    await verification.verifySoftAssertTrue(filterValue.includes(otherFilters[0]) && filterValue.includes(otherFilterOptions[0]),'filter value is not matching')
    
})
/*
    CP-41009 : Verify applied filter is passed as filter in smartboard when navigated from test overview dashboard
*/
test.skip("VerifyAppliedFilterIsPassedIsAsFilterInSBWhenNavigateFromTestOVDB @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage, util,testOverviewDashboard}) => {
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
    let filterValue = await testOverviewDashboard.getFilterValue(1);
    //verification for passed filter
    await verification.verifySoftAssertTrue(filterValue.includes('City') && filterValue.includes('Denver'),'filter value is not matching')
    
})

/*
    CP-41010 :Verify when clicked on smartboard in table viz in explorer then able to navigate to smartboard 
*/
test.skip("VerifyClickTableVizInExplorerNavigateToSB @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage, util,testOverviewDashboard}) => {
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
    let filterValue = await testOverviewDashboard.getFilterValue(1);
    //verification for passed filter
    await verification.verifySoftAssertTrue(filterValue.includes('City') && filterValue.includes('Denver'),'filter value is not matching')
    
})

/*
    CP-41011 : Verify gauge tile navigation to smartboard 
*/
test.skip("VerifyGaugeTileNavigationToSB @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Experience Score'];
    let otherFilters : string = null
    let otherFilterOptions : string[] = null
    let vizName = 'Gauge';
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(await testUtility.getDashboardName());
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization('Test','Test',vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.clickTileWidge(1);
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
})

/*
    CP-41012 : Verify gauge tile navigation to smartboard BY 3DOT MENU
*/
test.skip("VerifyGuageTileNavigationToSBByThreeDotMenu @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Experience Score'];
    let otherFilters : string = 'Country';
    let otherFilterOptions : string[] = ['United State'];
    let vizName = 'Gauge';
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(await testUtility.getDashboardName());
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization('Test','Test',vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.navigateByThreeDotMenu("Smartboard");
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
   
})

/*
    CP-41013 : Verify tile navigation to smartboard BY 3DOT MENU
*/
test.skip("VerifyTileNavigationToSBByThreeDotMenu @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = 'Country';
    let otherFilterOptions : string[] = ['United State'];
    let vizName = 'Tile';
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(await testUtility.getDashboardName());
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization('Test','Test',vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.navigateByThreeDotMenu("Smartboard");
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
   
})

/*
    CP-41014 : Verify tile navigation to smartboard 
*/
test.skip("VerifyTileNavigationToSB @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = null
    let otherFilterOptions : string[] = null
    let vizName = 'Tile';
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(await testUtility.getDashboardName());
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization('Test','Test',vizName);
    //create Widget
    await customDBPage.createTileWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.clickTileWidge(1);
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    
})


/*
    CP-41015 : Verify table navigation to smartboard 
*/
test.skip("VerifyTableNavigationToSB @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let dimension : string[] = ['Test'];
    let otherFilters : string = null
    let otherFilterOptions : string[] = null
    let vizName = 'Table';
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(await testUtility.getDashboardName());
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization('Test','Test',vizName);
    //create Widget
    await customDBPage.createTableWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,dimension,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.clickTableWidgeRow(1);
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    
})

/*
    CP-41016 : Verify SLA widget navigation to smartboard 
*/
test.skip("VerifySLANavigationToSB @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,synWidgetPropertyPage, util,testUtility,customDBPage,syntheticSmartboardPage,dashboardBlade}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = null
    let otherFilterOptions : string[] = null
    let vizName = 'Table';
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(await testUtility.getDashboardName());
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization('Test','SLA',vizName);
    //create Widget
    await customDBPage.createSLAWidget(await testUtility.getWidgetName(),'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,'Last 3 Days');
    //click on save db
    await customDBPage.saveDB();
    //click on test 
    await customDBPage.clickTableWidgeRow(1);
    //get url
    let url =  await syntheticSmartboardPage.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
    
})

/*
    CP-41017 : Verify test widget navigation to smartboard in overview dashboard
*/
test("VerifyTestWidgetNavigationToSBInOVDB @PageNavigation", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,testOverviewDashboard, util,syntheticSmartboardPage}) => {
    //click on test over view dashboard
    await defaultDashboardPage.clickOnTab('Tests');
    //click on test in test widget page
    await defaultDashboardPage.clickOnTestInTestWidget(1);
    //get url
    let url =  await testOverviewDashboard.getUrl();
    await verification.verifySoftAssertTrue(url.includes('/Smartboard/Test'),'after clicking on test not able to navigate to smarboardpage');
})