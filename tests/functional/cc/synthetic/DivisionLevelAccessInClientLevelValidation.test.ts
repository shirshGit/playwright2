import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { utils } from "xlsx";


/*
    CP-34475 : Verify "Client Level" should be selected by default under Division dropdown
*/

test("VerifyClientLevelShouldBeSelectedByDefaultUnderDivisionDropDown @SyntheticControlCenter", async({synCCPage, verification,util}) => {
    //login to CC page[for saving login time we are directly login to CC page]
    await synCCPage.LoginToCCPage();
    await util.delay(3000);
    //validation for division drop down 
    await verification.verifyIfElementIsPresent(synCCPage.selectedItemLocatorInDivDropDown,'Division level DD is not present.');
    
})

/*
    CP-34477 : Verify reset the dropdown to be set to "Client Level" and disable the dropdown when user click other
*/

test("VerifyResetDivisionDropDownToBeSetClientLevel @SyntheticControlCenter@N1", async({contactDetailsPage,loginPage, sideNavigationBar,util,synCCPage,contactsPage, verification}) => {
    let data = new DataForEnv();
    await contactsPage.LoginToContactsPage();
    let userroleName = await data.getValueOfTheParameter('userRoleManageDivisionLevel');
    let email = await data.getValueOfTheParameter('automationContact');
    let password = await data.getValueOfTheParameter('password');
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //change and apply system access
    await contactDetailsPage.selectGivenUserrole(userroleName);
    //logout
    await loginPage.logOutFromBrowser();
    //login with changed system access contact
    await loginPage.loginWithOtherContact(email, password);
    await util.delay(4000);
    //navigate to CC
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await synCCPage.waitForElement(synCCPage.synDetailListLocator);
    await synCCPage.waitForElement(synCCPage.synNavigationTreeLocator);
    //click on division drop down
    await synCCPage.clickDivisionDropDown();
    //select division
    await synCCPage.selectGivenDivisionFromDivisionDropDownInRoot('ToCreateFromAutomation');
    await util.delay(2000);
    //click on rum
    await synCCPage.clickOnRumInRootBlade();
    await util.delay(2000);
    //validation for division drop down
    await verification.verifyIfElementIsPresent(synCCPage.commonLocator('Client Level') ,"Client Level is not selected in division drop down.");
    
})

/*
    CP-34474 : Verify Division dropdown is not present in the UI when client has no divisions 
*/

test("VerifyDivisionDropDownIsNotPresentInTheUIWhenClientHasNoDivisionAccess @SyntheticControlCenter", async({ contactDetailsPage,loginPage, sideNavigationBar,util,screenShotVerification,synCCPage,contactsPage, verification,page},testInfo) => {
    let data = new DataForEnv();
    let screenShotName = testInfo.title.split(" ")[0];
    //login to Contact page
    await contactsPage.LoginToContactsPage();
    let userroleName = await data.getValueOfTheParameter('userRoleDoNotHavePermissionForDivision');
    let email = await data.getValueOfTheParameter('automationContact');
    let password = await data.getValueOfTheParameter('password');
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //chnage and apply system access
    await contactDetailsPage.selectGivenUserrole(userroleName);
    //logout
    await loginPage.logOutFromBrowser();
    //login with changed system access contact
    await loginPage.loginWithOtherContact(email, password);
    await util.delay(3000);
    //navigate to CC
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //validation for division drop down
    await verification.verifyElementIsNotPresent(synCCPage.divLevelDropdownLocator ,"Division Level drop down is present.");
   
})




