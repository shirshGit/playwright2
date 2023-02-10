import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { ExplorerPage } from "@pageobjects/Explorer/ExplorerPage";
import { SyntheticRecordsPage } from "@pageobjects/Records/SyntheticRecordsPage";
import { SyntheticSmartboardPage } from "@pageobjects/Smartboard/SyntheticSmartboardPage";


/*
    CP-44574 : Scenario: Verify Test properties open up on overview dashboard 
*/
test("VerifyTestPropertiesPageOpenInOnOVD @SyntheticControlCenter", async ({ baseTestUtil, syntheticTestDetailPage, page, defaultDashboardPage, util, testUtility, testOverviewDashboard, verification }) => {
    //get tile wiget test name
    let testName = await defaultDashboardPage.getTestNameFromTestTable(1);
    //click on test widget first row three dot menu
    await testOverviewDashboard.hoverAndClickOnTestWidgetThreeDotMenu(1, 'Properties');
    await util.delay(4000);
    //verify test property page
    await verification.verifyIfElementIsPresent(testOverviewDashboard.webTestPropertyTextLocator, 'test property page is not');
    //fetch test name in properties page
    let testNameInPropertiesPage = await testOverviewDashboard.getPropertiesPageTestName();
    //validation for test name
    await verification.verifySoftAssertTrue(testName === testNameInPropertiesPage, "test name is not matching");
    
})


/*
    CP-44575 : Scenario: Verify Test properties open up on Test overview dashboard 
*/
test("VerifyTestPropertiesPageOpenInTestOVD @SyntheticControlCenter", async ({ baseTestUtil, syntheticTestDetailPage, page, defaultDashboardPage, util, testUtility, testOverviewDashboard, verification }) => {
    await util.delay(2000);
    //click on test overview tab
    await defaultDashboardPage.clickOnTab('Tests');
    //get tile wiget test name
    let testName = await testOverviewDashboard.getTileWidgetTestName(1);
    //click on test widget first row three dot menu
    await testOverviewDashboard.hoverOnTileWidgetTestName(1);
    //click on properties option
    await testOverviewDashboard.clickOnTileWidgetOptions('Properties');
    await util.delay(4000);
    //verify test property page
    await verification.verifyIfElementIsPresent(testOverviewDashboard.webTestPropertyTextLocator, 'test property page is not');
    //fetch test name in properties page
    let testNameInPropertiesPage = await testOverviewDashboard.getPropertiesPageTestName();
    //validation for test name
    await verification.verifySoftAssertTrue(testName === testNameInPropertiesPage, "test name is not matching");
    
})

/*
    CP-44576 : Scenario: Verify Test properties open up from Tests Smartboard page 
*/
test("VerifyTestPropertiesPageOpenFromTestsSB @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, context, sourceSelectorSmartboard, util, verification, syntheticSmartboardPage }) => {
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestId');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(testID);
    await util.delay(3000);
    //click on test in source blade and get new window
    let getNewPage = await syntheticSmartboardPage.getNewWindow(context, syntheticSmartboardPage.testInSourceSelectorLocator);
    let testPropertyPage = new SyntheticSmartboardPage(getNewPage);
    await util.delay(4000);
    //fetch url of test property page
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/ControlCenter/Tests/Test/' + testID + '/Properties'), 'test property page is not opening after clicking on testName in records source blade');
    
})

/*
    CP-44577 : Scenario: Verify Test properties open up from Explorer page
*/
test("VerifyTestPropertiesPageOpenFromExplorer @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, context, explorerPage, util, verification, sourceSelectorExplorer }) => {
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestId');
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    await util.delay(2000);
    //select test
    await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(testID);
    await util.delay(3000);
    //click on test in source blade and get new window
    let getNewPage = await explorerPage.getNewWindow(context, explorerPage.testInSourceSelectorLocator);
    let testPropertyPage = new ExplorerPage(getNewPage);
    await util.delay(4000);
    //fetch url of test property page
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/ControlCenter/Tests/Test/' + testID + '/Properties'), 'test property page is not opening after clicking on testName in records source blade');
    
})

/*
    CP-44578 : Scenario: Verify Test properties open up from Records page 
*/
test("VerifyTestPropertiesPageOpenFromRecordsPage @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, context, sourceSelectorPage, util, verification, syntheticRecordsPage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('webPingTestID');
    //open any test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(1000);
    //click on test in source blade and get new window
    let getNewPage = await syntheticRecordsPage.getNewWindow(context, syntheticRecordsPage.testInSourceSelectorLocator);
    let testPropertyPage = new SyntheticRecordsPage(getNewPage);
    //fetch url of test property page
    await util.delay(4000);
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/ControlCenter/Tests/Test/' + testID + '/Properties'), 'test property page is not opening after clicking on testName in records source blade');
    
})


