import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
    CP-40696 : Verify smartboard is opened when clicked on smartboard option in left navigation
*/
test("VerifySmartboardTestLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, syntheticSmartboardPage, util }) => {
    let data = new DataForEnv();
    let transactionTestID = await data.getValueOfTheParameter('transactionTestId');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(transactionTestID);
    //validation for errors
    await verification.validationsForPage();
    //validation for metrics
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.testTimeMetricsInTimeLineLocator, "test time metrics in time line is not present");
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.rumMetricsInTimeLineLocator, "run metrics is not present")
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.downTimeMetricsInKeyMetricLocator, "down time metrics in key metrics is not present")
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.downTimeMetricsInTimeLine, "down time in timeline is not present");
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.testTimeMetricsInKeyMetricLocator, "test time metrics is not present");
    await verification.verifyIfElementIsPresent(syntheticSmartboardPage.testTimeMetricsInKeyMetricLocator, "test time metricsin key metrics is not present");


})
/*
    CP-44496 : Verify Node smartboard navigation
*/

test("VerifySmartboardNodeLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, nodeSmartboardPage, util }) => {
    let data = new DataForEnv();
    let nodeName = await data.getValueOfTheParameter('node');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.nodeTabLocator, 'node Tab is not present in source selector');
    //click on node tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Nodes");
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(nodeName);
    //validation for errors
    await verification.validationsForPage();
    //validation for metrics
    await verification.verifyIfElementIsPresent(nodeSmartboardPage.nodeNameLocator, "node name is not present");
    await verification.verifyIfElementIsPresent(nodeSmartboardPage.networkTypeLocator, "network type is not present")
    await verification.verifyIfElementIsPresent(nodeSmartboardPage.locationLocator, "location is not present")
    await verification.verifyIfElementIsPresent(nodeSmartboardPage.networkRadarLocator, "network radar graph is not present");

})

/*
    CP-44188 : Verify RUM smartboard loads properly from side navigation
*/
test("VerifySmartboardRUMLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, rumSmartboardPage, util }) => {
    let data = new DataForEnv();
    let appName = await data.getValueOfTheParameter('rumAppName');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.myAppTabLocator, 'my app Tab is not present in source selector');
    //click on my app tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("RUM");
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(appName);
    //validation for errors
    await verification.validationsForPage();
    //validation for metrics and filters
    await verification.verifyIfElementIsPresent(rumSmartboardPage.pageViewsMetricsValueLocator, "page view metrics is not present");
    await verification.verifyIfElementIsPresent(rumSmartboardPage.docCompleteMetricsValueLocator, "doc complete metric is not present")
    await verification.verifyIfElementIsPresent(rumSmartboardPage.jsValueMetricsLocator, "jsValue metric is not present")
    await verification.verifyIfElementIsPresent(rumSmartboardPage.filterButtonDropDown, "filter button is not present");
    await verification.verifyIfElementIsPresent(rumSmartboardPage.responseMetricsValueLocator, "response metric is not present")
    await verification.verifyIfElementIsPresent(rumSmartboardPage.domInteractiveMetricsValueLocator, "domInteractive metrics is not present");

})

/*
     CP-39984 : To Validate Peer Information Card in BGP SB
*/
test.skip("VerifyPeerInfoInBGPSB @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, bgpSmartboardPage, util }) => {
    let data = new DataForEnv();
    let bgpTestID = await data.getValueOfTheParameter('bgpTest');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(bgpTestID);
    //validation 
    await verification.verifyIfElementIsPresent(bgpSmartboardPage.selectedTimeInTimeFrameLocator, "24 hour time frame is not selected");
    await verification.verifyIfElementIsPresent(bgpSmartboardPage.peerInfoWidgetLocator, "peer info widget is not present")
    await verification.verifyIfElementIsPresent(bgpSmartboardPage.isolatedPeerLocator, "isolated peer info is not present")
    //click on isolated peer 
    await bgpSmartboardPage.clickOnIsolatedPeer();
})

