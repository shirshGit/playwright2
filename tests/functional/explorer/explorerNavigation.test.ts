import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";



/*
    CP-26760 : Verify Source selection Blade display ALL Tab selected when its division wide
*/
test("VerifyScoreSelectionBladeDisplayAllTabSelectedWhenItsDivisionWide @PageNavigation@Explorer", async({baseTestUtil,sideNavigationBar, verification, testUtility,dashboardBlade,customDBPage,explorerPage, util}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let vizName = 'Tile';
    let endpointName = 'Test';
    let endpointOption = 'Test';
    let dbName = await testUtility.getDashboardName();
    let widgetName = await testUtility.getWidgetName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTileWidget(widgetName,'Delete',null,null,null,null,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    await util.delay(4000);
    //click on widget name
    await customDBPage.clickOnWidgetName(widgetName);
    await util.delay(2000);
    let getPageURL = await explorerPage.getUrl();
    //validation for explorer page and line viz
    await verification.verifySoftAssertTrue(getPageURL.includes('/Explorer/?sIds='), 'Explorer page is not opening after clicking on error in error widget');
    //click on source tab
    await explorerPage.clickOnSourceTab()
    //validation for All tab selected
    let classProperty = await explorerPage.getAttributeProperty(explorerPage.tabInSourceSelectorPagelocator('All'),'class');
    await verification.verifySoftAssertTrue(classProperty.includes('is-selected linkIsSelected'),'All tab is selected')
})

/*
    CP-32443 : Verify Test name is displayed in explorer page source selector while navigating from control centre
*/
test("VerifyTestNameIsDisplayedInExplorerPageSourceSelectorWhileNavigateFromCC @PageNavigation@Explorer", async({baseTestUtil,sideNavigationBar, verification, explorerSyntheticDetails,synCCPage, util,explorerPage}) => {
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestId');
    let testName = await data.getValueOfTheParameter('testName');
    //navigate to CC page
    await util.delay(2000);
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(4000);
    //Performance page navigation from three dot menu
    await synCCPage.navigateFromThreeDotMenu(testID, 'Performance');
    await util.delay(3000);
    //validation for test name
    let testInSourceSelector = await explorerPage.getTestNameFromSourceSelector(testName);
    await verification.verifySoftAssertTrue(testInSourceSelector.includes(testName), 'test name is not matching in source selector');
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.last24HourTimeFrameLocator, 'last 24 hour is not selected as default time frame');
    

    //navigate to CC page
    await util.delay(2000);
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(4000);
    //Scatterplot page navigation from three dot menu
    await synCCPage.navigateFromThreeDotMenu(testID, 'Scatterplot');
    await util.delay(3000);
    //validation for test name
    let testInSourceSelector2 = await explorerPage.getTestNameFromSourceSelector(testName);
    await verification.verifySoftAssertTrue(testInSourceSelector2.includes(testName), 'test name is not matching in source selector');
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.last24HourTimeFrameLocator, 'last 24 hour is not selected as default time frame');
    

    //navigate to CC page
    await util.delay(2000);
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(4000);
    //Explorer page navigation from three dot menu
    await synCCPage.navigateFromThreeDotMenu(testID, 'Statistical');
    await util.delay(3000);
    //validation for test name
    let testInSourceSelector3 = await explorerPage.getTestNameFromSourceSelector(testName);
    await verification.verifySoftAssertTrue(testInSourceSelector3.includes(testName), 'test name is not matching in source selector');
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.last24HourTimeFrameLocator, 'last 24 hour is not selected as default time frame');
    
})

