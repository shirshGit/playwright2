import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { RecordsPage } from "@pageobjects/Records/RecordsPage";
import { expect } from "@playwright/test";



/*
   CP-7523 : Verifying the Zone filter for Gantt 
*/
test("VerifyZoneFilterForGantt  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('webTestForZoneFilterTest');
    let zoneName = await data.getValueOfTheParameter('zoneName');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //verification for zone filter drop down filter
    await verification.verifyIfElementIsPresent(recordsPage.zoneDropDownLocator, 'zone filter drop down is not present.');
    //select zone[UI automation DND]
    await recordsPage.selectFilter('Zone',zoneName);
    //get row count
    let rowCount = await recordsPage.getRowCount();
    //validation for selected zone
    let hostList: string[] = await recordsPage.getHostNameList(rowCount);
    //validation
    for (let index = 0; index < hostList.length; index++) {
        await verification.verifySoftAssertTrue(hostList[index].includes('www.gstatic.com'), "value is not matching with selected zone")
    }
})

/*
    CP-21648 : 117537 DES Filtering is not proper when we filter using the File Type
*/
test("VerifyFileTypeFilterForGanttSection  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, ganttBladePage, verification }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('webTestForZoneFilterTest');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //click on file type filter DD
    await recordsPage.clickOnFileTypeFilterDropDown();
    //click image filter
    await recordsPage.clickOnImageFilter('Images');
    //get row count
    let rowcount = await recordsPage.getRowCount();
    //validation for image file type filter
    let iconClassProperty: string[] = await recordsPage.getIconsClassProperty(rowcount);
    for (let index = 0; index < iconClassProperty.length; index++) {
        await verification.verifySoftAssertTrue(iconClassProperty[index].includes("GanttChart_icon-image"), "Image file type filter is not working properly.")
    }
})


/*
    CP-21702 : 119376 Gantt error item always displays as error even when its a warning 
*/
test("VerifyGanttChartErrorAndWarningItemsDisplay  @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, ganttBladePage, verification }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('webTestWithWarningAndError');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //select failed request filter
    await recordsPage.selectFilter('Request','Failed Requests');
    //get row count
    let errorRowCount = await recordsPage.getRowCount();
    for (let index = 1; index <= errorRowCount; index++) {
        //click on row
        await recordsPage.clickOnRowInGanntChart(index);
        //verify error text
        await verification.verifyIfElementIsPresent(ganttBladePage.errorTextInGeneralTabLocator, "error text is not present.")
        //close general tab
        await ganttBladePage.clickOnGanttBladeCrossIcon();
    }
    //select Closed Connection
    await recordsPage.selectFilter('Request','Closed Connection');
    //get row count
    let wariningRowCount = await recordsPage.getRowCount();
    for (let index = 1; index <= wariningRowCount; index++) {
        //click on row
        await recordsPage.clickOnRowInGanntChart(index);
        //verify warning text
        await verification.verifyIfElementIsPresent(ganttBladePage.warningTextInGeneralTabLocator, "warning text is not present.")
        //close general tab
        await ganttBladePage.clickOnGanttBladeCrossIcon();
    }
})



/*
   CP-36106 : Verify the combination of applied text box, File type, Request, Zone and gantt columns settings should be retained when we switch the test runs 
*/
test("VerifyCombinationOfAppliedColumns @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage: recordDetailsPage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('webTestWithRefrenceHostOnFailure');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //click on column tab
    await recordsPage.clickOnColumnTab();
    await util.delay(1000);
    //click on reset to default
    await recordsPage.clickOnResetToDefault();
    //click on column tab
    await recordsPage.clickOnColumnTab();
    //select column
    await recordsPage.selectColumn(["Zones", "# Request Cookies", "Content Type"]);
    //verification for selected columns
    await verification.verifyIfElementIsPresent(recordsPage.zoneColumnLocator, "zone column is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.requestColumnLocator, "request column is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.contentTypeColumnLocator, "contentType column is not present.");
    //click data point
    await recordsPage.clickFirstDataPoint();
    //verification for selected columns
    await verification.verifyIfElementIsPresent(recordsPage.zoneColumnLocator, "zone column is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.requestColumnLocator, "request column is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.contentTypeColumnLocator, "contentType column is not present.");
})


