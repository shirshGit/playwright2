import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { TestUtility } from "@util/TestUtility";

let data = new DataForEnv();

/*
    CP-12790 : Bug 123222 Able to View RUM ,Test Template Options in Master create blade though we dont have permission
*/




test("AbleToViewRUMTestTemplateOptionInMasterCreateBlade  @ProductionDefect@SyntheticControlCenter", async ({ contactsPage, contactDetailsPage,testUtility, sideNavigationBar, loginPage, synCCPage, util,userrolePage,syntheticTestDetailPage, userroleDetailPage, page, verification }) => {
    let userroleNameForSynthetic = await testUtility.getUserroleName();
    let userroleNameForrum = await testUtility.getUserroleName();
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    var permissionForSynthetic = ['Manage Tests','Manage Test Templates For Client'];
    var permissionForRum = ['Manage Real User','Manage Test Templates For Client'];
    await userroleDetailPage.createUserrole(userroleNameForSynthetic,permissionForSynthetic);
    await userroleDetailPage.createUserrole(userroleNameForrum,permissionForRum);
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    // let userroleName1 = await data.getValueOfTheParameter('userroleName1');
    // let userroleName2 = await data.getValueOfTheParameter('userroleName2');
    let email = await data.getValueOfTheParameter('userrole9');
    let password = await data.getValueOfTheParameter('password');
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //chnage and apply system access
    await contactDetailsPage.selectGivenUserrole(userroleNameForSynthetic);
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
    await verification.verifyElementIsNotPresent(syntheticTestDetailPage.rumFromMasterTestBlade, "Able to see RUM in Master create blade , even though dont have permission for that.");
    //close master test blade
    await synCCPage.closePropertyPage();
    //logout
    await loginPage.logOutFromBrowser();
    //login
    await loginPage.loginToCP();
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //change and apply system access
    await contactDetailsPage.selectGivenUserrole(userroleNameForrum);
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
    await verification.verifyElementIsNotPresent(syntheticTestDetailPage.testFromMasterTestBlade, "Able to see Tests in CC blade , even though dont have permission for that.");


})