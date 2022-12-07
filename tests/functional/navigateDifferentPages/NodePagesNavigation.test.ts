import test from "@lib/BaseTest";

test("VerifyNodeMapLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,nodeMapPage, util}) => {
    await sideNavigationBar.navigateToMapFromNodeSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(nodeMapPage.mapContainerLocator, 'Map is not present');
    await nodeMapPage.clickOnFabricIconToOpenNodeList();
    await verification.verifyIfElementIsPresent(nodeMapPage.cityHeaderInNodeListLocator, 'Node List is not present');
    await verification.verifyIfElementIsPresent(nodeMapPage.nodeHeaderInNodeListLocator,'Node List is not present');
})

test("VerifyNodeGroupPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,nodeGroupPage, util}) => {
    await sideNavigationBar.navigateToGroupsFromNodeSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(nodeGroupPage.descriptionHeaderInTableLocator, 'Node Group Table Not Present');
    await verification.verifyIfElementIsPresent(nodeGroupPage.nodeCountHeaderInTableLocator, 'Node Group Table Not Present');
    await verification.verifyIfElementIsPresent(nodeGroupPage.nodeGroupIdHeaderInTableLocator, 'Node Group Table Not Present');
})

test("VerifyNodeListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,nodeListPage, util}) => {
    await sideNavigationBar.navigateToNodeFromNodeSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(nodeListPage.nodeNameHeaderInNodeListTableLocator, 'Node List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeListPage.runRateHeaderInNodeListPageLocator, 'Node List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeListPage.statusHeaderInNodeListPageLocator, 'Node List Table Not Present');
})

test("VerifyNodeInstancesListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,nodeInstancePage, util}) => {
    await sideNavigationBar.navigateToInstancesFromNodeSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(nodeInstancePage.hardwareHeaderHeaderInInstancesListLocator, 'Node Instance List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeInstancePage.instacesNameHeaderInInstanceListPageLocator, 'Node Instance List Table Not Present');
    await verification.verifyIfElementIsPresent(nodeInstancePage.statusHeaderInInstanceListLocator, 'Node Instance List Table Not Present');
})