/*
   CP-21765 : DES: Response and End values are displaying incorrectly in the Gantt chart
*/
test("VerifyDataFromUIAndExcel @ProductionDefectRecords@Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage: recordDetailsPage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestWithMultipleStepAndStepName');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(2000);
    //click on download button 
    await recordsPage.clickOnDownload();
    //download file
    let fileName = await recordsPage.downloadFile('Excel');
    //click on column tab
    await recordsPage.clickOnColumnTab();
    await util.delay(1000);
    //click on reset to default
    await recordsPage.clickOnResetToDefault();
    //click on column tab
    await recordsPage.clickOnColumnTab();
    await util.delay(1000);
    //select column
    await recordsPage.selectColumn(["End", "Response"]);
    //count row
    let count = await recordsPage.getRowCount();
    //fetch end time metrics value from UI
    let metricsDataFromUI: string[] = await recordsPage.getEndTimeMetricsData(count);
    //fetch end time metrics value from file
    let metricsDataFromExcel: string[] = await recordsPage.readData('End (ms)', count + 1, fileName);
    //validation for data
    for (let index = 0; index < count; index++) {
        let value1 = metricsDataFromUI[index];
        let value2 = metricsDataFromExcel[index + 1].toString();
        await verification.verifySoftAssertTrue(value1.includes(value2), "end time metrics data is not matching");
    }
    //fetch response time metrics value from UI
    let resMetricsDataFromUI: string[] = await recordsPage.getResponseTimeMetricsData(count);
    //fetch response time metrics value from file
    let resMetricsDataFromExcel: string[] = await recordsPage.readData('Response (ms)', count + 1, fileName);
    //validation for data
    for (let index = 0; index < count; index++) {
        let value1 = resMetricsDataFromUI[index];
        let value2 = resMetricsDataFromExcel[index + 1].toString();
        await verification.verifySoftAssertTrue(value1.includes(value2), "response metrics data is not matching");
    }

    await recordsPage.deleteFile('Downloads/' + fileName);

})


/*
    CP-14999 : Verify whether all timing metrics are available in gantt blade
*/
test("VerifyTimingTabMetrics @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestWithRefrenceHostOnFailure');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //click on 1st row
    await recordsPage.clickOnRowInGanntChart(1);
    //click on timing tab
    await ganttBladePage.clickTab('Timing');
    //verification for metrics
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabStartMetricsLocator, "metrics is not present.");
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabBlockedMetricsLocator, "metrics is not present.");
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabDNSMetricsLocator, "metrics is not present.");
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabConnectMetricsLocator, "metrics is not present.");
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabSSLMetricsLocator, "metrics is not present.");
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabSendMetricsLocator, "metrics is not present.");
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabWaitMetricsLocator, "metrics is not present.");
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabLoadMetricsLocator, "metrics is not present.");
    await verification.verifyIfElementIsPresent(ganttBladePage.timingTabEndMetricsLocator, "metrics is not present.");
})


/*
    CP-21649 : 117539 DES Unable to search by host name or file name using search box in search bar 
*/
test("VerifySearchBoxInGanttChart @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestWithRefrenceHostOnFailure');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //click and search in gantt chart search box
    await recordsPage.searchInGanttSearchBox('www.gstatic.com');
    //verification
    let count = await recordsPage.getRowCount();
    let hostNameList = await recordsPage.getHostNameList(count);
    for (let index = 0; index < count; index++) {
        await verification.verifySoftAssertTrue(hostNameList[index].includes('www.gstatic.com'), "gantt filter is not working fine.");
    }
})

