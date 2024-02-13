import test from "@lib/BaseTest";

/*
    CP-44216 : Verify Node map navigation
*/
test("VerifyNodeMapLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage, sideNavigationBar, verification,nodeMapPage, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to instant test history page by side navigation
    await sideNavigationBar.navigateToMapFromNodeSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(nodeMapPage.mapContainerLocator, 'Map is not present');
    await nodeMapPage.clickOnFabricIconToOpenNodeList();
    await verification.verifyIfElementIsPresent(nodeMapPage.cityHeaderInNodeListLocator, 'Node List is not present');
    await verification.verifyIfElementIsPresent(nodeMapPage.nodeHeaderInNodeListLocator,'Node List is not present');
})

/*
    CP-44217 : Verify Node list page navigation
*/
test("VerifyNodeGroupPageLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage, sideNavigationBar, verification,nodeGroupPage, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to instant test history page by side navigation
    await sideNavigationBar.navigateToGroupsFromNodeSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(nodeGroupPage.descriptionHeaderInTableLocator, 'Node Group Table Not Present');
    await verification.verifyIfElementIsPresent(nodeGroupPage.nodeCountHeaderInTableLocator, 'Node Group Table Not Present');
    await verification.verifyIfElementIsPresent(nodeGroupPage.nodeGroupIdHeaderInTableLocator, 'Node Group Table Not Present');
   
})

/*
    CP-44218 : Verify Node group page navigation
*/
test("VerifyNodeListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage, sideNavigationBar, verification,nodeListPage, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to instant test history page by side navigation
    await sideNavigationBar.navigateToNodeFromNodeSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(nodeListPage.nodeNameHeaderInNodeListTableLocator, 'Node List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeListPage.runRateHeaderInNodeListPageLocator, 'Node List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeListPage.statusHeaderInNodeListPageLocator, 'Node List Table Not Present');
    
})

/*
    CP-44219 : Verify Instance list page navigation
*/
test("VerifyNodeInstancesListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage, sideNavigationBar, verification,nodeInstancePage, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to instant test history page by side navigation
    await sideNavigationBar.navigateToInstancesFromNodeSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(nodeInstancePage.hardwareHeaderHeaderInInstancesListLocator, 'Node Instance List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeInstancePage.instacesNameHeaderInInstanceListPageLocator, 'Node Instance List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeInstancePage.statusHeaderInInstanceListLocator, 'Node Instance List Table Not Present');
   
})
