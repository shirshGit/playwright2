import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
    CP-44179 : Verify Synthetic test tree side navigation
*/
test("VerifySyntheticControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, synCCPage, util}) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(synCCPage.testsTreeSideSideNavLocator, 'Side Navigation Bar is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})

/*
    CP-16027 : Verify items count updated for Endpoint data on the left panel
*/
test("VerifyEndpointControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, endpointControlCenter, util}) => {
    await sideNavigationBar.navigateToEndpointCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointTreeSideSideNavLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsNavigationNavLinkLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsAppNavigationNavLinkLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsTestNavigationNavLinkLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsLocationNavigationNavLinkLocator, 'Side Navigation Bar is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})

/*
    CP-44180 : Verify RUM tree side navigation
*/
test("VerifyRumControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, rumControCenter, util}) => {
    await sideNavigationBar.navigateToEndpointCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(rumControCenter.rumTreeSideSideNavLocator, 'Side Navigation Bar is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})

/*
    CP-44181 : Verify library section through side navigation bar
*/
test("VerifyLibraryControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification,libraryControlCenter, util}) => {
    await sideNavigationBar.navigateToLibraryCCFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryTreeSideSideNavLocator, 'Side Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryCredentialsNavigationNavLinkLocator, 'Credentials Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryFilesNavigationNavLinkLocator, 'File Navigation Bar is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryASNsNavigationNavLinkLocator, 'ASN link is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})