/*
    CP-39964 : To validate Time zone dropdown in NTN SB
*/
test("VerifyTimeZoneDropDownInNTNSB @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
    let data = new DataForEnv();
    let ntnTestID = await data.getValueOfTheParameter('nodeToNodeTest');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(ntnTestID);
    //validation for errors
    await verification.validationsForPage();
    //validation for time zone dropDowm
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.zoneDropDownLocator, "time zone dd is not present");
    await ntnSmartboardPage.clickOnTimeZoneDropDown();
    let timeZoneName: string[] = ['AEDT', 'AKST', 'ALMT', 'AMST', 'BRST', 'CET', 'CST', 'EEST', 'EEST', 'EST', 'GST', 'HAST', 'ICT', 'IST', 'Japan Standard Time', 'JST', 'KST', 'MSK', 'Mountain Standard Time (Mexico)', 'US Mountain Standard Time', 'MST', 'NZDT', 'PKT', 'Pacific Standard Time', 'PST', 'SGT', 'TST', 'UTC'];
    let timeZoneNameFromUI: string[] = await ntnSmartboardPage.getTimeZoneName(timeZoneName);
    for (let index = 0; index < timeZoneName.length; index++) {
        const element1 = timeZoneName[index];
        const element2 = timeZoneNameFromUI[index];
        await verification.verifySoftAssertTrue(element2.includes(element1), "time zone is not matching")
    }
})

/*
    CP-39967 : To Validate Matrix Compare Section- NTN SB
*/
test("VerifyMatrixCompareInNTNSB @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
    let data = new DataForEnv();
    let ntnTestID = await data.getValueOfTheParameter('nodeToNodeTest');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(ntnTestID);
    //validation for errors
    await verification.validationsForPage();
    //verification for cards metrics
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.latencyCardMetricsLocator, "latency metrics is not present");
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.jitterCardMetricsLocator, "jitter metrics is not present")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.pktLossCardMetricsLocator, "pkt loss metrics is not present")
    //verification for metrics selected in metrics drop down
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.selectedItemInMetricsDDLocator, "pkt loss is not selected in metrics DD");
    //click on metrics DD
    await ntnSmartboardPage.clickOnMetricsDropDown();
    //verification for metrics in metrics DD
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.pktLossInMetricsDDLocator, "jitter metrics is not present in metrics DD")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.jitterCardMetricsLocator, "jitter metrics is not present in metrics DD")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.latencyInMetricsDDLocator, "latency metrics is not present in metrics DD");
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.pktLossLatencyJitterInMetricsDDLocator, "pkt loss ,jitter,latency metrics is not present in metrics DD")
    //verification for no of node selected in test
    let nodeCount = await ntnSmartboardPage.getSelectedNodeCountInMetricsSection();
    await verification.verifySoftAssertTrue(nodeCount === 2, "node count is not matching");
    //verification for item selected in legend metrics DD
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.legendDDSelectedItemLocator, "pkt loss metrics is not selected in legend metrics DD");
    //click on legend metrics dd
    await ntnSmartboardPage.clickOnLegendMetricsDropDown();
    //verification for legend metrics drop down
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.pktLossInLegendMetricsDDLocator, "pkt loss metrics is not present in legend metrics DD")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.jitterInLegendMetricsDDLocator, "jitter metrics is not present in legend metrics DD")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.latencyInLegendMetricsDDLocator, "latency metrics is not present in legend metrics DD")

})

