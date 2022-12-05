import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

test("VerifyContactLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, contactsPage, util }) => {
    //navigate to contacts page
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    await util.delay(2000);
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

test("VerifyContactGroupLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification,contactGroupPage, util }) => {
    //navigate to contacts page
    await sideNavigationBar.navigateToContactGroupPageFromSideNavigation();
    await util.delay(2000);
    //validation 
    await verification.verifyIfElementIsPresent(contactGroupPage.createButtonLocator, "create icon is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.nameTextLocator, "name column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.divisionTextLocator, "division column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.statusTextLocator, "status column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.activeContactTextLocator, "active contact column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.inactiveContactTextLocator, "inactive contact column is not present");
    await verification.verifyIfElementIsPresent(contactGroupPage.lastUpdatedTextTextLocator, "last updated column is not present");
 })