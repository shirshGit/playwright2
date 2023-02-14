import test from "@lib/BaseTest";

/*
    CP-44216 : Verify Node map navigation
*/
test("VerifyNodeMapLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,nodeMapPage, util}) => {
    await sideNavigationBar.navigateToMapFromNodeSideNavigation();
    await util.delay(2000);
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
test("VerifyNodeGroupPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,nodeGroupPage, util}) => {
    await sideNavigationBar.navigateToGroupsFromNodeSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(nodeGroupPage.descriptionHeaderInTableLocator, 'Node Group Table Not Present');
    await verification.verifyIfElementIsPresent(nodeGroupPage.nodeCountHeaderInTableLocator, 'Node Group Table Not Present');
    await verification.verifyIfElementIsPresent(nodeGroupPage.nodeGroupIdHeaderInTableLocator, 'Node Group Table Not Present');
   
})

/*
    CP-44218 : Verify Node group page navigation
*/
test("VerifyNodeListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,nodeListPage, util}) => {
    await sideNavigationBar.navigateToNodeFromNodeSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(nodeListPage.nodeNameHeaderInNodeListTableLocator, 'Node List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeListPage.runRateHeaderInNodeListPageLocator, 'Node List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeListPage.statusHeaderInNodeListPageLocator, 'Node List Table Not Present');
    
})

/*
    CP-44219 : Verify Instance list page navigation
*/
test("VerifyNodeInstancesListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,nodeInstancePage, util}) => {
    await sideNavigationBar.navigateToInstancesFromNodeSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(nodeInstancePage.hardwareHeaderHeaderInInstancesListLocator, 'Node Instance List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeInstancePage.instacesNameHeaderInInstanceListPageLocator, 'Node Instance List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeInstancePage.statusHeaderInInstanceListLocator, 'Node Instance List Table Not Present');
   
})
