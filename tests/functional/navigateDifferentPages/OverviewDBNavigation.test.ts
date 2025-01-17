import test from "@lib/BaseTest"
import { SideNavBar } from "@pageobjects/SideNavBar/SideNavigationBar";

/*
  CP-44294 : Verify Widgets in default overview dashboard page
*/
test("VerifyOverviewDashboardLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage, defaultDashboardPage, verification, util,sideNavigationBar}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to dashboard page by left nav
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(defaultDashboardPage.errorSectionOverviewDashboardLocator, 'Error Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.eventSectionOverviewDashboardLocator, 'Event Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.alertSectionOverviewDashboardLocator, 'Alert Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.nodeMapPerformanceOverviewLocator, 'Node Map Section is not present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.rumWidgetinOverviewDashboardLocator,'Rum Widget is not present');
    
})

/*
  CP-44295 : Verify Widgets in test overview dashboard page
*/
test("VerifyTestOverviewDashboardLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage, defaultDashboardPage, verification, util,testOverviewDashboard, sideNavigationBar}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
   //navigate to dashboard page by left nav
   await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await defaultDashboardPage.clickOnTab('Tests');
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(defaultDashboardPage.errorSectionOverviewDashboardLocator, 'Error Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.eventSectionOverviewDashboardLocator, 'Event Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.alertSectionOverviewDashboardLocator, 'Alert Section is not Present');
    await verification.verifyIfElementIsPresent(defaultDashboardPage.nodeMapPerformanceOverviewLocator, 'Node Map Section is not present');
    await verification.verifyIfElementIsPresent(testOverviewDashboard.testWidgetInTestOverviewDBLocator, 'Test tile widget is not present');
    await verification.verifyElementIsNotPresent(defaultDashboardPage.rumWidgetinOverviewDashboardLocator,'Rum Widget is present'); 
   
    
})  
/*
    CP-29418 : Verify User Landing in new Endpoint monitoring overview dashboard page
*/

test("VerifyEndpointOverviewDBLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage, defaultDashboardPage, verification, util,testOverviewDashboard, sideNavigationBar, endpointOverviewDB}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to dashboard page by left nav
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await defaultDashboardPage.clickOnEndpointdashboard();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    //validaton for page load
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstLocationWidgetLocator, 'Worst Endpont is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstAppHeaderLocator, 'Worst App Section is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.worstEndpointsHeaderLocator, 'Worst Endpoint Section is not Present');
    await verification.verifyIfElementIsPresent(endpointOverviewDB.endpointTestHeaderInEndpointWidgetLocator, 'Endpoint Tests Section is not present');
    
})  

/*
    CP-39997 : To Validate BGP Metric Cards RPKI Status, %Reachability, #Hijacks , #Neighboring Peers , # Prefix withdrawn in BGP Dashboard
*/
test("VerifyBGPOverviewDBLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage, defaultDashboardPage, verification, util,testOverviewDashboard, sideNavigationBar, bgpOverviewDB}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to dashboard page by left nav
    await sideNavigationBar.navigateToDashboardFromSideNavigation();
    await defaultDashboardPage.clickOnBGPdashboard();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(bgpOverviewDB.RPKIStatusLocator, 'RPKI is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.reachabilityFieldLocator, 'Rechability Section is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.hijacksFieldLocator, 'Hijack Section is not Present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.neighboringPeersLocator, 'Neighboring Peers Section is not present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.prefixesWithdrawnFieldLocator, 'Prefix Section is not present');
    await verification.verifyIfElementIsPresent(bgpOverviewDB.BGPChangesOriginsLocator, 'BGP Changes Section is not present');
    
})  

