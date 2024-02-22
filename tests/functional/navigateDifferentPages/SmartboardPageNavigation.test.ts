import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
    CP-40696 : Verify smartboard is opened when clicked on smartboard option in left navigation
*/
test("VerifySmartboardTestLoads @PageNavigation@ProductionSmoke@Smoke", async ({ instantTestHistoryPage, sideNavigationBar, verification, sourceSelectorSmartboard, syntheticSmartboardPage, util }) => {
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
test.skip("VerifySmartboardNodeLoads @PageNavigation@ProductionSmoke@Smoke", async ({ instantTestHistoryPage, sideNavigationBar, verification, sourceSelectorSmartboard, nodeSmartboardPage, util }) => {
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
test("VerifySmartboardRUMLoads @PageNavigation@ProductionSmoke@Smoke", async ({ instantTestHistoryPage, sideNavigationBar, verification, sourceSelectorSmartboard, rumSmartboardPage, util }) => {
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
test.skip("VerifyPeerInfoInBGPSB @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, bgpSmartboardPage, util }) => {
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
test.skip("VerifyTimeZoneDropDownInNTNSB @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
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
test.skip("VerifyMatrixCompareInNTNSB @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
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
test.skip("VerifyRecordsCompareSectionInNTNSB @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, ntnSmartboardPage, util }) => {
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


/*
    CP-44479 : Verify User Landing in Endpoint test Smartboard page 
*/
test.skip("VerifySmartboardEndpointTestLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, endpointSmartboardPage, util }) => {
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('endpointTracerouteTestID');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.endpointTestTabLocator, 'endpoint test Tab is not present in source selector');
    //click on my app tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Endpoint Tests",sourceSelectorSmartboard.tableInSourceSelector);
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(testID,'Endpoint Tests');
    await util.delay(5000);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for network tab metrics
    let networkTabMetrics : string[] = ['Network Score','Round Trip (ms)(Traceroute)','% Packet Loss','Test Runs','Endpoints Tested','Locations Tested']
    for (let index = 0; index < networkTabMetrics.length; index++) {
        const element = networkTabMetrics[index];
        await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element),element+" metric is not present in network tab.")
    }
    
    //click on endpoint tab
    await endpointSmartboardPage.clickOnEndpointTab();
    await util.delay(4000);
    //validation for errors
    await verification.validationsForPage();
    //validation for  time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for endpoint tab items
    let endpointTabItems : string[] = ['Name','Time','Network Score','Round Trip (ms)','City','ISP']
    for (let index = 0; index < endpointTabItems.length; index++) {
        const element = endpointTabItems[index];
        await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element),element+" metric is not present in network tab.")
    }
})


/*
    CP-44478 : Verify User Landing in Location Smartboard page
*/
test.skip("VerifySmartboardLocationLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, endpointSmartboardPage, util }) => {
    let data = new DataForEnv();
    let locationID = await data.getValueOfTheParameter('endpointLocationID');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.locationTabLocator, 'Location Tab is not present in source selector');
    //click on location tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Location",sourceSelectorSmartboard.tableInSourceSelector);
    //validation for errors
    await verification.validationsForPage();
    //select location
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(locationID,'Location');
    await util.delay(12000);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for Summary tab metrics
    let summaryTabMetrics : string[] = ['Experience Score','Endpoint Score','Network Score','Application Score']
    for (let index = 0; index < summaryTabMetrics.length; index++) {
        const element = summaryTabMetrics[index];
        await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element),element+" metric is not present in summary tab.")
    }

    //click on endpoint tab
    await endpointSmartboardPage.clickOn("Endpoint");
    await util.delay(12000);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for endpoint tab metrics
    let endpointTabMetrics : string[] = ['Endpoint Score','Page Views','Errors']
    for (let index = 0; index < endpointTabMetrics.length; index++) {
        const element = endpointTabMetrics[index];
        if (index == 0) {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element), element +" metrics is not present in network tab");
        }
        else {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element), element +" metrics is not present in network tab");
        }
    }
    //validation for endpoint widget
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointWidgetLocator,'Endpoint widget is not present in endpoint tab')
    
    //click on network tab
    await endpointSmartboardPage.clickOn("Network");
    await util.delay(12000);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for network tab metrics
    let networkTabMetrics : string[] = ['Network Score','Domains','Test Runs','Failures','Packet Loss (%)','Round Trip (ms)']
    for (let index = 0; index < networkTabMetrics.length; index++) {
        const element = networkTabMetrics[index]
        if (index == 0) {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element), element +" metrics is not present in network tab");
        }
        else {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element), element +" metrics is not present in network tab");
        }
    }
    //validation for endpoint, domain , network , hopbyhop widget
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointWidgetLocator,'Endpoint widget is not present in network tab')
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.domainWidgetLocator,'domain widget is not present in network tab')
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkPathWidgetLocator,'network path widget is not present in network tab')
    await endpointSmartboardPage.clickOn('Hop-by-Hop')
    await util.delay(6000)
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hopByHopWidgetLocator,'hop by hop widget is not present in network tab')
    
    //click on application tab
    await sourceSelectorSmartboard.clickOnTab("Application");
    await util.delay(12000);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    let applicationTabMetrics : string[] = ['Application Score','Applications Visited','URLs Tested','Errors','Doc Complete','% Downtime']
    for (let index = 0; index < applicationTabMetrics.length; index++) {
        const element = applicationTabMetrics[index]
        if (index == 0) {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element), element +" metrics is not present in network tab");
        }
        else {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element), element +" metrics is not present in network tab");
        }
    }
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.appVisitedWidgetTab, "app vistied widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.urlTestedWidgetLocator, "url tested widget is not present")

})