/*
    CP-44582 : Scenario: Verify App properties open up from Explorer page 
*/
test("VerifyAppPropertiesPageOpenFromExplorerPage @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, context, sourceSelectorExplorer, util, verification, rumRecordsPage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    let data = new DataForEnv();
    let rumAppId = await data.getValueOfTheParameter('rumAppId');
    //click on app tab
    await sourceSelectorExplorer.clickOnMyAppTab();
    //open any app
    await sourceSelectorExplorer.clickOnFirstSearchAppInSelectorPage(rumAppId);
    await util.delay(1000);
    //click on app in source blade and get new window
    let getNewPage = await rumRecordsPage.getNewWindow(context, rumRecordsPage.testInSourceSelectorLocator);
    let testPropertyPage = new SyntheticRecordsPage(getNewPage);
    //fetch url of app property page
    await util.delay(4000);
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for app properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/ControlCenter/Rum/Site/' + rumAppId + '/Properties'), 'test property page is not opening after clicking on testName in records source blade');
   
})

/*
    CP-44581 : Scenario: Verify App properties open up from Records page 
*/
test("VerifyAppPropertiesPageOpenFromRecordsPage @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, context, sourceSelectorPage, util, verification, rumRecordsPage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let rumAppId = await data.getValueOfTheParameter('rumAppId');
    //click on app tab
    await sourceSelectorPage.clickOnMyAppTab();
    //open any app
    await sourceSelectorPage.clickOnFirstSearchedAPPInSelectorPage(rumAppId);
    await util.delay(1000);
    //click on app in source blade and get new window
    let getNewPage = await rumRecordsPage.getNewWindow(context, rumRecordsPage.appInSourceSelectorLocator);
    let testPropertyPage = new SyntheticRecordsPage(getNewPage);
    //fetch url of app property page
    await util.delay(4000);
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for app properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/ControlCenter/Rum/Site/' + rumAppId + '/Properties'), 'test property page is not opening after clicking on testName in records source blade');
    
})

/*
    CP-39364 : Verify Navigation to different page should work correctly from 3 dot menu
*/
test("VerifyNavigationToDifferentPageFromThreeDotMenu @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, syntheticTestDetailPage, util, verification, context, synCCPage, syntheticSmartboardPage, explorerSyntheticDetails, explorerPage, controlCenterRecords }) => {
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestId');
    //navigate to CC page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(3000);
    //1.Smartboard navigation from three dot menu
    await syntheticTestDetailPage.navigateFromThreeDotMenu(testID,'Smartboard');
    await util.delay(3000);
    let getSBPageURL = await synCCPage.getUrl();
    //validation for smartboard page
    await verification.verifySoftAssertTrue(getSBPageURL.includes('Smartboard/Test?ti=' + testID ), 'smartboard page is not opening after clicking on three dot manu smartboard button');
    //validation for last 6 hour time frame selected
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.lastSixHourTimeFrame,'');
    

    //navigate to CC page
    await util.delay(2000);
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(4000);
    //2.Performance page navigation from three dot menu
    await syntheticTestDetailPage.navigateFromThreeDotMenu(testID, 'Performance');
    await util.delay(3000);
    let getPageURL = await synCCPage.getUrl();
    //validation for explorer page and line viz
    await verification.verifySoftAssertTrue(getPageURL.includes('/Explorer/?sIds=[' + testID), 'Explorer page is not opening after clicking on three dot manu performance button');
    await verification.verifySoftAssertTrue(getPageURL.includes('viz=1'), 'performace viz is not set after clicking on performace button fron three dot menu');
    //validation for last 6 hour time frame selected
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.last24HourTimeFrameLocator, 'last 24 hour is not selected as default time frame');
    

    //navigate to CC page
    await util.delay(2000);
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(4000);
    //3.Scatterplot page navigation from three dot menu
    await syntheticTestDetailPage.navigateFromThreeDotMenu(testID, 'Scatterplot');
    await util.delay(3000);
    let getScatterplotPageURL = await synCCPage.getUrl();
    //validation for explorer page and scatterplot viz
    await verification.verifySoftAssertTrue(getScatterplotPageURL.includes('/Explorer/?sIds=[' + testID), 'Explorer page is not opening after clicking on three dot manu Scatterplot button');
    await verification.verifySoftAssertTrue(getScatterplotPageURL.includes('viz=3'), 'scatterplot viz is not set after clicking on scatterplot button fron three dot menu');
    //validation for last 6 hour time frame selected
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.last24HourTimeFrameLocator, 'last 24 hour is not selected as default time frame');
    

    //navigate to CC page
    await util.delay(2000);
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(4000);
    //4.Explorer page navigation from three dot menu
    await syntheticTestDetailPage.navigateFromThreeDotMenu(testID, 'Statistical');
    await util.delay(3000);
    let getStatisticalPageURL = await synCCPage.getUrl();
    //validation for explorer page and scatterplot viz
    await verification.verifySoftAssertTrue(getStatisticalPageURL.includes('/Explorer/?sIds=[' + testID), 'Explorer page is not opening after clicking on three dot manu Statistical button');
    await verification.verifySoftAssertTrue(getStatisticalPageURL.includes('viz=1'), 'Statistical viz is not set after clicking on Statistical button fron three dot menu');
    //validation for last 6 hour time frame selected,Test metric display for 95th Test Time (ms),Mdn Test Time (ms) and GM Test Time (ms)
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.last24HourTimeFrameLocator, 'last 24 hour is not selected as default time frame');
    //click on summary tab
    await util.delay(3000);
    await explorerPage.clickOnSummaryTab();
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.summaryTabMetricsLocator('95th. Test Time (ms)'), '95th. Test Time (ms) is not selected as default metrics');
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.summaryTabMetricsLocator('Mdn. Test Time (ms)'), 'Mdn. Test Time (ms) is not selected as metrics');
    await verification.verifyIfElementIsPresent(explorerSyntheticDetails.summaryTabMetricsLocator('GM. Test Time (ms)'), 'GM. Test Time (ms) is not selected as metrics');
    
    //navigate to CC page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await util.delay(3000);
    //5.Records navigation from three dot menu
    await syntheticTestDetailPage.navigateFromThreeDotMenu(testID, 'Records');
    await util.delay(3000);
    let startTime = parseInt(await controlCenterRecords.getStartGraphTime())
    let endTime = parseInt(await controlCenterRecords.getlastGraphTime())
    await verification.verifySoftAssertTrue(endTime - startTime === 3, 'time difference is not equal to 3hr.')
    
})


