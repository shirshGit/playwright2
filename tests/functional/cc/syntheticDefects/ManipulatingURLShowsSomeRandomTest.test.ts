import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
let data = new DataForEnv();


test.beforeEach(async ({ baseTestUtil }) => {
});

/*
 CP-12697 : Bug 125438: Control Center : Manipulating URL shows some random tests and left navigation goes to Endpoints
*/

test("ManipulatingURLShowsSomeRandomTest  @ProductionDefect@SyntheticControlCenter", async ({ page,verification, syntheticTestDetailPage, sideNavigationBar, testUtilility, util, baseTestUtil }) => {

    let testID = await data.getValueOfTheParameter('testID');
    //navigate to CC page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //search and click created test
    await syntheticTestDetailPage.clickOnSearchedItemInCC(testID);
    //get current page url
    let getCurrentPageUrl = await baseTestUtil.getUrl();
    //as per testcase replacing test id with '--'
    let urlAfterManipulation = getCurrentPageUrl.replace(testID,'--');
    await util.delay(1000);
    //open the manipulated url
    await page.goto(urlAfterManipulation);
    //again fetch current page url
    let getCurrentPageUrlAfterManuipulation = await baseTestUtil.getUrl();
    let testListPageUrl = await data.getValueOfTheParameter('testListPageUrl');
    //validation
    await verification.verifySoftAssertTrue(getCurrentPageUrlAfterManuipulation === testListPageUrl, 'testList page url after manipulation is not matching.');
    
  });

 



