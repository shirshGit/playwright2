import test from "@lib/BaseTest"

test("VerifyOverviewDashboardLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, defaultDashboardPage, verification, util}) => {
    await util.delay(5000);
    await verification.verifyIfElementIsPresent(defaultDashboardPage.errorSectionOverviewDashboardLocator, 'Error Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.eventSectionOverviewDashboardLocator, 'Event Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.alertSectionOverviewDashboardLocator, 'Alert Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.nodeMapPerformanceOverviewLocator, 'Node Map Section is not present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.rumWidgetinOverviewDashboardLocator,'Rum Widget is not present');
})

test("VerifyTestOverviewDashboardLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, defaultDashboardPage, verification, util,testOverviewDashboard, dashboardBlade}) => {
    
    await defaultDashboardPage.clickOnOverviewdashboard();
    await dashboardBlade.clickOnOverviewDashboardDropDown();
    await dashboardBlade.clickOnTestOverviewDashboard();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(defaultDashboardPage.errorSectionOverviewDashboardLocator, 'Error Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.eventSectionOverviewDashboardLocator, 'Event Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.alertSectionOverviewDashboardLocator, 'Alert Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.nodeMapPerformanceOverviewLocator, 'Node Map Section is not present');
    await verification.verifyIfElementIsPresent(testOverviewDashboard.testWidgetInTestOverviewDBLocator, 'Test tile widget is not present');
    await verification.verifyElementIsNotPresent(defaultDashboardPage.rumWidgetinOverviewDashboardLocator,'Rum Widget is present'); 
})  

test("VerifyEndpointOverviewDBLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, defaultDashboardPage, verification, util,testOverviewDashboard, dashboardBlade, endpointOverviewDB}) => {
    
    await defaultDashboardPage.clickOnOverviewdashboard();
    await dashboardBlade.clickOnOverviewDashboardDropDown();
    await dashboardBlade.clickOnEndpointOverviewDashboard();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstLocationWidgetLocator, 'Worst Endpont is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstAppHeaderLocator, 'Worst App Section is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstEndpointsHeaderLocator, 'Worst Endpoint Section is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.endpointTestHeaderInEndpointWidgetLocator, 'Endpoint Tests Section is not present');
})  


test("VerifyBGPOverviewDBLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, defaultDashboardPage, verification, util,testOverviewDashboard, dashboardBlade, bgpOverviewDB}) => {
    
    await defaultDashboardPage.clickOnOverviewdashboard();
    await dashboardBlade.clickOnOverviewDashboardDropDown();
    await dashboardBlade.clickOnBGPOverviewDashboard();
    await util.delay(3000);
    await verification.verifyIfElementIsPresent(bgpOverviewDB.RPKIStatusLocator, 'RPKI is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.reachabilityFieldLocator, 'Rechability Section is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.hijacksFieldLocator, 'Hijack Section is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.neighboringPeersLocator, 'Neighboring Peers Section is not present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.prefixesWithdrawnFieldLocator, 'Prefix Section is not present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.BGPChangesOriginsLocator, 'BGP Changes Section is not present');
})  

