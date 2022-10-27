import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";




/*
   CP-14519 : Verify whether user is able to select the step if it is transaction test 
*/
test("VerifyUserIsAbleToSelectStep  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let TransactionTestID = await data.getValueOfTheParameter('transactionTestWithMultipleStepAndStepName');
    //enter test from source selector
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(TransactionTestID);
    await util.delay(3000);
    //get first step metric value
    let cardMetrics : string[] = ['# Wire Requests','Downloaded Bytes','Largest Contentful Paint (ms)','Cumulative Layout Shift'];
    let cardMetricsValueBeforeClickingDataPoint : string[] = await recordsPage.getCardMetricsData(cardMetrics);
    //click on second step
    await recordsPage.selectStepInTransactionTest('1');
    //get second step metrics value
    let cardMetricsValueAfterClickingDataPoint : string[] = await recordsPage.getCardMetricsData(cardMetrics);
    for (let index = 0; index < cardMetrics.length; index++) {
        const element1 = cardMetricsValueBeforeClickingDataPoint[index];
        const element2 = cardMetricsValueAfterClickingDataPoint[index];
        await verification.verifySoftAssertTrue(element1 !== element2,'failed');
        
    }
})

/*
   CP-21631 : 117043 DES- For a transaction test which has Special characters in Step Name
*/
test("VerifyStepsNameInTransactionTest  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let TransactionTestID = await data.getValueOfTheParameter('transactionTestWithMultipleStepAndStepName');
    //enter test from source selector
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(TransactionTestID);
    await util.delay(3000);
    let stepName : string[] = ['Step1#','Step2;','Step3&'];//[these step name already define in transaction test]
    //get step names
    let getStepName : string[] = await recordsPage.getStepName(stepName.length);
    //step names validation
    for (let index = 0; index < stepName.length; index++) {
        const element1 = stepName[index];
        const element2 = getStepName[index];
        await verification.verifySoftAssertTrue(element1 === element2,'Step name is not matching.');
        
    }
})

/*
   CP-21637 : 117112 Step index should reset when changing runs
*/
test("VerifyStepIndexWhenUserChangeRuns  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let TransactionTestID = await data.getValueOfTheParameter('transactionTestWithMultipleStepAndStepName');
    //enter test from source selector
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(TransactionTestID);
    await util.delay(3000);
    let firstStep = await recordsPage.getClassPropertyOfStepCheckBox(0);
    await verification.verifySoftAssertTrue(firstStep.includes('is-checked'), 'After selecting transaction test first step is not selected.');
    //clikc on second step
    await recordsPage.selectStepInTransactionTest('1');
    await util.delay(3000);
    //click data point
    await recordsPage.clickFirstDataPoint();
    await util.delay(4000);
    let firstStepAfterClickingDataPoint = await recordsPage.getClassPropertyOfStepCheckBox(0);
    await verification.verifySoftAssertTrue(firstStepAfterClickingDataPoint.includes('is-checked'), 'After clicking on data point in transaction test, first step is not selected.');
    
})

/*
   CP-21638 : 117138 DES StepName is displayed as blank when we don't set the step Name in Transaction Test 
*/
test("VerifyStepNameDoesNotDisplayAsBlank  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let TransactionTestID = await data.getValueOfTheParameter('transactionTestWithMultipleStepWithoutStepName');
    //enter test from source selector
    await sourceSelectorPage.clickOnFirstSearchedItemInSelectorPage(TransactionTestID);
    await util.delay(3000);
    //steps name validation
    let getStepName : string[] = await recordsPage.getStepName(3);
    await verification.verifySoftAssertTrue(getStepName.length>0, 'Not able to see step name in transaction test.');
    
    
})