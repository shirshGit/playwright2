import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
    CP-14551 : Verify the 40x or 50x Mark error data
*/

test("Verify40X50XErrorMarkedAsPass  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, sourceSelectorPage, util, syntheticRecordsPage, recordsPage, page, verification }) => {
    let data = new DataForEnv();
    let testWith40X50XError = await data.getValueOfTheParameter('webTest40X50XMarkedPass');
    //navigate to CC page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    //search 40X50XTest test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testWith40X50XError);
    await util.delay(3000);
    //validation for data

    await verification.verifyElementIsNotPresent(syntheticRecordsPage.errorMessageFieldForDatePoint,'Error Field is Present')

    await verification.verifySoftAssertForTextOfAnElement(recordsPage.responsecodeValueInGaantChart, '404', 'Response Code not matching')
 })