/*
    CP-21645 : 117275 DES Clicking on IP should navigate to Ripestat Link
*/
test("VerifyClickingOnIPShouldNavigateToRipestatLink @Records", async ({ baseTestUtil, context, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestWithRefrenceHostOnFailure');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //click on IP in gantt chart
    let getNewPage = await recordsPage.getNewWindow(context, recordsPage.firstIPAddressValue);
    let ripeStatWindow = new RecordsPage(getNewPage);
    //fetch url of ripestat page
    let getTestPropertyPageURL = await ripeStatWindow.getUrl();
    //validation for test properties page
    await verification.verifySoftAssertTrue(getTestPropertyPageURL.includes('/Charts/RipeStat.aspx'), 'ripe stat window is not opening after clicking on IP address in gantt chart.');

})

/*
    CP-14531 : Verify whether user is able to filter the tracepoint and indicator columns in the gantt chart
*/
test("VerifyUserShouldAbleToFilterTracepointAndIndicatorInGanttChart @Records", async ({ baseTestUtil, context, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('webTestForTracepointAndIndicator');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //click on column tab 
    await recordsPage.clickOnColumnTab();
    await util.delay(1000);
    //click on reset to default
    await recordsPage.clickOnResetToDefault();
    //click on column tab
    await recordsPage.clickOnColumnTab();
    //select column
    await recordsPage.selectColumn(["TR-Cache Control", "IND-Test"]);
    //verification for selected columns
    await verification.verifyIfElementIsPresent(recordsPage.CacheControltracepointLocator, "selected tracepoint is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.indLenghtindicatorLocator, "selected indicator is not present.");
    //validation for tracepoint value
    let traceCount = await recordsPage.getCount(recordsPage.tracePointValueLocator);
    let traceValue: string[] = await recordsPage.getTracePointValues(traceCount);
    for (let index = 0; index < traceCount; index++) {
        await verification.verifyHardAssertTrue(traceValue.includes('max-age'), "not getting tracepoint value.");
    }
    //validation for indicator value
    let indicatorCount = await recordsPage.getCount(recordsPage.indicatorCountLocator);
    let indicatorValue: string[] = await recordsPage.getIndicatorValues(indicatorCount);
    await verification.verifyValueIsNotNull(indicatorValue, 'getting null value for indicator.');

})

/*
    CP-21673 : 118029 DES IP address label is missing in Records page if IP address value is NA in waterfall page 
*/
test("VerifyIPAddressLable @Records", async ({ baseTestUtil, context, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestWithRefrenceHostOnFailure');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //verification for IP lable
    await verification.verifyIfElementIsPresent(recordsPage.getNodeIPLocator, "ip address value is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.ipLabelLocator, "ip label is not present.");

})

/*
    CP-14536 : Verify that user is able to search the gantt requests using search box,file type 
*/
test("VerifySearchtheGanttChartRequestUsingSearchBoxFileType @Records", async ({ baseTestUtil, context, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('webTestWithRefrenceHostOnFailure');
    let zoneName = await data.getValueOfTheParameter('zoneName');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //verification for search box
    //click on search box and enter text
    await recordsPage.searchInGanttSearchBox('/xjs');
    //verification for file name
    let rowCount1 = await recordsPage.getRowCount();
    let fileNameList = await recordsPage.getFileNameList(rowCount1);
    for (let index = 0; index < rowCount1; index++) {
        await verification.verifySoftAssertTrue(fileNameList[index].includes('/xjs'), "gantt file type search is not working.");
    }
    //click on clear icon
    await recordsPage.ganttChartClearIcon();
    await util.delay(3000);
    //verification for file type filter
    //click on HTML filte type
    await recordsPage.selectFilter('File Type','HTML');
    let rowCount2 = await recordsPage.getRowCount();
    let fileTypeList = await recordsPage.getHTMLFileTypeClassPropertyList(rowCount2);
    for (let index = 0; index < rowCount2; index++) {
        await verification.verifySoftAssertTrue(fileTypeList[index].includes('GanttChart_icon-html_'), "gantt file type[HTML] search is not working.");
    }
    //click on All filte type
    await recordsPage.selectFilter('File Type','All');
    await util.delay(2000);
    //verification for request type filter
    //select request
    await recordsPage.selectFilter('Request','HTTP 3.0 Requests');
    //get row count
    let rowCount4 = await recordsPage.getRowCount();
    let requestList = await recordsPage.getRequestProtocolList(rowCount4);
    for (let index = 0; index < rowCount2; index++) {
        await verification.verifySoftAssertTrue(requestList[index].includes('HTTP/3.0'), "request type filter search is not working.");
    }
    //select filter
    await recordsPage.selectFilter('Request','All');
    await util.delay(2000);
    //verification for zone filter
    //select zone[UI automation DND]
    await recordsPage.selectFilter('Zone',zoneName);
    await util.delay(3000);
    //get row count
    let rowCount = await recordsPage.getRowCount();
    //validation for selected zone
    let hostList: string[] = await recordsPage.getHostNameList(rowCount);
    //validation
    for (let index = 0; index < hostList.length; index++) {
        await verification.verifySoftAssertTrue(hostList[index].includes('www.gstatic.com'), "")
    }
})

/*
    CP-14543 : Verify whether user is able to view the error/information icon in the gantt request
*/
test("VerifyErrorIcon @Records", async ({ baseTestUtil, context, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestWithRefrenceHostOnFailure');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //get rows count which contains error
    let rowContainingErrorCount = recordsPage.getRowCount();
    //get error message
    let errorMessage: string[] = await recordsPage.getErrorMsgFromRowsContaingError((await rowContainingErrorCount).toString());
    //validate for error message
    for (let index = 0; index < (await rowContainingErrorCount).toString.length; index++) {
        let errorMsg = errorMessage[index];
        await verification.verifySoftAssertTrue(errorMsg.includes('failure'), 'row is not containing error message.');
    }
})

/*
    CP-14544 : Verify that user is able to select columns from column selector by clicking on columns button
*/
test("VerifyUserIsAbleToSelectColumn @Records", async ({ baseTestUtil, context, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestWithRefrenceHostOnFailure');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //click on column
    recordsPage.clickOnColumnTab();
    await util.delay(1000);
    //click on reset to default
    await recordsPage.clickOnResetToDefault();
    //click on column tab
    await recordsPage.clickOnColumnTab();
    //select column
    await recordsPage.selectColumn(["Zones", "# Request Cookies", "Content Type"]);
    //verification for selected columns
    await verification.verifyIfElementIsPresent(recordsPage.zoneColumnLocator, "zone column is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.requestColumnLocator, "request column is not present.");
    await verification.verifyIfElementIsPresent(recordsPage.contentTypeColumnLocator, "contentType column is not present.");

})

/*
     CP-21682 : 119064 DES Blocked Value is displayed as -1 instead of less than1ms in Gantt Blade Section
*/
test("VerifyBlockMetricsValue @Records", async ({ baseTestUtil, context, sideNavigationBar, loginPage, util, sourceSelectorPage, recordsPage, page, verification, ganttBladePage }) => {
    //navigate to records page
    await sideNavigationBar.navigateToRecordsFromSideNavigation();
    let data = new DataForEnv();
    let testID = await data.getValueOfTheParameter('transactionTestWithRefrenceHostOnFailure');
    //search test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(testID);
    await util.delay(3000);
    //get row count
    let totalRowcount = await recordsPage.getRowCount();
    //click on each row
    for (let rowCount = 1; rowCount < totalRowcount; rowCount++) {
        await recordsPage.clickOnRowInGanntChart(rowCount);
        //click on timing tab
        await ganttBladePage.clickTab('Timing');
        //get all metrics value from timing tab
        let timingTabMetrics: string[] = ["Start", "Blocked", "DNS", "Connect", "SSL", "Send", "Wait", "Load", "Response", "End"];
        let timingTabMetricsValue = await recordsPage.getTimingTabMetricsValue(timingTabMetrics);
        for (let index = 0; index < timingTabMetrics.length; index++) {
            let value = timingTabMetricsValue[index];
            //validation for (-) sign
            await expect(value).not.toContain('-');
        }
        await ganttBladePage.clickOnGanttBladeCrossIcon();
    }


})





