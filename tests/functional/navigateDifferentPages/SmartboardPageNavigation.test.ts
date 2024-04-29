import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
    CP-40696 : Verify smartboard is opened when clicked on smartboard option in left navigation
*/
test("VerifySmartboardTestLoads @Smartboard@PageNavigation", async ({ instantTestHistoryPage, sideNavigationBar, verification, sourceSelectorSmartboard, syntheticSmartboardPage, util }) => {
    let data = new DataForEnv();
    let transactionTestID = await data.getValueOfTheParameter('transactionTestId');
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to explorer page
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(transactionTestID,'Tests');
    await syntheticSmartboardPage.waitForElement(syntheticSmartboardPage.timeLineGraph);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line metrics
    let timeLineMetrics: string[] = await syntheticSmartboardPage.testWiseTimeLineMetrics()
    for (let index = 0; index < timeLineMetrics.length; index++) {
        const element = timeLineMetrics[index]
        if (index == 0) {
            await verification.verifyIfElementIsPresent(syntheticSmartboardPage.commonLocator(element), element +" metrics is not present in time line");
        }
        else {
            await verification.verifyIfElementIsPresent(syntheticSmartboardPage.commoNLocator(element), element +" metrics is not present in time line");
        }

    }
    //validation for key metrics
    let keyMetrics: string[] = await syntheticSmartboardPage.testWiseKeyMetrics('Transaction')
    for (let index = 0; index < keyMetrics.length; index++) {
        const element = keyMetrics[index];
            await verification.verifyIfElementIsPresent(syntheticSmartboardPage.commoNLocator(element), element +" metrics is not present in key metrics section");
        
    }
    

})
/*
    CP-44496 : Verify Node smartboard navigation
*/
test("VerifySmartboardNodeLoads @Smartboard@PageNavigation", async ({ instantTestHistoryPage, sideNavigationBar, verification, sourceSelectorSmartboard, nodeSmartboardPage, util }) => {
    let data = new DataForEnv();
    let nodeName = await data.getValueOfTheParameter('node');
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to explorer page
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.nodeTabLocator, 'node Tab is not present in source selector');
    //click on node tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Nodes",sourceSelectorSmartboard.nodeTableInSourceSelector);
    await util.delay(6000);
    //select node
    await sourceSelectorSmartboard.selectTabUnderNodes('Node')
    await util.delay(4000);
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(nodeName,'Nodes');
    await nodeSmartboardPage.waitForElement(nodeSmartboardPage.timeLineGraph);
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
test("VerifySmartboardRUMLoads @Smartboard@PageNavigation", async ({ instantTestHistoryPage, sideNavigationBar, verification, sourceSelectorSmartboard, rumSmartboardPage, util }) => {
    let data = new DataForEnv();
    let appName = await data.getValueOfTheParameter('rumAppName');
    //login to instant test history page 
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    //navigate to explorer page
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.myAppTabLocator, 'my app Tab is not present in source selector');
    //click on my app tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("My Apps",sourceSelectorSmartboard.tableInSourceSelector);
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(appName,'My Apps');
    await rumSmartboardPage.waitForElement(rumSmartboardPage.timeLineGraphLocator);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line metrics and filters
    await verification.verifyIfElementIsPresent(rumSmartboardPage.pageViewsMetricsValueLocator, "page view metrics is not present");
    await verification.verifyIfElementIsPresent(rumSmartboardPage.docCompleteMetricsValueLocator, "doc complete metric is not present")
    await verification.verifyIfElementIsPresent(rumSmartboardPage.jsValueMetricsLocator, "jsValue metric is not present")
    await verification.verifyIfElementIsPresent(rumSmartboardPage.filterButtonDropDown, "filter button is not present");
    
    //validation for other metrics
    let rumMetrics : string[] = ['Response (ms)','DOM Interactive (ms)','DOM Loaded (ms)','Doc Complete (ms)','Visually Complete (ms)','Total Ajax (ms)']
    for (let index = 0; index < rumMetrics.length; index++) {
        const element = rumMetrics[index];
        await verification.verifyIfElementIsPresent(rumSmartboardPage.commoNLocator(element),element+" metric is not present.")
    }
})

/*
    CP-39984 : To Validate Peer Information Card in BGP SB
*/
test("VerifyPeerInfoInBGPSB @Smartboard", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, bgpSmartboardPage, util }) => {
    let data = new DataForEnv();
    let bgpTestID = await data.getValueOfTheParameter('bgpTest');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(bgpTestID,'Tests');
    await bgpSmartboardPage.waitForElement(bgpSmartboardPage.timeLineGraph);
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
test("VerifyTimeZoneDropDownInNTNSB @Smartboard", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
    let data = new DataForEnv();
    let ntnTestID = await data.getValueOfTheParameter('nodeToNodeTest');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(ntnTestID,'Test');
    //validation for errors
    await verification.validationsForPage();
    //validation for time zone dropDowm
    await verification.verifyIfElementIsPresent(ntnSmartboardPage.zoneDropDownLocator, "time zone dd is not present");
    await ntnSmartboardPage.clickOnTimeZoneDropDown();
    let timeZoneName: string[] = ['AEST', 'AKDT', 'ALMT', 'AMST', 'BRST', 'BST', 'CDT','CEDT','CST','EDT','EEDT', 'EEST', 'HAST', 'ICT', 'IST', 'Japan Standard Time', 'JST', 'KST', 'MSK', 'Mountain Standard Time (Mexico)', 'US Mountain Standard Time', 'MST', 'NZST','Pacific Daylight Time (Mexico)','Pacific Daylight Time (PDT)', 'PKT', 'SGT', 'TST', 'UTC'];
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
test("VerifyMatrixCompareInNTNSB @Smartboard", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
    let data = new DataForEnv();
    let ntnTestID = await data.getValueOfTheParameter('nodeToNodeTest');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(ntnTestID,'Tests');
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
    await verification.verifySoftAssertTrue(nodeCount === 7, "node count is not matching");
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
test("VerifyRecordsCompareSectionInNTNSB @Smartboard", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
    let data = new DataForEnv();
    let ntnTestID = await data.getValueOfTheParameter('nodeToNodeTest');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.testTabLocator, 'Test Tab is not present in source selector');
    //validation for errors
    await verification.validationsForPage();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(ntnTestID,'Tests');
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


