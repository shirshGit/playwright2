import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    CP-34475 : Verify "Client Level" should be selected by default under Division dropdown
*/

test("VerifyClientLevelShouldBeSelectedByDefaultUnderDivisionDropDown @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage,page, sideNavigationBar,util,testUtilility,synCCPage, verification}) => {
    
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //click on division drop down
    await synCCPage.clickDivisionDropDown();
    //validation for division drop down 
    await verification.verifySoftAssertForTextOfAnElement(synCCPage.getItemSelectedInDivDropDown , 'Client Level',"Client Level is not selected in division drop down.");
    
})



