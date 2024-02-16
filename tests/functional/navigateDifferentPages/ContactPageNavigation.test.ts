import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
     CP-44298 : Verify left navigation of Contacts Page
*/
test("VerifyContactLoads @PageNavigation@ProductionSmoke@Smoke", async ({ instantTestHistoryPage, sideNavigationBar, verification, contactsPage, util }) => {
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to contact page by left nav
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    //validation 
    await verification.verifyIfElementIsPresent(contactsPage.createButtonLocator, "create icon is not present");
    await verification.verifyIfElementIsPresent(contactsPage.firstNameLocator, "first name column is not present");
    await verification.verifyIfElementIsPresent(contactsPage.lastNameLocator, "last name is not present");
    await verification.verifyIfElementIsPresent(contactsPage.statusLocator, "status column is not present");
    await verification.verifyIfElementIsPresent(contactsPage.emailLocator, "email column is not present");
    await verification.verifyIfElementIsPresent(contactsPage.telephoneLocator, "telephone column is not present");
    await verification.verifyIfElementIsPresent(contactsPage.companyNameLocator, "company column is not present");
    await verification.verifyIfElementIsPresent(contactsPage.systemAccessLocator, "system access column is not present");
    
})

/*
     CP-44300 : Verify left navigation for Contacts group Page
*/
test("VerifyContactGroupLoads @PageNavigation@ProductionSmoke@Smoke", async ({ instantTestHistoryPage, sideNavigationBar, verification,contactGroupPage, util }) => {
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to contact page by left nav
    await sideNavigationBar.navigateToContactGroupPageFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    //validation 
    await verification.verifyIfElementIsPresent(contactGroupPage.createButtonLocator, "create icon is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.nameTextLocator, "name column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.divisionTextLocator, "division column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.statusTextLocator, "status column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.activeContactTextLocator, "active contact column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.inactiveContactTextLocator, "inactive contact column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.lastUpdatedTextTextLocator, "last updated column is not present");
    
 })