import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    CP-34475 : Verify "Client Level" should be selected by default under Division dropdown
*/

test("VerifyClientLevelShouldBeSelectedByDefaultUnderDivisionDropDown @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage,page, sideNavigationBar,util,testUtility,synCCPage, verification}) => {
    
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //click on division drop down
    await synCCPage.clickDivisionDropDown();
    //validation for division drop down 
    await verification.verifySoftAssertForTextOfAnElement(synCCPage.getItemSelectedInDivDropDown , 'Client Level',"Client Level is not selected in division drop down.");
    
})

/*
     CP-34477 : Verify reset the dropdown to be set to "Client Level" and disable the dropdown when user click other
*/

test("VerifyResetDivisionDropDownToBeSetClientLevel @SyntheticControlCenter", async({baseTestUtil,syntheticTestDetailPage, contactDetailsPage,loginPage, sideNavigationBar,util,testUtility,synCCPage,contactsPage, verification}) => {
    
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    let userroleName = await data.getValueOfTheParameter('userroleName3');
    let email = await data.getValueOfTheParameter('userrole9');
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
    //click on division drop down
    await synCCPage.clickDivisionDropDown();
    //select division
    await synCCPage.selectGivenDivisionFromDivisionDropDownInRoot('ToCreateFromAutomation');
    //click on rum
    await synCCPage.clickOnRumInRootBlade();
    await util.delay(2000);
    //validation for division drop down
    await verification.verifySoftAssertForTextOfAnElement(synCCPage.getItemSelectedInDivDropDown , 'Client Level',"Client Level is not selected in division drop down.");
    
})

/*
    CP-34474 : Verify Division dropdown is not present in the UI when client has no divisions 
*/

test("VerifyDivisionDropDownIsNotPresentInTheUIWhenClientHasNoDivisionAccess @SyntheticControlCenter", async({baseTestUtil,syntheticTestDetailPage, contactDetailsPage,loginPage, sideNavigationBar,util,testUtility,synCCPage,contactsPage, verification}) => {
    
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    let userroleName = await data.getValueOfTheParameter('userroleName4');
    let email = await data.getValueOfTheParameter('userrole9');
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
    await verification.verifyElementIsNotPresent(synCCPage.divLevelDropdown ,"Division Level drop down is present.");
    
})




