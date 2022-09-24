import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();

/*
    CP-12790 : Bug 123222 Able to View RUM ,Test Template Options in Master create blade though we dont have permission
*/


test("AbleToViewRUMTestTemplateOptionInMasterCreateBlade  @ProductionDefect@SyntheticControlCenter", async ({ contactsPage, contactDetailsPage, sideNavigationBar, loginPage, synCCPage, util, page, verification }) => {
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    let userroleName1 = await data.getValueOfTheParameter('userroleName1');
    let userroleName2 = await data.getValueOfTheParameter('userroleName2');
    let email = await data.getValueOfTheParameter('userrole9');
    let password = await data.getValueOfTheParameter('password');
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //chnage and apply system access
    await contactDetailsPage.selectGivenUserrole(userroleName1);
    //logout
    await loginPage.logOutFromBrowser();
    //login with changed system access contact
    await loginPage.loginWithOtherContact(email, password);
    await util.delay(3000);
    //navigate to CC
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //click on +new button
    await synCCPage.clickOnNewItemCreation();
    //verification
    await verification.verifyElementIsNotPresent(synCCPage.rumFromMasterTestBlade, "Able to see RUM in Master create blade , even though dont have permission for that.");
    //close master test blade
    await synCCPage.closeMasterTestsBlade();
    //logout
    await loginPage.logOutFromBrowser();
    //login
    await loginPage.loginToCP();
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //change and apply system access
    await contactDetailsPage.selectGivenUserrole(userroleName2);
    //logout
    await loginPage.logOutFromBrowser();
    //login with changed system access contact
    await loginPage.loginWithOtherContact(email, password);
    await page.reload();
    await util.delay(10000);
    //navigate to cc
    await sideNavigationBar.navigateToRUMFromSideNavigation();
    //click on new button
    await synCCPage.clickOnNewItemCreation();
    //verification
    await verification.verifyElementIsNotPresent(synCCPage.testFromMasterTestBlade, "Able to see Tests in CC blade , even though dont have permission for that.");


})