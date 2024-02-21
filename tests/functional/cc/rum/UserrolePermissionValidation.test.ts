import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";



/*
    CP-12790 : Bug 123222 Able to View RUM ,Test Template Options in Master create blade though we dont have permission
*/
test("VerifyManageRealUserAndTestTemplatesPermission  @ProductionDefect@RUM", async ({ baseTestUtil, contactsPage, contactDetailsPage, testUtility, sideNavigationBar, loginPage, synCCPage, util, userrolePage, syntheticDetailsPage, userroleDetailPage, page, verification }) => {
    let userroleNameForRum = await testUtility.getUserroleName();
    let data = new DataForEnv();
    let userrole = await data.getValueOfTheParameter('defaultUserrole');
    let email = await data.getValueOfTheParameter('automationContact');
    let password = await data.getValueOfTheParameter('password');
    var permissionForRum = ['Manage Real User', 'Manage Test Templates For Client'];
    //navigate to userrole page
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    //create userrole
    await userroleDetailPage.createUserrole(userroleNameForRum, permissionForRum);
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //change and apply system access
    await contactDetailsPage.selectGivenUserrole(userroleNameForRum);
    //logout
    await loginPage.logOutFromBrowser();
    //login with changed system access contact
    await loginPage.loginWithOtherContact(email, password);
    //navigate to contacts page
    await sideNavigationBar.navigateToTestTemplateFromSideNavigation();
    //click on new button
    await synCCPage.clickOnNewItemCreation();
    await util.delay(3000)
    //verification
    await verification.verifyElementIsNotPresent(syntheticDetailsPage.testFromMasterTestBladeLocator, "Able to see Tests in CC blade , even though dont have permission for that.");
    //close master test blade
    await synCCPage.closePropertyPage();
    //logout
    await loginPage.logOutFromBrowser();
    //login to browser
    await loginPage.loginToCP();
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //chnage system access
    await contactDetailsPage.selectGivenUserrole(userrole);
    await util.delay(3000);
    //navigate to UR page
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    // delete user role
    await userroleDetailPage.deleteItemFromTableContainerBar(userroleNameForRum);
})


/*
    CP-39578 : VerifyManageTestPermission_Bug_123222: DES:CC: Able to View RUM ,Test Template Options in Master create blade though we disabled manage permissions for Template and RUM
*/
test("VerifyManageTestPermission  @ProductionDefect@RUM", async ({ baseTestUtil, contactsPage, contactDetailsPage, testUtility, sideNavigationBar, loginPage, synCCPage, util, syntheticDetailsPage, syntheticTestDetailPage, userroleDetailPage, page, verification }) => {
    let userroleNameForSynthetic = await testUtility.getUserroleName();
    let data = new DataForEnv();
    let userrole = await data.getValueOfTheParameter('defaultUserrole');
    let email = await data.getValueOfTheParameter('automationContact');
    let password = await data.getValueOfTheParameter('password');
    var permissionForSynthetic = ['Manage Tests'];
    //navigate to userrole page
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    //create userrole
    await userroleDetailPage.createUserrole(userroleNameForSynthetic, permissionForSynthetic);
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
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
    await util.delay(10000);
    //verification
    await verification.verifyElementIsNotPresent(syntheticDetailsPage.rumFromMasterTestBladeLocator, "Able to see RUM in Master create blade , even though dont have permission for that.");
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
    await contactDetailsPage.selectGivenUserrole(userroleNameForSynthetic);
    await util.delay(1000);
    //logout
    await loginPage.logOutFromBrowser();
    //login with changed system access contact
    await loginPage.loginWithOtherContact(email, password);
    await page.reload();
    //navigate to cc
    await sideNavigationBar.navigateToRUMFromSideNavigation();
    await util.delay(2000);
    //click on new button
    await synCCPage.clickOnNewItemCreation();
    //verification
    await verification.verifyElementIsNotPresent(syntheticTestDetailPage.testFromMasterTestBladeLocator, "Able to see Tests in CC blade , even though dont have permission for that.");
    //close master test blade
    await synCCPage.closePropertyPage();
    //logout
    await loginPage.logOutFromBrowser();
    //login to browser
    await loginPage.loginToCP();
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    //search and click contact
    await contactsPage.clickOnFirstSearchedItemInContactPage(email);
    //chnage and apply system access
    await contactDetailsPage.selectGivenUserrole(userrole);
    await util.delay(3000);
    //navigate to UR page
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    // delete user role
    await userroleDetailPage.deleteItemFromTableContainerBar(userroleNameForSynthetic);
})