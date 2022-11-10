import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { RecordsPage } from "@pageobjects/Records/RecordsPage";

let data = new DataForEnv();


/*
   CP-21842 : DES: IP address is displayed as NA for IMAP, MQTT and NTP test type if the address is in IPV6 format
*/
test("VerifyIPAddressForTest  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let IMAPTestID = await data.getValueOfTheParameter('IMAPTestID');
    let MQTTTestID = await data.getValueOfTheParameter('MQTTTestID');
    let NTPTestID = await data.getValueOfTheParameter('NTPTestID');
    //search IMAP test
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(IMAPTestID);
    await util.delay(3000);
    //validation for IMAP test
    await verification.verifyElementIsNotPresent(recordsPage.getIPAddressNAValue, 'showing NA for IP Address')
    //click pill delete 
    await recordsPage.clickOnPillDeleteButton();
    //click on source button
    await recordsPage.clickOnSourceButton();
    //search MQTT test
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(MQTTTestID);
    await util.delay(3000);
    //validation for MQTT test
    await verification.verifyElementIsNotPresent(recordsPage.getIPAddressNAValue, 'showing NA for IP Address')
    //click pill delete 
    await recordsPage.clickOnPillDeleteButton();
    //click on source button
    await recordsPage.clickOnSourceButton();
    //search NTP test
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(NTPTestID);
    await util.delay(3000);
    //validation for IMAP test
    await verification.verifyElementIsNotPresent(recordsPage.getIPAddressNAValue, 'showing NA for IP Address')


})

/*
    CP-21643 : 117271 DES Test URL Is updated incorrectly when we change a test from Source
*/
test("VerifyTestURLUpdate  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID1 = await data.getValueOfTheParameter('TransactionTest');
    let testID2 = await data.getValueOfTheParameter('webPingTestID');
    //search transaction test
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID1);
    await util.delay(3000);
    //get url
    let pageURL1 = await baseTestUtil.getUrl();
    //validation for selected test
    await verification.verifySoftAssertTrue(pageURL1.includes(testID1), 'testId Is not present in url');
    //click pill delete 
    await recordsPage.clickOnPillDeleteButton();
    //click on source button
    await recordsPage.clickOnSourceButton();
    //search web test
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID2);
    await util.delay(3000);
    //get url
    let pageURL2 = await baseTestUtil.getUrl();
    //validation for selected test
    await verification.verifySoftAssertTrue(pageURL2.includes(testID2), 'testId Is not present in url');


})

/*
    CP-21697 : 119321 DES Failed Verb is missing from the run info 
*/
test("VerifyFailedVerbInTransactionTest  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID = await data.getValueOfTheParameter('TransactionTestIDWithEnforceFailureAdvanceSetting');
    //search transaction test
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID);
    await util.delay(3000);
    //validation for failed verb error bar
    await verification.verifyIfElementIsPresent(recordsPage.failedVerb, 'failed verb error bar Is not present.');

})

/*
    CP-6949 : Run Info Validation in Records page
*/
test("VerifyRunInfoInRecordsPage  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID = await data.getValueOfTheParameter('webPingTestID');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID);
    await util.delay(3000);
    //validation for run info
    await verification.verifyIfElementIsPresent(recordsPage.getRunTime, 'run time is not present.');
    await verification.verifyIfElementIsPresent(recordsPage.getNode, ' node is not present.');
    await verification.verifyIfElementIsPresent(recordsPage.getNodeIP, 'nodeIP is not present.');
    await verification.verifyIfElementIsPresent(recordsPage.getMonitor, 'monitor is not present.');
    //click first data point
    await recordsPage.clickFirstDataPoint();
    await util.delay(3000);
    //validation for run info after clicking data point
    await verification.verifyIfElementIsPresent(recordsPage.getRunTime, 'run time is not present.');
    await verification.verifyIfElementIsPresent(recordsPage.getNode, ' node is not present.');
    await verification.verifyIfElementIsPresent(recordsPage.getNodeIP, 'nodeIP is not present.');
    await verification.verifyIfElementIsPresent(recordsPage.getMonitor, 'monitor is not present.');
   

})

/*
    CP-30549 : Verify user should able to click on source pill and navigate to properties blade in new tab
*/
test("VerifyUserShouldAbleToClickOnSourceBlade  @Records", async ({ baseTestUtil, sideNavigationBar,context, loginPage, util,sourceSelectorPage ,recordsPage, page, verification }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    //open any test
    let testID = await data.getValueOfTheParameter('webPingTestID');
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID);
    await util.delay(1000);
    //click on test in source blade and get new window
    let getNewPage = await recordsPage.getNewWindow(context,recordsPage.testInSourceSelector);
    let testPropertyPage = new RecordsPage(getNewPage);
    //fetch url of test property page
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/ControlCenter/Tests/Test/'+testID+'/Properties'), 'test property page is not opening after clicking on testName in records source blade');
    
})

