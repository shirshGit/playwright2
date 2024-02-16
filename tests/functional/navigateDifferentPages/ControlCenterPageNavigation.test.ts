import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
    CP-44179 : Verify Synthetic test tree side navigation
*/
test("VerifySyntheticControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({instantTestHistoryPage,sideNavigationBar, verification, synCCPage, util}) => {
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to cc by left nav
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(synCCPage.testsTreeSideSideNavLocator, 'Side Navigation Bar is not present');
   
})

/*
    CP-16027 : Verify items count updated for Endpoint data on the left panel
*/
test("VerifyEndpointControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({instantTestHistoryPage,sideNavigationBar, verification, endpointControlCenter,synCCPage, util}) => {
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to cc endpoint by left nav
    await sideNavigationBar.navigateToEndpointCCFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    //validation for component
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointTreeSideSideNavLocator, 'endpoint navigation tree is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsNavigationNavLinkLocator, 'endpoint is side Navigation tree is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsAppNavigationNavLinkLocator, 'app in side Navigation tree is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsTestNavigationNavLinkLocator, 'test in side Navigation tree is not present');
    await verification.verifyIfElementIsPresent(endpointControlCenter.endpointsLocationNavigationNavLinkLocator, 'location endpoint is side Navigation tree is not present');
    
})

/*
    CP-44180 : Verify RUM tree side navigation
*/
test("VerifyRumControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({instantTestHistoryPage,sideNavigationBar, verification, rumControCenter, util,synCCPage}) => {
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to cc rum page by left nav
    await sideNavigationBar.navigateToRUMFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(rumControCenter.rumListLocator, 'Rum list is not present');
    
})

/*
    CP-44181 : Verify library section through side navigation bar
*/
test("VerifyLibraryControlCenterLoads @PageNavigation@ProductionSmoke@Smoke", async({instantTestHistoryPage,sideNavigationBar, verification,libraryControlCenter, util,synCCPage}) => {
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to library page by left nav
    await sideNavigationBar.navigateToLibraryCCFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryTreeSideSideNavLocator, 'library tree in Side Navigation tree nav is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryCredentialsNavigationNavLinkLocator, 'Credentials in side Navigation tree nav is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryFilesNavigationNavLinkLocator, 'File Navigation in side tree nav is not present');
    await verification.verifyIfElementIsPresent(libraryControlCenter.libraryASNsNavigationNavLinkLocator, 'ASN link Navigation in side tree nav not present');
    
})