/*
    CP-44585 : Scenario: Verify Test properties open up from explorer's error table 
*/
test("VerifyTestPropertyOpenUpFromExplorerErrorTable @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, context, sourceSelectorExplorer, util, verification, explorerPage }) => {
    //navigate to explorer page
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    let data = new DataForEnv();
    let testId = await data.getValueOfTheParameter('transactionTest');
    //select test
    await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(testId);
    await util.delay(3000);
    //click on error tab
    await explorerPage.clickOnErrorTab();
    //click on test in source blade and get new window
    let getNewPage = await explorerPage.getNewWindow(context, explorerPage.errorTabFirstRowTestName);
    let testPropertyPage = new ExplorerPage(getNewPage);
    await util.delay(4000);
    //fetch url of test property page
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/ControlCenter/Tests/Test/' + testId + '/Properties'), 'test property page is not opening after clicking on testName in error tab first row in explorer');
   
})

/*
    CP-44579 : Scenario: Verify Test properties open up from Tests Alert log
*/
test("VerifyTestPropertyOpenUpFromTestsAlertsLog @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, context, sourceSelectorExplorer, util, verification, alertLogPage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    //click hover first test three dot menu
    await alertLogPage.hoverOnThreeDotMenu(1);
    //click on test in source blade and get new window
    let getNewPage = await alertLogPage.getNewWindow(context,await alertLogPage.threeDotMenuItemLocator('Properties'));
    let testPropertyPage = new ExplorerPage(getNewPage);
    //fetch url of test property page
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/ControlCenter/Tests/Test/'), 'test property page is not opening after clicking on three dot menu properties option');
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/Properties'), 'test property page is not opening after clicking on three dot menu properties option');
    
})


/*
    CP-44580 : Scenario: Verify App properties open up from RUM Alert log
*/
test("VerifyRumPropertyOpenUpFromRumAlertsLog @SyntheticControlCenter", async ({ baseTestUtil, sideNavigationBar, page, context, sourceSelectorExplorer, util, verification, alertLogPage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    //click on rum
    await alertLogPage.clickOnRumTab();
    //click hover first test three dot menu
    await alertLogPage.hoverOnThreeDotMenu(1);
    //click on test in source blade and get new window
    let getNewPage = await alertLogPage.getNewWindow(context, alertLogPage.threeDotMenuItemLocator('Properties'));
    let testPropertyPage = new ExplorerPage(getNewPage);
    //fetch url of test property page
    let getTestPropertyPageURL = await testPropertyPage.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('ControlCenter/Rum/Site/'), 'app property page is not opening after clicking on three dot menu properties option');
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/Properties'), 'app property page is not opening after clicking on three dot menu properties option');
    
})