/*
    CP-26758 : Verify User shouldn't seeing any banner message when navigate from CD to Explore
*/
test.skip("VerifyUserShouldNotSeeAnyBannerMessageWhenNavigateFromCDToExplorer @PageNavigation@Explorer", async({baseTestUtil,sideNavigationBar, verification, dashboardBlade,testUtility,customDBPage,explorerPage, util}) => {
    let metrics : string[] = ['Test Time (ms)'];
    let otherFilters : string = 'City';
    let otherFilterOptions : string[] = ['Boston'];
    let vizName = 'Tile';
    let endpointName = 'Test';
    let endpointOption = 'Test';
    let dbName = await testUtility.getDashboardName();
    let widgetName = await testUtility.getWidgetName();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTileWidget(widgetName,'Delete',null,null,otherFilters,otherFilterOptions,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    await util.delay(4000);
    //click on widget name
    await customDBPage.clickOnWidgetName(widgetName);
    await util.delay(4000);
    //verification for selected filter
    await verification.verifyIfElementIsPresent(explorerPage.selectedFilterValueLocator(otherFilterOptions[0]),'filter is not selected')
    await verification.verifyIfElementIsPresent(explorerPage.selectedFilterNameLocator(otherFilters),'filter is not selected')
    

    //validation for label
    let dataFilterName : string = 'Label';
    let otherFilters2 : string = null
    let otherFilterOptions2 : string[] = null
    let dbName2 = await testUtility.getDashboardName();
    let widgetName2 = await testUtility.getWidgetName();
    await dashboardBlade.clickOnHomeSection();
    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //click on create DB
    await customDBPage.navigateToCreateDB(dbName2);
    //create navigate to custom DB widgetProperty page
    await customDBPage.SelectSourceAndVizualization(endpointName,endpointOption,vizName);
    //create Widget
    await customDBPage.createTileWidget(widgetName2,'Delete',null,dataFilterName,otherFilters2,otherFilterOptions2,metrics,null,null);
    //click on save db
    await customDBPage.saveDB();
    await util.delay(4000);
    //click on widget name
    await customDBPage.clickOnWidgetName(widgetName2);
    await util.delay(4000);
    //verification for selected label filter
    await verification.verifyIfElementIsPresent(explorerPage.commonLocator('This widget is not supported.'),'Banner is not displayed')
    
    //delete created db
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await dashboardBlade.clickOnOverviewDashboard();
    await dashboardBlade.deleteDB(dbName);
    await dashboardBlade.deleteDB(dbName2);
})


/*
    CP-44783 : Scenario:Verify when navigation from dashboard to explorer time frame should be selected
*/
test("VerifySelectedTimeFrameShouldPassWhenUserNavigateFromCDToExplorer @PageNavigation@Explorer", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,customDBPage,explorerPage, util}) => {
    //validation for Three dot menu explorer navigation
    //get todays date
    let timeNow = await util.getUTCTime();
    let date = await util.getDate(0,'mmm dd yyyy');
    //select time frame
    await defaultDashboardPage.selectTimeFrameForTestWidget('Today')
    await util.delay(2000);
    //click on test in test widget page
    await defaultDashboardPage.clickOnThreeDotMenuInTableTestWidget(2,defaultDashboardPage.explorerUnderThreeDotMenuInTableWidgetLocator);
    await util.delay(5000);
    let getPageURL = await explorerPage.getUrl();
    //validation for explorer page and line viz
    await verification.verifySoftAssertTrue(getPageURL.includes('/Explorer/?sIds='), 'Explorer page is not opening after clicking on three dot manu performance button');
    await verification.verifySoftAssertTrue(getPageURL.includes('viz=1'), 'performace viz is not set after clicking on performace button fron three dot menu');

    //fetch selected time frame 
    let selectedTime = await explorerPage.getDateTimeValue(explorerPage.getSelectedTimeFrameLocator);
    //verification for selected filter
    await verification.verifySoftAssertTrue('Today' === selectedTime,'Selected time frame is not passed from DB to explorer')
    
    //validation for Three dot menu scatterplot navigation
    //navigate to dashboard page
    await util.delay(2000);
    await sideNavigationBar.navigateToDashboardFromSideNavigation(); 
    //select time frame
     await defaultDashboardPage.selectTimeFrameForTestWidget('Today')
     await util.delay(2000);
     //click on test in test widget page
     await defaultDashboardPage.clickOnThreeDotMenuInTableTestWidget(2,defaultDashboardPage.scatterPlotUnderThreeDotMenuInTableWidgetLocator);
     await util.delay(5000);
     let getPageURL2 = await explorerPage.getUrl();
     //validation for explorer page and line viz
     await verification.verifySoftAssertTrue(getPageURL2.includes('/Explorer/?sIds='), 'Explorer page is not opening after clicking on three dot manu performance button');
     await verification.verifySoftAssertTrue(getPageURL2.includes('viz=3'), 'scatterplot viz is not set after clicking on performace button fron three dot menu');
 
     //fetch selected time frame 
     let selectedTime2 = await explorerPage.getDateTimeValue(explorerPage.getSelectedTimeFrameLocator);
     //verification for selected filter
     await verification.verifySoftAssertTrue('Today' === selectedTime2,'Selected time frame is not passed from DB to explorer')
     

 
})

