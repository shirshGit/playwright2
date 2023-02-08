import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
  CP-44302 : Verify navigation to User role Page
*/
test("VerifySettingsUserroleLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, userrolePage, util}) => {
    //navigate to userrole page
    await util.delay(5000);
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    //validation for create button
    await verification.verifyIfElementIsPresent(userrolePage.createIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(userrolePage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.divisionTextLocator,"division column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.activeContactTextLocator,"active contact column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.inactiveContactTextLocator,"inactive contact column is not present");
    
})

/*
    CP-44303 : Verify navigation to Divisions Page 
*/
test("VerifySettingsDivisionLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, divisionPage, util}) => {
    //navigate to userrole page
    await util.delay(5000);
    await sideNavigationBar.navigateToDivisionFromSideNavigation();
    //validation for create button
    await verification.verifyIfElementIsPresent(divisionPage.createIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(divisionPage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(divisionPage.statusIconLocator,"status column is not present");
    await verification.verifyIfElementIsPresent(divisionPage.lastUpdatedTextLocator,"last updated column is not present");
    
})

/*
    CP-44304 : Verify navigation to Schedules Page
*/
test("VerifySettingsSchedulesLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, schedulePage, util}) => {
    //navigate to userrole page
    await util.delay(5000);
    await sideNavigationBar.navigateToSchedulesPageFromSideNavigation();
    //validation for create button
    await verification.verifyIfElementIsPresent(schedulePage.newIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(schedulePage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.typeTextLocator,"type column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.statusTextLocator,"status column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.lastUpdatedColumnTextLocator,"last updated column is not present");
    
})

/*
    CP-44301 : Verify navigation to Indexes Page 
*/
test("VerifySettingsIndexesLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, indexPage, util}) => {
    //navigate to userrole page
    await util.delay(5000);
    await sideNavigationBar.navigateToIndexesPageFromSideNavigation();
    //validation 
    await verification.verifyIfElementIsPresent(indexPage.newIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(indexPage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(indexPage.idTextLocator,"id column is not present");
    await verification.verifyIfElementIsPresent(indexPage.descrptionTextLocator,"description column is not present");
    await verification.verifyIfElementIsPresent(indexPage.noOfTestTextLocator,"no. of test column is not present");
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})
