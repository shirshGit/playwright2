import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { SyntheticDetailPage } from "@pageobjects/ControlCenter/SyntheticDetailsPage";
import { expect, Page } from "@playwright/test";

let data = new DataForEnv();
/*
    CP-26410 : Verify user should see Change Log option on the test update properties
*/

test("VerifyUserShouldSeeChangeLogOptionOnTestPropertyPage @SyntheticControlCenter", async ({ baseTestUtil, syntheticTestDetailPage, page, sideNavigationBar, util, testUtility, synCCPage, verification }) => {
    let testID = await data.getValueOfTheParameter('testID');
    //navigate to CC page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //search and click created test
    await syntheticTestDetailPage.clickOnSearchedItemInCC(testID);
    //validation for change log option
    await verification.verifyIfElementIsPresent(syntheticTestDetailPage.changeLog, 'Change log is not present in test property blade.');


})


/*
    CP-35379 : Verify Changelog should capturing correctly for "All" and "Nodes" under Ru
*/

test("VerifyChangeLogShouldCaptureCorrectDataAfterUpdate @SyntheticControlCenter", async ({ baseTestUtil, syntheticTestDetailPage, syntheticDetailsPage, sideNavigationBar, util, testUtility, synCCPage, verification }) => {
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let testName = await testUtility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    let endDate = await util.getDate(2, 'mmm dd yyyy');
    let nodeName = await data.getValueOfTheParameter('node');
    var nodesName = new Array(nodeName);
    //navigate to cc
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createTestWithEndDate(prodForTestCreate, testName, url, endDate);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(500);
    //search and click created test
    await synCCPage.clickOnSearchedItemInCC(testName);
    //click on overide in target and schedule section
    await syntheticTestDetailPage.clickOverrideButtonForTargetAndSchedul();
    //add nodes in test
    await util.delay(3000);
    await syntheticTestDetailPage.addNodesInTest(nodesName);
    //click on sub set of node and enter value
    await syntheticTestDetailPage.clickOnSubSetOfNode();
    await syntheticTestDetailPage.clickOnSubsetOfNodeInputBox();
    await syntheticTestDetailPage.enterValueInSubsetOfNodeInputBox('2');
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(2000);
    //search and click test
    await synCCPage.clickOnSearchedItemInCC(testName);
    //click on change log
    await syntheticDetailsPage.clickOnChangeLogButton();
    await util.delay(6000);
    //validation for updated field
    verification.verifySoftAssertForTextOfAnElement(syntheticTestDetailPage.changeLogRunOn, 'Run On', 'run on is not present.');
    verification.verifySoftAssertForTextOfAnElement(syntheticTestDetailPage.changeLogRunOnValue, '2', 'run on value is not present.');
    //close Change Logs Page
    await syntheticTestDetailPage.closeChangeLogsPage();
    //close test property page
    await syntheticTestDetailPage.closePropertyPage();
    //delete test
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);



})

