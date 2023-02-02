import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
     CP-40695 : Verify smartboard option is displayed in left navigation 
*/
test("VerifySmartboardOptionIsDisplayedInLeftNavigation @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorSmartboard,syntheticSmartboardPage, util}) => {
    //verification for home icon
    await verification.verifyIfElementIsPresent(sideNavigationBar.sideNavHome,'home section icon is not present');
    //click on home Icon
    await sideNavigationBar.clickOnHomeIcon();
    //verification for smartboard option
    await verification.verifyIfElementIsPresent(sideNavigationBar.sideNavSmartboard,'smartboard option is not present');
    
})