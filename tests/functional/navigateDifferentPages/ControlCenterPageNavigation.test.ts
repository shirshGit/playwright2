import test from "@lib/BaseTest"

test("VerifySyntheticControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, synCCPage, util}) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(synCCPage.testsTreeSideSideNavLocator, 'Side Navigation Bar is not present');
})