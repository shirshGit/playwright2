import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

test.skip("VerifySettingsUserroleLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, userrolePage, util}) => {
    //navigate to userrole page
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    //validation for create button
    await verification.verifyIfElementIsPresent(userrolePage.createIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(userrolePage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.divisionTextLocator,"division column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.activeContactTextLocator,"active contact column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.inactiveContactTextLocator,"inactive contact column is not present");
   
})

test("VerifySettingsDivisionLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, divisionPage, util}) => {
    //navigate to userrole page
    await sideNavigationBar.navigateToDivisionFromSideNavigation();
    //validation for create button
    await verification.verifyIfElementIsPresent(divisionPage.createIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(divisionPage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(divisionPage.statusIconLocator,"status column is not present");
    await verification.verifyIfElementIsPresent(divisionPage.lastUpdatedTextLocator,"last updated column is not present");
    
})

test("VerifySettingsSchedulesLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, schedulePage, util}) => {
    //navigate to userrole page
    await sideNavigationBar.navigateToSchedulesPageFromSideNavigation();
    //validation for create button
    await verification.verifyIfElementIsPresent(schedulePage.newIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(schedulePage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.typeTextLocator,"type column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.statusTextLocator,"status column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.lastUpdatedColumnTextLocator,"last updated column is not present");
   
})
test("VerifySettingsIndexesLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, indexPage, util}) => {
    //navigate to userrole page
    await sideNavigationBar.navigateToIndexesPageFromSideNavigation();
    //validation 
    await verification.verifyIfElementIsPresent(indexPage.newIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(indexPage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(indexPage.idTextLocator,"id column is not present");
    await verification.verifyIfElementIsPresent(indexPage.descrptionTextLocator,"description column is not present");
    await verification.verifyIfElementIsPresent(indexPage.noOfTestTextLocator,"no. of test column is not present");
   
})