/*
    CP-44477 : Verify User Landing in Employee app Smartboard page 
*/
test.skip("VerifySmartboardEmployeeAppLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, endpointSmartboardPage, util }) => {
    let data = new DataForEnv();
    let appName = await data.getValueOfTheParameter('endpointEmployeeApp');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.employeeAppTabLocator, 'employee app Tab is not present in source selector');
    //click on employee app tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Employee App",sourceSelectorSmartboard.tableInSourceSelector);
    //validation for errors
    await verification.validationsForPage();
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(appName,'Employee App');
    await util.delay(10000);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for Summary tab metrics
    let summaryTabMetrics : string[] = ['Experience Score','Network Score','Application Score']
    for (let index = 0; index < summaryTabMetrics.length; index++) {
        const element = summaryTabMetrics[index];
        await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element),element+" metric is not present in summary tab.")
    }
    //click on endpoint tab
    await sourceSelectorSmartboard.clickOnTab("Endpoint");
    await util.delay(10000);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for endpoint tab metrics
    let endpointTabMetrics : string[] = ['Locations','Page Views','Errors']
    for (let index = 0; index < endpointTabMetrics.length; index++) {
        const element = endpointTabMetrics[index];
        await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element),element+" metric is not present in endpoint tab.")
    }
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointPerLocationChartLocator,'endpoint per location widget is not present')

    //click on network tab
    await sourceSelectorSmartboard.clickOnTab("Network");
    await util.delay(10000);
    //validation for errors
    await verification.validationsForPage();
    //3.validation for time line , time zone , go button , timeframe
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for endpoint, location , network , hopbyhop widget
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointWidgetLocator,'Endpoint widget is not present in network tab')
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.locWidgetLocator,'domain widget is not present in network tab')
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkPathWidgetLocator,'network path widget is not present in network tab')
    await endpointSmartboardPage.clickOn('Hop-by-Hop')
    await util.delay(3000)
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hopByHopWidgetLocator,'hop by hop widget is not present in network tab')
    
    
    
    //click on application tab
    await sourceSelectorSmartboard.clickOnTab("Application");
    await util.delay(10000);
    //validation for errors
    await verification.validationsForPage();
    //validation for time line , time zone , go button , timeframe 
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.compareDDLocator, "compare is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for application tab metrics
    let applicationTabMetrics : string[] = ['Application Score','Doc Complete','Errors','% Downtime']
    for (let index = 0; index < applicationTabMetrics.length; index++) {
        const element = applicationTabMetrics[index]
        await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element), element +" metrics is not present in network tab");
    }
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.trendingChartLocator, "trending chart is not present in application tab");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointSmartboardNetworkTAbLocator,"trending chart is not present in application tab")
})


