import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
  CP-44302 : Verify navigation to User role Page
*/
test("VerifySettingsUserroleLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, userrolePage, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to Userrole page by left nav
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    //validation 
    await verification.verifyIfElementIsPresent(userrolePage.createIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(userrolePage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.divisionTextLocator,"division column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.activeContactTextLocator,"active contact column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.inactiveContactTextLocator,"inactive contact column is not present");
    await verification.verifyIfElementIsPresent(userrolePage.nameTextLocator,"name text is not present");
    await verification.verifyIfElementIsPresent(userrolePage.divisionTextLocator,"division text is not present");
    await verification.verifyIfElementIsPresent(userrolePage.activeContactTextLocator,"active contact text is not present");
    await verification.verifyIfElementIsPresent(userrolePage.inactiveContactTextLocator,"inactive contact text is not present");
    
})

/*
    CP-44303 : Verify navigation to Divisions Page 
*/
test("VerifySettingsDivisionLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, divisionPage, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to division page by left nav
    await sideNavigationBar.navigateToDivisionFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    //validation 
    await verification.verifyIfElementIsPresent(divisionPage.createIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(divisionPage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(divisionPage.statusIconLocator,"status column is not present");
    await verification.verifyIfElementIsPresent(divisionPage.lastUpdatedTextLocator,"last updated column is not present");
    await verification.verifyIfElementIsPresent(divisionPage.nameTextLocator,"name text is not present");
    await verification.verifyIfElementIsPresent(divisionPage.statusIconLocator,"status text is not present");
    await verification.verifyIfElementIsPresent(divisionPage.lastUpdatedTextLocator,"last updated text is not present");
   
})

/*
    CP-44304 : Verify navigation to Schedules Page
*/
test("VerifySettingsSchedulesLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, schedulePage, util}) => {
    ///login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to schedule page by left nav
    await sideNavigationBar.navigateToSchedulesPageFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    //validation 
    await verification.verifyIfElementIsPresent(schedulePage.newIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(schedulePage.nameTextLocator,"name column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.typeTextLocator,"type column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.statusTextLocator,"status column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.lastUpdatedColumnTextLocator,"last updated column is not present");
    await verification.verifyIfElementIsPresent(schedulePage.nameTextLocator,"name text is not present");
    await verification.verifyIfElementIsPresent(schedulePage.typeTextLocator,"type text is not present");
    await verification.verifyIfElementIsPresent(schedulePage.statusTextLocator,"status text is not present");
    await verification.verifyIfElementIsPresent(schedulePage.lastUpdatedColumnTextLocator,"last updated text is not present");
    
})

/*
    CP-44301 : Verify navigation to Indexes Page 
*/
test("VerifySettingsIndexesLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, indexPage, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to index page by left nav
    await sideNavigationBar.navigateToIndexesPageFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    //validation 
    await verification.verifyIfElementIsPresent(indexPage.newIconLocator,"create icon is not present");
    await verification.verifyIfElementIsPresent(indexPage.nameTextLocator,"name text is not present");
    await verification.verifyIfElementIsPresent(indexPage.idTextLocator,"id text is not present");
    await verification.verifyIfElementIsPresent(indexPage.descrptionTextLocator,"description text is not present");
    await verification.verifyIfElementIsPresent(indexPage.noOfTestTextLocator,"no. of test text is not present");
    
})

/*
    
*/
test("VerifySettingsZoneLoads @PageNavigation@ProductionSmoke@Smoke", async({alertLogPage,sideNavigationBar, verification, zonePage, util}) => {
    //login to alerts page
    await alertLogPage.LoginToAlertsPage();
    //navigate to zone page by left nav
    await sideNavigationBar.navigateToZoneFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    //validation 
    await verification.verifyIfElementIsPresent(zonePage.zonesTableLocator,"zone table is not present");
    
})
