import test from "@lib/BaseTest"

test.skip("VerifySyntheticControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, synCCPage, util}) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(synCCPage.testsTreeSideSideNavLocator, 'Side Navigation Bar is not present');
})


test.skip("VerifyEndpointControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, endpointControlCenter, util}) => {
    await sideNavigationBar.navigateToEndpointCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointTreeSideSideNavLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsNavigationNavLinkLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsAppNavigationNavLinkLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsTestNavigationNavLinkLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsLocationNavigationNavLinkLocator, 'Side Navigation Bar is not present');
})

test.skip("VerifyRumControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, rumControCenter, util}) => {
    await sideNavigationBar.navigateToEndpointCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(rumControCenter.rumTreeSideSideNavLocator, 'Side Navigation Bar is not present');
})


test("VerifyLibraryControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification,libraryControlCenter, util}) => {
    await sideNavigationBar.navigateToLibraryCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryTreeSideSideNavLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryCredentialsNavigationNavLinkLocator, 'Credentials Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryFilesNavigationNavLinkLocator, 'File Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryTreeSideSideNavLocator, 'Library Navigation Bar is not present');
})