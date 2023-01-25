import test from "@lib/BaseTest"

/*
  CP-44294 : Verify Widgets in default overview dashboard page
*/
test("VerifyOverviewDashboardLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, defaultDashboardPage, verification, util}) => {
    await util.delay(5000);
    await verification.verifyIfElementIsPresent(defaultDashboardPage.errorSectionOverviewDashboardLocator, 'Error Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.eventSectionOverviewDashboardLocator, 'Event Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.alertSectionOverviewDashboardLocator, 'Alert Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.nodeMapPerformanceOverviewLocator, 'Node Map Section is not present');
    //await verification.verifyIfElementIsPresent(defaultDashboardPage.rumWidgetinOverviewDashboardLocator,'Rum Widget is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})

/*
  CP-44295 : Verify Widgets in test overview dashboard page
*/
test("VerifyTestOverviewDashboardLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, defaultDashboardPage, verification, util,testOverviewDashboard, dashboardBlade}) => {
    
    // await defaultDashboardPage.clickOnOverviewdashboard();
    // await dashboardBlade.clickOnOverviewDashboardDropDown();
    // await dashboardBlade.clickOnTestOverviewDashboard();
    await testOverviewDashboard.clickOnTab('Test');
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(defaultDashboardPage.errorSectionOverviewDashboardLocator, 'Error Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.eventSectionOverviewDashboardLocator, 'Event Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.alertSectionOverviewDashboardLocator, 'Alert Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.nodeMapPerformanceOverviewLocator, 'Node Map Section is not present');
    await verification.verifyIfElementIsPresent(testOverviewDashboard.testWidgetInTestOverviewDBLocator, 'Test tile widget is not present');
    await verification.verifyElementIsNotPresent(defaultDashboardPage.rumWidgetinOverviewDashboardLocator,'Rum Widget is present'); 
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})  
/*
    CP-29418 : Verify User Landing in new Endpoint monitoring overview dashboard page
*/

test("VerifyEndpointOverviewDBLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, defaultDashboardPage, verification, util,testOverviewDashboard, dashboardBlade, endpointOverviewDB}) => {
    
    // await defaultDashboardPage.clickOnOverviewdashboard();
    // await dashboardBlade.clickOnOverviewDashboardDropDown();
    // await dashboardBlade.clickOnEndpointOverviewDashboard();
    await testOverviewDashboard.clickOnTab('Endpoint');
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstLocationWidgetLocator, 'Worst Endpont is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstAppHeaderLocator, 'Worst App Section is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstEndpointsHeaderLocator, 'Worst Endpoint Section is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.endpointTestHeaderInEndpointWidgetLocator, 'Endpoint Tests Section is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})  

/*
    CP-39997 : To Validate BGP Metric Cards RPKI Status, %Reachability, #Hijacks , #Neighboring Peers , # Prefix withdrawn in BGP Dashboard
*/
test("VerifyBGPOverviewDBLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, defaultDashboardPage, verification, util,testOverviewDashboard, dashboardBlade, bgpOverviewDB}) => {
    
    // await defaultDashboardPage.clickOnOverviewdashboard();
    // await dashboardBlade.clickOnOverviewDashboardDropDown();
    // await dashboardBlade.clickOnBGPOverviewDashboard();
    await testOverviewDashboard.clickOnTab('BGP');
    await util.delay(3000);
    await verification.verifyIfElementIsPresent(bgpOverviewDB.RPKIStatusLocator, 'RPKI is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.reachabilityFieldLocator, 'Rechability Section is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.hijacksFieldLocator, 'Hijack Section is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.neighboringPeersLocator, 'Neighboring Peers Section is not present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.prefixesWithdrawnFieldLocator, 'Prefix Section is not present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.BGPChangesOriginsLocator, 'BGP Changes Section is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})  