/*
    CP-39971 : To Validate Record Compare Section- NTN SB
*/
test("VerifyRecordsCompareSectionInNTNSB @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
    let data = new DataForEnv();
    let ntnTestID = await data.getValueOfTheParameter('nodeToNodeTest');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //validation for errors
    await verification.validationsForPage();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(ntnTestID);
    //click on records compare tab
    await ntnSmartboardPage.clickOnRecordsCompareButton();
    //validation for errors
    await verification.validationsForPage();
    //validation for first and second widget From and To Node
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.firstWidgetFromLocator, "frist widget from text is not present.")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.fristWidgetToLocator, "frist widget To text is not present.")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.secondWidgetFromNodeLocator, "second widget from text is not present.")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.secondWidgetToNodeLocator, "second widget To text is not present.")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.fristWidgetToNodeLocator, "frist widget To node is not present.")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.firstWidgetFromNodeLocator, "frist widget from node is not present.")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.secondWidgetFromNodeLocator, "second widget from node is not present.")
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.secondWidgetToNodeLocator, "second widget To node is not present.")
    //fetch node from and To value
    let firstWgtFromNodeValue = await ntnSmartboardPage.fetchElementText(ntnSmartboardPage.firstWidgetFromNodeLocator);
    let firstWgtToNodeValue = await ntnSmartboardPage.fetchElementText(ntnSmartboardPage.fristWidgetToNodeLocator);
    let secondWgtFromNodeValue = await ntnSmartboardPage.fetchElementText(ntnSmartboardPage.secondWidgetFromNodeLocator);
    let secondWgtToNodeValue = await ntnSmartboardPage.fetchElementText(ntnSmartboardPage.secondWidgetToNodeLocator);
    //validation
    await verification.verifySoftAssertTrue(firstWgtFromNodeValue === secondWgtToNodeValue, 'not matching')
    await verification.verifySoftAssertTrue(firstWgtToNodeValue === secondWgtFromNodeValue, 'not matching')
    //get first row record selected schedule time for both widget
    let firstRecordSheduleTimeInFirstWgt = await ntnSmartboardPage.fetchElementText(ntnSmartboardPage.firstRecordSheduleTimeInFirstWgtLocator);
    let firstRecordSheduleTimeInSecondWgt = await ntnSmartboardPage.fetchElementText(ntnSmartboardPage.firstRecordSheduleTimeInSecondWgtLocator);
    //get selected record schedule time
    let recordSheduleTimeFirstWgt = await ntnSmartboardPage.fetchElementText(ntnSmartboardPage.recordSheduleTimeFirstWgtLocator);
    let recordSheduleTimeSecondWgt = await ntnSmartboardPage.fetchElementText(ntnSmartboardPage.recordSheduleTimeSecondWgtLocator);
    await verification.verifySoftAssertTrue(recordSheduleTimeFirstWgt.includes(firstRecordSheduleTimeInFirstWgt), 'time is not matching')
    await verification.verifySoftAssertTrue(recordSheduleTimeSecondWgt.includes(firstRecordSheduleTimeInSecondWgt), 'time is not matching')

})


/*
    CP-44479 : Verify User Landing in Endpoint test Smartboard page 
*/
test("VerifySmartboardEndpointTestLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, endpointSmartboardPage, util }) => {
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('endpointTracerouteTestID');
    //await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.endpointTestTabLocator, 'endpoint test Tab is not present in source selector');
    //click on my app tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Endpoint Tests");
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(testID);
    //validation for errors
    await verification.validationsForPage();
    //validation for metrics , time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkScoreMetricsInNetworkTabForTestLocator, "network score metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.packetLossCardMetricsLocator, "packet loss metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.roundTripMetricsLocator, "round trip card metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.testRunCardMetricsLocator, "test run card metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.locationTestedCardMetricsInNetworkTabLocator, "location tested card metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTestedCardMetricsInNetworkTabLocator, "endpoint tested card metrics is not present");

    //click on endpoint tab
    await endpointSmartboardPage.clickOnEndpointTab();
    //validation for errors
    await verification.validationsForPage();
    //validation for metrics , time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.nameInEndpointTabLocator, "name  is not present in endpoint widget");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeInEndpointTabLocator, "time is not present in endpoint widget")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.roundTripInEndpointTabLocator, "round trip is not present in endpoint widget")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.cityInEndpointTabLocator, "city is not present in endpoint widget");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.ispInEndpointTabLocator, "ISP is not present in endpoint widget")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkScoreInEndpointTabLocator, "network score is not present in endpoint widget");


})


