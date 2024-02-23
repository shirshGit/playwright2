import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
let data = new DataForEnv();


/*
 CP-12697 : Bug 125438: Control Center : Manipulating URL shows some random tests 
*/

test("ManipulatingURLShowsSomeRandomTest  @ProductionDefect@SyntheticControlCenter@ControlCenter", async ({ page, verification, syntheticTestDetailPage, synCCPage, util }) => {
  await synCCPage.LoginToCCPage();
  let testID = await data.getValueOfTheParameter('testID');
  //search and click created test
  await syntheticTestDetailPage.clickOnSearchedItemInCC(testID);
  //get current page url
  let getCurrentPageUrl = await synCCPage.getUrl();
  //as per testcase replacing test id with '--'
  let urlAfterManipulation = getCurrentPageUrl.replace(testID, '--');
  await util.delay(1000);
  //open the manipulated url
  await page.goto(urlAfterManipulation);
  await syntheticTestDetailPage.waitForElement(synCCPage.synDetailListLocator);
  await syntheticTestDetailPage.waitForElement(synCCPage.testsTreeSideSideNavLocator);
  //again fetch current page url
  let getCurrentPageUrlAfterManuipulation = await synCCPage.getUrl();
  let testListPageUrl = await data.getValueOfTheParameter('testListPageUrl');
  //validation
  await verification.verifySoftAssertTrue(getCurrentPageUrlAfterManuipulation === testListPageUrl, 'testList page url after manipulation is not matching.');

});





