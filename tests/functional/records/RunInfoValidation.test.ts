import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();


/*
   CP-21842 : DES: IP address is displayed as NA for IMAP, MQTT and NTP test type if the address is in IPV6 format
*/
test("VerifyIPAddressForTest  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let IMAPTestID = await data.getValueOfTheParameter('IMAPTestID');
    let MQTTTestID = await data.getValueOfTheParameter('MQTTTestID');
    let NTPTestID = await data.getValueOfTheParameter('NTPTestID');
    //enter test from source selector
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(IMAPTestID);
    await util.delay(3000);
    //validation for IMAP test
    await verification.verifyElementIsNotPresent(recordsPage.getIPAddressNAValue, 'showing NA for IP Address')
    //click pill delete 
    await recordsPage.clickOnPillDeleteButton();
    //click on source button
    await recordsPage.clickOnSourceButton();
    //search test
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(MQTTTestID);
    await util.delay(3000);
    //validation for MQTT test
    await verification.verifyElementIsNotPresent(recordsPage.getIPAddressNAValue, 'showing NA for IP Address')
    //click pill delete 
    await recordsPage.clickOnPillDeleteButton();
    //click on source button
    await recordsPage.clickOnSourceButton();
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(NTPTestID);
    await util.delay(3000);
    //validation for IMAP test
    await verification.verifyElementIsNotPresent(recordsPage.getIPAddressNAValue, 'showing NA for IP Address')


})

/*
    CP-21643 : 117271 DES Test URL Is updated incorrectly when we change a test from Source
*/
test("VerifyTestURLUpdate  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID1 = await data.getValueOfTheParameter('TransactionTest');
    let testID2 = await data.getValueOfTheParameter('webPingTestID');
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID1);
    await util.delay(3000);
    let pageURL1 = await baseTestUtil.getUrl();
    //validation for selected test
    await verification.verifySoftAssertTrue(pageURL1.includes(testID1), 'testId Is not present in url');
    //click pill delete 
    await recordsPage.clickOnPillDeleteButton();
    //click on source button
    await recordsPage.clickOnSourceButton();
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID2);
    await util.delay(3000);
    let pageURL2 = await baseTestUtil.getUrl();
    //validation for selected test
    await verification.verifySoftAssertTrue(pageURL2.includes(testID2), 'testId Is not present in url');


})

/*
    CP-21697 : 119321 DES Failed Verb is missing from the run info 
*/
test("VerifyFailedVerbInTransactionTest  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID = await data.getValueOfTheParameter('TransactionTestIDWithEnforceFailureAdvanceSetting');
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(testID);
    await util.delay(3000);
    //validation for error bar
    await verification.verifyIfElementIsPresent(recordsPage.failedVerb, 'failed verb error bar Is not present.');

})

/*
    CP-6949 : Run Info Validation in Records page
*/
test("VerifyRunInfoInRecordsPage  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let testID = await data.getValueOfTheParameter('webPingTestID');
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