/*
    CP-44478 : Verify User Landing in Location Smartboard page
*/
test("VerifySmartboardLocationLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, endpointSmartboardPage, util }) => {
    let data = new DataForEnv();
    let locationID = await data.getValueOfTheParameter('endpointLocationID');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.locationTabLocator, 'Location Tab is not present in source selector');
    //click on location tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Location");
    //validation for errors
    await verification.validationsForPage();
    //select location
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(locationID);
    //validation for errors
    await verification.validationsForPage();
    //1.validation for summary tab metrics 
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.netScoreMetricsLocator, "network score is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.appScoreMetricsLocator, "app score is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointScoreMetricsLocator, "endpoint score is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.expScoreInLocationSummaryTabLocator, "exp score is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.trendingChartInLocationSummaryTab, "trending chart is not present");
    //click on endpoint tab
    await sourceSelectorSmartboard.clickOnTab("Endpoint");
    await util.delay(5000);
    //validation for errors
    await verification.validationsForPage();
    //2.validation for endpoint tab metrics 
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointScoreMetricsLocator, "endpoint score is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.errorMetricsLocator, "error metric is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.pageViewInLocationEndpointTab, "page view metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointWidgetInEndpointLocationTab, "exp score is not present");
    //click on network tab
    await sourceSelectorSmartboard.clickOnTab("Network");
    await util.delay(5000);
    //validation for errors
    await verification.validationsForPage();
    //3.validation for network tab metrics 
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.netScoreMetricsLocator, "network score is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.testRunCardMetricsLocator, "test run metric is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.packetLossCardMetricsLocator, "pkt loss metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.roundTripMetricsLocator, "round trip is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainInEndpointLocationTab, "domain is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.failureInEndpointLocationLocator, "failure is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainWidgetInNetworkLocationTab, "domain widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointWidgetInnetworkLocationLocator, "domain widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainWidgetInNetworkLocationTab, "endpoint widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hopByHopInNetworkTabLocator, "hop by hop widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkPathInNetworkTabLocator, "network path widget is not present")
    //click on application tab
    await sourceSelectorSmartboard.clickOnTab("Application");
    await util.delay(5000);
    //validation for errors
    await verification.validationsForPage();
    //4.validation for app tab metrics 
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.netScoreMetricsLocator, "network score is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.testRunCardMetricsLocator, "test run metric is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.packetLossCardMetricsLocator, "pkt loss metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.roundTripMetricsLocator, "round trip is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainInEndpointLocationTab, "domain is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.failureInEndpointLocationLocator, "failure is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainWidgetInNetworkLocationTab, "domain widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointWidgetInnetworkLocationLocator, "domain widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainWidgetInNetworkLocationTab, "endpoint widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hopByHopInNetworkTabLocator, "hop by hop widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkPathInNetworkTabLocator, "network path widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.appVisitedInApplicationTab, "app vistied widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.urlTestedInApplicationLocator, "url tested widget is not present")

})


/*
    CP-44477 : Verify User Landing in Employee app Smartboard page 
*/
test("VerifySmartboardEmployeeAppLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, endpointSmartboardPage, util }) => {
    let data = new DataForEnv();
    let appName = await data.getValueOfTheParameter('rumAppName');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.employeeAppTabLocator, 'employee app Tab is not present in source selector');
    //click on employee app tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Employee App");
    //validation for errors
    await verification.validationsForPage();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(appName);
    //validation for errors
    await verification.validationsForPage();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(appName);
    //validation for errors
    await verification.validationsForPage();
    //1.validation for summary tab
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointScoreMetricsLocator, "page view metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.netScoreMetricsLocator, "doc complete metric is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.appScoreMetricsLocator, "jsValue metric is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.summaryTabLocator, "filter button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.trendsChartLocator, "trendsChart is not present")
    //click on endpoint tab
    await sourceSelectorSmartboard.clickOnTab("Endpoint");
    await util.delay(5000);
    //validation for errors
    await verification.validationsForPage();
    //2.validation for endpoint tab metrics 
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.locCardMetricsLocator, "location card metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.pageViewCardMetricsLocator, "page view card metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.errorCardMetricsLocator, "error card metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointPerLocationChartLocator, "endpoint per location chart is not present");
    //click on network tab
    await sourceSelectorSmartboard.clickOnTab("Network");
    await util.delay(5000);
    //validation for errors
    await verification.validationsForPage();
    //3.validation for network tab metrics 
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointWgtForNetworkTabLocator, "network score is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.locWidgetForNetworkTabLocator, "test run metric is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hopByHopInNetworkTabLocator, "pkt loss metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkPathInNetworkTabLocator, "round trip is not present");
    //click on application tab
    await sourceSelectorSmartboard.clickOnTab("Application");
    await util.delay(5000);
    //validation for errors
    await verification.validationsForPage();
    //4.validation for app tab metrics 
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.appScoreMetricsLocator, "network score is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.docCompletedApplicationLocator, "test run metric is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.errorCardMetricsLocator, "pkt loss metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.downTimeLOcator, "round trip is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.trendsChartLocator, "domain is not present");

})


