import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';



/*
    CP-14551 : Verify the 40x or 50x Mark error data
*/

test("Verify40X50XErrorMarkedAsPass  @ProductionDefectRecords@Records", async ({ sourceSelectorPage, util, syntheticRecordsPage, recordsPage, page, verification }) => {
    let data = new DataForEnv();
    let testWith40X50XError = await data.getValueOfTheParameter('webTest40X50XMarkedPass');
    //login to records page
    await recordsPage.LoginToRecordsPage();
    //search 40X50XTest test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testWith40X50XError);
    //validation for data
    await verification.verifyElementIsNotPresent(syntheticRecordsPage.errorMessageFieldForDatePoint,'Error Field is Present');
    let responseCode = await syntheticRecordsPage.getElementText(syntheticRecordsPage.errorCodeLocator)
    await verification.verifySoftAssertTrue(responseCode === '404', 'Response Code not matching')
 })