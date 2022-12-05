import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

test("VerifySmartboardTestLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorSmartboard,syntheticSmartboardPage, util}) => {
    let data = new DataForEnv();
    let transactionTestID = await data.getValueOfTheParameter('transactionTestId');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(transactionTestID);
    //validation for metrics and filters
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.testTimeMetricsInTimeLineLocator,"test time metrics is not present");
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.rumMetricsInTimeLineLocator,"run metrics is not present")
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.downTimeMetricsInKeyMetricLocator,"down time metrics is not present")
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.downTimeMetricsInTimeLine,"down time in timeline is not present");
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.testTimeMetricsInKeyMetricLocator,"test time metrics is not present");
    
})

test("VerifySmartboardNodeLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorSmartboard,nodeSmartboardPage, util}) => {
    let data = new DataForEnv();
    let nodeName = await data.getValueOfTheParameter('node');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.nodeTabLocator, 'node Tab is not present in source selector');
    //click on node tab
    await sourceSelectorSmartboard.clickOnNodeTab();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(nodeName);
    //validation for metrics and filters
    await verification.verifyIfElementIsPresent(nodeSmartboardPage.nodeNameLocator,"node name is not present");
    await verification.verifyIfElementIsPresent(nodeSmartboardPage.networkTypeLocator,"network type is not present")
    await verification.verifyIfElementIsPresent(nodeSmartboardPage.locationLocator,"location is not present")
    await verification.verifyIfElementIsPresent(nodeSmartboardPage.networkRadarLocator,"network radar graph is not present");
    
})

test("VerifySmartboardRUMLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil,sideNavigationBar, verification, sourceSelectorSmartboard,rumSmartboardPage, util}) => {
    let data = new DataForEnv();
    let appName = await data.getValueOfTheParameter('rumAppName');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.myAppTabLocator, 'my app Tab is not present in source selector');
    //click on my app tab
    await sourceSelectorSmartboard.clickOnMyAppTab();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(appName);
    //validation for metrics and filters
    await verification.verifyIfElementIsPresent(rumSmartboardPage.pageViewsMetricsValueLocator,"page view metrics is not present");
    await verification.verifyIfElementIsPresent(rumSmartboardPage.docCompleteMetricsValueLocator,"doc complete metric is not present")
    await verification.verifyIfElementIsPresent(rumSmartboardPage.jsValueMetricsLocator,"jsValue metric is not present")
    await verification.verifyIfElementIsPresent(rumSmartboardPage.filterButtonDropDown,"filter button is not present");
    await verification.verifyIfElementIsPresent(rumSmartboardPage.responseMetricsValueLocator,"response metric is not present")
    await verification.verifyIfElementIsPresent(rumSmartboardPage.domInteractiveMetricsValueLocator,"domInteractive metrics is not present");
    
})
