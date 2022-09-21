import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { SyntheticDetailPage } from "@pageobjects/ControlCenter/SyntheticDetailsPage";

let data = new DataForEnv();

/*
    CP-12790 : Bug 123222 Able to View RUM ,Test Template Options in Master create blade though
*/


test("ABleToViewRUMTestTemplateOptionInMasterCreateBlade  @ProductionDefect@SyntheticControlCenter", async ({ baseTestUtil, contactDetailsPage, sideNavigationBar, loginPage, synCCPage, util, page, verification }) => {
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    let userroleName = await data.getValueOfTheParameter('userroleName');
    let userroleName2 = await data.getValueOfTheParameter('userroleName2');
    let email = await data.getValueOfTheParameter('userrole9');
    let password = await data.getValueOfTheParameter('password');
    //search and click contact
    await contactDetailsPage.clickOnFirstSearchedItemInContactPage(email);
    //chnage and apply system access
    await contactDetailsPage.selectGivenUserrole(userroleName);
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
    await contactDetailsPage.clickOnFirstSearchedItemInContactPage(email);
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