/*
     CP-44784 : Scenario: Verify Navigation from test overview page to Explorer
*/
test("VerifySelectedTimeFrameShouldPassWhenUserNavigateFromTestOVDBToExplorer @PageNavigation@Explorer", async({baseTestUtil,sideNavigationBar, verification, defaultDashboardPage,testOverviewDashboard,explorerPage, util}) => {
    //get todays date
    let timeNow = await util.getUTCTime();
    let date = await util.getDate(0,'mmm dd yyyy');
    await util.delay(4000);
    //navigate to test overview dashboard
    await defaultDashboardPage.clickOnTab('Tests');
    //select time frame
    await testOverviewDashboard.selectTimeFrameForTileTestWidget('Today');
    //hover and click on three dot menu item tile widget
    await testOverviewDashboard.hoverAndSelectItemFromThreeDotMenuInTileTestWidget(2,'Explorer')
    await util.delay(2000);
    let getPageURL = await explorerPage.getUrl();
    //validation for explorer page and line viz
    await verification.verifySoftAssertTrue(getPageURL.includes('/Explorer/?sIds='), 'Explorer page is not opening after clicking on three dot manu performance button');
    await verification.verifySoftAssertTrue(getPageURL.includes('viz=1'), 'performace viz is not set after clicking on performace button fron three dot menu');
   //fetch selected time frame 
   let selectedTime = await explorerPage.getDateTimeValue(explorerPage.getSelectedTimeFrameLocator);
   //verification for selected filter
   await verification.verifySoftAssertTrue('Today' === selectedTime,'Selected time frame is not passed from OVDB to explorer')
   
    //validation for Three dot menu scatterplot navigation
    //navigate to dashboard page
    await util.delay(2000);
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    //navigate to test overview dashboard
    await defaultDashboardPage.clickOnTab('Tests');
    //select time frame
    await testOverviewDashboard.selectTimeFrameForTileTestWidget('Today');
    //click on test in test widget page
    await testOverviewDashboard.hoverAndSelectItemFromThreeDotMenuInTileTestWidget(2,'Scatterplot');
    await util.delay(4000);
    let getPageURL1 = await explorerPage.getUrl();
    //validation for explorer page and line viz
    await verification.verifySoftAssertTrue(getPageURL1.includes('/Explorer/?sIds='), 'Explorer page is not opening after clicking on three dot manu performance button');
    await verification.verifySoftAssertTrue(getPageURL1.includes('viz=3'), 'scatterplot viz is not set after clicking on scatterplot button fron three dot menu');
   //fetch selected time frame 
   let selectedTime2 = await explorerPage.getDateTimeValue(explorerPage.getSelectedTimeFrameLocator);
   //verification for selected filter
   await verification.verifySoftAssertTrue('Today' === selectedTime2,'Selected time frame is not passed from OVDB to explorer')
   
})



/*
    CP-27083 : Correct error code filter should pass to explorer page from overview pages
*/
test("VerifyCorrectErrorCodeFilterShouldPassToExplorerPageFromOVDBPage @PageNavigation@Explorer", async({baseTestUtil,sideNavigationBar, verification, testOverviewDashboard,explorerPage, util}) => {
    let errorName = await testOverviewDashboard.getTextOfElement(testOverviewDashboard.errorWidgetErrorLocator(1));
    await testOverviewDashboard.clickOnErrorInErrorWidget(1);
    await util.delay(4000);
    let getPageURL = await explorerPage.getUrl();
    //validation for explorer page and line viz
    await verification.verifySoftAssertTrue(getPageURL.includes('/Explorer/?sIds='), 'Explorer page is not opening after clicking on error in error widget');
    //get filter name and value
    let filterName = await explorerPage.getTextOfElement(explorerPage.filterNameLocator);
    let filterValue = await explorerPage.getTextOfElement(explorerPage.filterValueLocator);
    //verification
    await verification.verifySoftAssertTrue(errorName === filterValue,'Selected filter is not passed to explorer')
    await verification.verifySoftAssertTrue(filterName.includes('Error Type'),'Selected filter is not passed to explorer')
    //error table item
    await util.delay(4000);
    let errorTableItem : string[] = ['Test','Time','Step/Hop/Level','Node','IP','URL','Error Type','Error Code','# Test Failures']
    let getValue : string[] = await explorerPage.getValue(errorTableItem);
    //validation for error table items
    for (let index = 0; index < errorTableItem.length; index++) {
        const element1 = errorTableItem[index];
        const element2 = getValue[index];
        await verification.verifySoftAssertTrue(element1 === element2,'Error table items value is not matching')
    }
})