/*
    CP-44476 : Verify User Landing in new Endpoint Smartboard page 
*/
test("VerifySmartboardEndpointLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, endpointSmartboardPage, util }) => {
    let data = new DataForEnv();
    let endpointID = await data.getValueOfTheParameter('endpoint');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.endpointTabLocator, 'endpoint Tab is not present in source selector');
    //click on Endpoints tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Endpoints");
    //validation for errors
    await verification.validationsForPage();
    //select endpoint
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(endpointID);
    //validation for errors
    await verification.validationsForPage();
    //select endpoint
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(endpointID);
    //validation for errors
    await verification.validationsForPage();
    //1.validation for metrics
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTimeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.callQualityLocator, "call quality is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.onlineLocator, "online not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.vpnHealthLocator, "vpn health is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.issueLocator, "issue is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.settingsIconLocator, "settings is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.eventsLocator, "events is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.keyMetricsWidgetLocator, "key metric widget is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.issueNdEventLocator, "events and issue widget is not present")

    //click on endpoint tab
    await sourceSelectorSmartboard.clickOnTab("Endpoint");
    await util.delay(4000);
    //validation for errors
    await verification.validationsForPage();
    //2.validation for endpoint tab
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTimeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointScoreMetricsLocator, "endpoint score is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.cpuUsageCardLocator, "cpu usage card not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.memoryUsageMetricsLocator, "memory usage is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.wifiMetricsLocator, "wifi metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.signalQualityLocator, "signal quality metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.systemInfoCardLocator, "sys info is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hardwareUsageLocator, "hardware usage widget is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.processWidgetLocator, "process widget is not present")

    //click on network tab
    await sourceSelectorSmartboard.clickOnTab("Network");
    await util.delay(4000);
    //validation for errors
    await verification.validationsForPage();
    //3.validation for network tab
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTimeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.netScoreMetricsLocator, "network score is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.testRunCardMetricsLocator, "test run metrics not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.failureInEndpointLocationLocator, "failure metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.packetLossCardMetricsLocator, "pkt loss metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.roundTripMetricsLocator, "round trip metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.jitterCardMetricsLocator, "jitter metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.uploadCardMetricsLocator, "upload metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.downloadCardMetricsLocator, "download metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainInEndpointLocationTab, "domain widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.locWidgetLocator, "location widget widget is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkPathInNetworkTabLocator, "network path widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hopByHopInNetworkTabLocator, "hop by hop widget button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.trendingWidgetLocator, "trending widget is not present")
    //click on application tab
    await sourceSelectorSmartboard.clickOnTab("Application");
    //validation for errors
    await verification.validationsForPage();
    await util.delay(4000);
    //4.validation for application tab
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTimeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.netScoreMetricsLocator, "network score is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.testRunCardMetricsLocator, "test run metrics not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.failureInEndpointLocationLocator, "failure metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.packetLossCardMetricsLocator, "pkt loss metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.roundTripMetricsLocator, "round trip metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.jitterCardMetricsLocator, "jitter metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.uploadCardMetricsLocator, "upload metrics is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.downloadCardMetricsLocator, "download metrics is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainInEndpointLocationTab, "domain widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.locWidgetLocator, "location widget widget is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkPathInNetworkTabLocator, "network path widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hopByHopInNetworkTabLocator, "hop by hop widget button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.trendingWidgetLocator, "trending widget is not present")


})