/*
    CP-44476 : Verify User Landing in new Endpoint Smartboard page 
*/
test.skip("VerifySmartboardEndpointLoads @PageNavigation@ProductionSmoke@Smoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, endpointSmartboardPage, util }) => {
    let data = new DataForEnv();
    let endpointID = await data.getValueOfTheParameter('endpointID');
    await sideNavigationBar.navigateToSmartboardFromSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.endpointTabLocator, 'endpoint Tab is not present in source selector');
    //click on Endpoints tab
    await sourceSelectorSmartboard.clickOnTabInSourceSelector("Endpoints",sourceSelectorSmartboard.tableInSourceSelector);
    await util.delay(10000);
    //validation for errors
    await verification.validationsForPage();
    //select endpoint
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(endpointID,'Endpoints');
    await util.delay(12000);
    //validation for errors
    await verification.validationsForPage();
    //validation for metrics
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTimeLineLocator, "time line is not present")
    //validation for overview tab metrics
    let overviewTabMetrics : string[] = ['Experience Score','Call Quality','VPN Health','Online','Events','Issues']
    for (let index = 0; index < overviewTabMetrics.length; index++) {
        const element = overviewTabMetrics[index]
        if (index == 0) {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element), element +" metrics is not present in summary tab");
        }
        else {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element), element +" metrics is not present in summary tab");
        }
    }
    //validation for key metrics , issue and events widgets
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.keyMetricsWidgetLocator, "key metrics widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.issueNdEventLocator, "issue and events widget is not present")
    
    //click on endpoint tab
    await sourceSelectorSmartboard.clickOnTab("Endpoint");
    await util.delay(12000);
    //validation for errors
    await verification.validationsForPage();
    //2.validation for endpoint tab
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTimeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for endpoint tab metrics
    let endpointTabMetrics : string[] = ['Endpoint Score','CPU Usage','Memory Usage','Wifi Strength','Signal Quality','Issues']
    for (let index = 0; index < endpointTabMetrics.length; index++) {
        const element = endpointTabMetrics[index]
        if (index == 0) {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element), element +" metrics is not present in endpoint tab");
        }
        else {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element), element +" metrics is not present in endpoint tab");
        }
    }
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.systemInfoCardLocator, "sys info is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hardwareUsageLocator, "hardware usage widget is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.processWidgetLocator, "process widget is not present")

    //click on network tab
    await sourceSelectorSmartboard.clickOnTab("Network");
    await util.delay(12000);
    //validation for errors
    await verification.validationsForPage();
    //validation for network tab
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTimeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for network tab metrics
    let networkTabMetrics : string[] = ['Network Score','Test Runs','Failures','Packet Loss (%)','Round Trip (ms)','Jitter (ms)','Upload (Mbps)','Download (Mbps)']
    for (let index = 0; index < networkTabMetrics.length; index++) {
        const element = networkTabMetrics[index]
        if (index == 0) {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element), element +" metrics is not present in network tab");
        }
        else {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element), element +" metrics is not present in network tab");
        }
    }
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointDomainWidgetLocator, "domain widget is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.locWidgetLocator, "location widget widget is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.networkPathWidgetLocator, "network path widget is not present")
    await endpointSmartboardPage.clickOn('Hop-by-Hop')
    await util.delay(3000)
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.hopByHopWidgetLocator, "hop by hop widget button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator('Trending'), "trending widget is not present")
    
    //click on application tab
    await sourceSelectorSmartboard.clickOnTab("Application");
    await util.delay(12000);
    //validation for errors
    await verification.validationsForPage();
    //validation for application tab
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.goButtonLocator, "go button is not present");
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.endpointTimeLineLocator, "time line is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeZoneDDLocator, "time zone is not present")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.timeFrame, "time frame is not present")
    //validation for network tab metrics
    let applicationTabMetrics : string[] = ['Application Score','Applications Visited','URLs Tested','Errors','Doc Complete','% Downtime']
    for (let index = 0; index < applicationTabMetrics.length; index++) {
        const element = applicationTabMetrics[index]
        if (index == 0) {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commonLocator(element), element +" metrics is not present in application tab");
        }
        else {
            await verification.verifyIfElementIsPresent(endpointSmartboardPage.commoNLocator(element), element +" metrics is not present in application tab");
        }
    }
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.appVisititedWidgetLocator, "app visited widget is not present in application tab")
    await verification.verifyIfElementIsPresent(endpointSmartboardPage.urlTestedWgtLocator, "url tested widget widget is not present in application tab");
    

})
