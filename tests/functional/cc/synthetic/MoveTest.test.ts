import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { expect, Page } from "@playwright/test";

let data = new DataForEnv();
/*
    CP-16894 : Verify Settings should be Inherited
*/

test.skip("AfterCopyATestProductSettingsShouldBeInheritedInTest @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage,page, sideNavigationBar,util,testUtilility,synCCPage, verification}) => {
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForCopyTest = await data.getValueOfTheParameter('productForCoapyTest');
    let testName = await testUtilility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    clear_text(page)
})


