import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility

export class RecordsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _waterFallTab = '//span[text()="Waterfall"]';
    private _pingTab = '//span[text()="Ping"]';
    private _pillDeleteButton = '//div[@data-testid="pill-delete-button"]';
    private _testInSourceSelector = '//div[@data-testid="test-picker"]//div[contains(@class,"Pill_pillContent_")]';
    private _ipAddressValue = '//span[@data-testid="ipAddress"]';
    private _sourceButton = '//button[text()="Source"]';
    private _filedVerbErrorBar = '//div[contains(text(),"Failed Verb")]';
    private _runTime = '//span[text()="Run Time"]/..//span[2]';
    private _node = '//span[text()="Node"]/..//span[2]';
    private _nodeIP = '//span[text()="Node IP"]/..//span[2]';
    private _firstDataPoint = '//*[name()="svg"][1]/*[name()="g"][1]/*[name()="g"][3]/*[name()="g"][2]/*[name()="circle"][1]';
    private _monitor = '//span[text()="Monitor"]/..//span[2]';
    private _zoneFilterDropDown = '//label[text()="Zone"]/..//i[@data-icon-name="chevron"]';
    private _imageFileTypeFilter = '//span[text()="Images"]';
    private _errorIcon = '(//div[contains(@class,"GanttChart_icon-error_")])';
    private _errorTextInGeneralTab = '//td[text()="Error"]';
    private _columnTab = '//span[text()="Columns"]';
    private _applyButton = '//span[text()="Apply"]';
    private _zoneIn = '//div[@data-testid="zones"]';
    private _request = '//div[@data-testid="#reqCookies"]';
    private _contentType = '//div[@data-testid="contentType"]';
    private _tracepoint = '//div[text()="TR-Cache Control"]';
    private _indicator = '//div[text()="IND-Test"]'
    private _searchBoxGanttSection = '(//input[@data-testid="fabricsearchbox"])[2]';
    private _firstIPAddressValue = '(//div[contains(@class,"GanttChart_cell-ip_")])[2]';
    private _nodeIPLabel = '//span[text()="Node IP"]';
    private _getRowCount = '//div[contains(@class,"GanttChart_tableBody")]//div[contains(@class,"GanttChart_tableRow_")]';
    private _htmlFileType = '//div[contains(@class,"GanttChart_cell-file-type-icon_")]//div[contains(@class,"GanttChart_icon-html_")]';
    private _errorMessage = '(//td[contains(@class,"GanttChart_tooltipValue_")])[3]';
    private _teaceValue = '//div[contains(text(),"max-age=")]';
    private _indicatorValue = '//div[contains(@class,"GanttChart_cell-indicator_")]//div[contains(@class,"GanttChart_numericCell_")]';
    private _getErrorRowValue = '//div[contains(@class,"GanttChart_icon-error_")]/../../div';
    private _getZoneValue = '//div[contains(@class,"GanttChart_zonesCell_")]';
    private _resetToDefault = '//span[text()="Reset to Default"]';
    private _requestTypeFilterDD = '(//i[@data-icon-name="chevron"])[3]//div';
    private _warningIcon = '//div[contains(@class,"GanttChart_icon-warning_")]';
    private _clearIconOfGanttSearchBox = '//i[@data-icon-name="Clear"]';
    private _downLoadFile = '//i[@data-icon-name="download"]';
    private _imageFilterUnderFileType = '(//span[text()="Images"])[2]';
    private _fileTypeFilterDropDown = '(//i[@data-icon-name="chevron"])[2]//div';
    private _responsecodeValueInGaantChart = '//div[contains(@class,"GanttChart_numericCell")]'
    private _getTestNameFromSourceSelector = '//div[contains(@class,"Pill_pillContent_")]'
    private _shareButton = '//button[text()="Share"]'
    private _zoneFilterDD = '(//div[contains(@class,"fabricIcons_chevron_")])[4]'
    private _fileTypeFilterDD = '(//div[contains(@class,"fabricIcons_chevron_")])[2]'
    private _requestFilterDD = '(//div[contains(@class,"fabricIcons_chevron_")])[3]'
    private _htmlFilterUnderFileType = '(//span[text()="HTML"])[2]';
    private _allFilterUnderFileTypeDD = '(//span[text()="All"])[4]';
    private _allFilterUnderRequestDD = '(//span[text()="All"])[3]';
    private _failedRequestFilter = '//span[text()="Failed Requests"]'
    

    public get waterFallTabLocator() {
        return this._waterFallTab;
    }
    public get fileTypeFilterDropDownLocator() {
        return this._fileTypeFilterDropDown;
    }

    public get imageFilterLocator(){
        return this._imageFilterUnderFileType;
    }

    public get filterDropDownLocator(){
        return (text:string) => {return `//label[text()="${text}"]/..//i[@data-icon-name="chevron"]/div`}
    }

    public get indicatorCountLocator(){
        return this._indicatorValue;
    }

    public get downloadFileLocator(){
        return this._downLoadFile
    }

    public get downLoadFileTypeLocator(){
        return (text:string) => { return `//span[text()="${text}"]`};
    }

    public get clearIconOfGanttChartLocator() {
        return this._clearIconOfGanttSearchBox;
    }

    public get pingTabLocator() {
        return this._pingTab
    }

    public get requestTypeFilterDDLocator() {
        return this._requestTypeFilterDD
    }

    public get pillDeleteButtonLocator() {
        return this._pillDeleteButton
    }

    public get testInSourceSelectorLocator() {
        return this._testInSourceSelector;
    }

    public get TestNameFromSourceBladeLocator() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }
    public get getIPAddressValueLocator() {
        return this._ipAddressValue;
    }

    public get sourceButtonLocator() {
        return this._sourceButton;
    }

    public get failedVerbLocator() {
        return this._filedVerbErrorBar;
    }

    public get getNodeLocator() {
        return this._node;
    }
    public get getNodeIPLocator() {
        return this._nodeIP;
    }

    public get getMonitorLocator() {
        return this._monitor;
    }

    public get firstDataPointLocator() {
        return this._firstDataPoint
    }

    public get getRunTimeLocator() {
        return this._runTime;
    }

    public get getIPAddressLocator() {
        return this._ipAddressValue;
    }

    public get selectStepLocator() {
        return (text: string) => { return `//div[@data-list-index="${text}"]` };
    }

    public get getCardValueLocator() {
        return (text: string) => { return `//div[text()="${text}"]/..//span[@data-testid="keyMetricBlockValue"]` };
    }

    public get getStepNameLocator() {
        return (text: number) => { return `(//div[@data-automation-key="Step Name_0"]//div)[${text}]` };
    }

    public get stepNameCheckBoxLocator() {
        return (text: number) => { return `//div[@data-item-index="${text}"]//label` };
    }

    public get zoneDropDownLocator() {
        return this._zoneFilterDropDown;
    }
    public get selectZoneLocator() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }
    public get hostNameLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_tableRow_")]//div[contains(@class,"GanttChart_cell-host_")])[${text}]` };
    }

    public get getImageLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_icon-image_")])[${text}]` };
    }
    public get getFileTypeFilterLocator() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }

    public get iconsInGanttSectionLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_icon-image_")])[${text}]` };
    }

    public get errorIconLocator() {
        return this._errorIcon;
    }

    public get rowContainingErrorLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_icon-error_")])[${text}]` }
    }

    public get selectRowFromGanttChartLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_tableRow_")])[${text}]` };
    }
    public get errorTextInGeneralTabLocator() {
        return this._errorTextInGeneralTab
    }
    public get columnTabLocator() {
        return this._columnTab;
    }

    public get selectColumnLocator() {
        return (text: string) => { return `//div[@title="${text}"]/../../..//div[contains(@class,"fabricIcons_tableCheckMark_")]` }
    }

    public get applyButtonLocator() {
        return this._applyButton;
    }

    public get zoneColumnLocator() {
        return this._zoneIn;
    }

    public get requestColumnLocator() {
        return this._request;
    }

    public get CacheControltracepointLocator() {
        return this._tracepoint
    }

    public get indLenghtindicatorLocator() {
        return this._indicator;
    }

    public get contentTypeColumnLocator() {
        return this._contentType;
    }

    public get ganttSearchBoxLocator() {
        return this._searchBoxGanttSection;
    }

    public get resetToDefaultLocator() {
        return this._resetToDefault;;
    }

    public get getHostLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_tableRow_")]//div[contains(@class,"GanttChart_cell-host_")])[${text}]` };
    }

    public get getFileTypeLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_tableRow_")]//div[contains(@class,"GanttChart_cell-file-name_")])[${text}]` };
    }


    public get getRowsCountLocator() {
        return this._getRowCount;
    }

    public get firstIPAddressValue() {
        return this._firstIPAddressValue;
    }

    public get ipLabelLocator() {
        return this._nodeIPLabel;
    }

    public get htmlFileTypeLocator() {
        return this._htmlFileType;
    }

    public get errorMessageLocator() {
        return this._errorMessage;
    }

    public get timingTabMetricsValueLocator() {
        return (text: string) => { return `//td[text()="${text}"]/..//td[2]` };
    }

    public get tracepointValueLocator() {
        return (text: number) => { return `(//div[contains(text(),"max-age=")])[${text}]` };
    }

    public get indicatorValueLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_cell-indicator")])[${text}]/div` };
    }

    public get tracePointValueLocator() {
        return this._teaceValue;
    }

    public get getZoneValueLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_zonesCell_")])[${text}]` };
    }

    public get endTimeMetricsValueLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_tableRow_")])[${text}]//div[11]/div` };
    }

    public get responseTimeMetricsValueLocator() {
        return (text: number) => { return `(//div[contains(@class,"GanttChart_tableRow_")])[${text}]//div[10]/div` };
    }
    public get getWarningIconRowNumberLocator() {
        return (text: number) => { return `((//div[contains(@class,"GanttChart_icon-warning_")])[${text}]/../..//div)[1]` };
    }

    public get getErrorIconRowNumverLocator() {
        return (text: number) => { return `((//div[contains(@class,"GanttChart_icon-error_")])[${text}]/../..//div)[1]` };
    }

    public get getProtocolValueLocator(){
        return (text:number) => { return `(//div[contains(@class,"GanttChart_tableRow_")])[${text}]//div[contains(text(),"HTTP")]`}
     
    }
    public get getErrorRowValueLocator() {
        return this._getErrorRowValue;
    }

    public get responsecodeValueInGaantChart(){
        return this._responsecodeValueInGaantChart;
    }

    public get gettestNameFromSourceSelectorBoxLocator(){
        return this._getTestNameFromSourceSelector
    }
    public get commonLocator() {
        return (text: string) => { return `//span[text()="${text}"]` }
    }
    public get commoNLocator() {
        return (text: string) => { return `//div[text()="${text}"]` }
    }
    public get shareButtonLocator(){
        return this._shareButton
    }
    public get zoneFilterDDLocator(){
        return this._zoneFilterDD
    }
    public get requestFilterDDLocator(){
        return this._requestFilterDD
    }
    public get htmlFileTypeFilterLocator(){
        return this._htmlFilterUnderFileType
    }
    public get allFilterUnderFileTypeDDLocator(){
        return this._allFilterUnderFileTypeDD
    }
    public get allFilterUnderRequestDDLocator(){
        return this._allFilterUnderRequestDD
    }
    public get requestFilterDropDownLocator() {
        return this._requestFilterDD;
    }
    public get failedRequestFilterUnderRequestDDLocator(){
        return this._failedRequestFilter
    }

    //#endregion

    async clickOnFileTypeFilterDropDown(){
        await webActions.clickElement(this.fileTypeFilterDropDownLocator);
    }

    async ganttChartClearIcon(){
        await webActions.clickElement(this.clearIconOfGanttChartLocator);
    }

    async clickOnTestInSourceSelector() {
        await webActions.clickElement(this.testInSourceSelectorLocator);
    }

    async clickOnPillDeleteButton() {
        await webActions.clickElement(this.pillDeleteButtonLocator);
    }

    async clickOnSourceButton() {
        await webActions.clickElement(this.sourceButtonLocator);
    }

    async clickFirstDataPoint() {
        await webActions.clickElement(this.firstDataPointLocator);
    }

    async getRunTimeValues() {
        return await webActions.getTextFromWebElementsUsingSelector(this.getRunTimeLocator);
    }

    async selectStepInTransactionTest(stepNumber: string) {
        let xpath = this.selectStepLocator(stepNumber);
        await webActions.clickElement(xpath);
    }


    async getCardMetricsData(cardMetrics: string[]) {
        let cardMetricsValue: string[] = [];
        for (let index = 0; index < cardMetrics.length; index++) {
            const metric = cardMetrics[index];
            let metricValue = await webActions.getElementText(this.getCardValueLocator(metric));
            cardMetricsValue.push(metricValue);
        }
        return cardMetricsValue;
    }


    async getStepNames(item: number) {
        let itemText: string[] = [];
        for (let index = 1; index <= item; index++) {
            let xpath = this.getStepNameLocator(index);
            let iteMText = await webActions.getElementText(xpath);
            itemText.push(iteMText);
        }
        return itemText;
    }

    async getClassPropertyOfStepNameCheckBox(stepNumber: number) {
        let inhertiText = await webActions.getElementAttributeValue(this.stepNameCheckBoxLocator(stepNumber), 'class');
        return inhertiText;
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }

    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async getIPAddressValue() {
        let ipAddressValue = await webActions.getElementText(this.getIPAddressLocator);
        return ipAddressValue;
    }

    async clickOnZoneDropDown() {
        await webActions.clickElement(this.zoneDropDownLocator);
    }

    async getRowCount() {
        let rowCount = await this.page.locator(this.getRowsCountLocator).count();
        return rowCount;
    }
   
    //By this method user can select filter from fileType,Request,ZoneDropdown
    async selectFilter(filterDDLocator:string,filterLocator:string){
        await webActions.clickElement(filterDDLocator);
        await util.delay(2000);
        await webActions.clickElement(filterLocator);
    }

    async clickOnFilterDropDown(filterType:string){
        await webActions.clickElementJS(this.filterDropDownLocator(filterType));
    }

    async clickOnFileTypeImageFilter(){
        await webActions.clickElement(this.imageFilterLocator);
    }

    async clickOnRequestTypeFilter() {
        await webActions.clickElementJS(this.imageFilterLocator);
    }
    async selectZone(zoneName: string) {
        await webActions.clickElement(this.zoneDropDownLocator);
        await webActions.clickElement(this.selectZoneLocator(zoneName));
    }

    async getFirstErrorRowValue() {
        let rowValue = await webActions.getElementText(this.getErrorRowValueLocator);
        return rowValue;
    }

    async getIconsClassProperty(nunberOfRow: number) {
        let iconClassProperty: string[] = [];
        for (let index = 1; index <= nunberOfRow; index++) {
            let hostValue = await webActions.getElementAttributeValue(this.iconsInGanttSectionLocator(index), 'class');
            iconClassProperty.push(hostValue);
        }
        return iconClassProperty;
    }

    async clickOnFileTypeFilter(fileType: string) {
        await webActions.clickElement(this.getFileTypeFilterLocator(fileType));
    }

    async clickOnRowInGanntChart(rownum: number) {
        await webActions.clickElement(this.selectRowFromGanttChartLocator(rownum));
    }

    async clickOnColumnTab() {
        await webActions.clickElement(this.columnTabLocator);
    }

    async selectColumn(items: string[]) {
        for (let index = 0; index < items.length; index++) {
            let itemName = items[index];
            let xpath = this.selectColumnLocator(itemName);
            util.delay(1000);
            await webActions.clickElementJS(xpath);
        }
        await webActions.clickElement(this.applyButtonLocator);
    }

    async getEndTimeMetricsData(nunberOfRow: number) {
        let endTimeMetricsValue: string[] = [];
        for (let index = 1; index <= nunberOfRow; index++) {
            let xpath = this.endTimeMetricsValueLocator(index);
            let endMetricsValue = await webActions.getElementText(xpath);
            endTimeMetricsValue.push(endMetricsValue);
        }
        return endTimeMetricsValue;
    }

    async getResponseTimeMetricsData(nunberOfRow: number) {
        let responseTimeMetricsValue: string[] = [];
        for (let index = 1; index <= nunberOfRow; index++) {
            let xpath = this.responseTimeMetricsValueLocator(index);
            let endMetricsValue = await webActions.getElementText(xpath);
            responseTimeMetricsValue.push(endMetricsValue);
        }
        return responseTimeMetricsValue;
    }

    async searchInGanttSearchBox(item: string) {
        await webActions.waitForElementAttached(this.ganttSearchBoxLocator);
        await webActions.clickElement(this.ganttSearchBoxLocator);
        await webActions.enterElementText(this.ganttSearchBoxLocator, item);
        await util.delay(1000);
        await webActions.clickElement(this.ganttSearchBoxLocator);
        await webActions.keyPress(this.ganttSearchBoxLocator, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    async clickOnResetToDefault() {
        await webActions.clickElement(this.resetToDefaultLocator);
    }

    async clickOnDownload() {
        webActions.clickElement(this.downloadFileLocator);
    }

    async downloadFile(fileName:string): Promise<string> {
        let xpath = this.downLoadFileTypeLocator(fileName);
        let fileNAme = await webActions.downloadFile(xpath);
        return fileNAme;
    }

    async deleteFile(filePath) {
        await webActions.deleteFile(filePath);
    }

    async readData(nameOfColumn: string, rowCount: number, fileName: string) {
        var XLSX = require('xlsx');
        var workbook = XLSX.readFile('Downloads/' + fileName);
        const metricsColumn = [];
        var first_sheet_name = workbook.SheetNames[0];
        var address_of_cell = nameOfColumn;
        var worksheet = workbook.Sheets[first_sheet_name];
        const columnName = Object.keys(worksheet).find(key => worksheet[key].v === address_of_cell);
        let rowValue = parseInt(columnName.substring(2));
        let columnValue = columnName.substring(0, 2);
        for (let index = 1; index <= rowCount; index++) {
            let cellValue = columnValue + rowValue;
            for (let key in worksheet) {
                if (key.toString().includes(cellValue)) {
                    metricsColumn.push(worksheet[key].v);
                }
            }
            rowValue++;
        }
        return metricsColumn;
    }
    async getRowsCount(locator: string) {
        await this.page.waitForSelector(locator, { timeout: 5000 });
        let count = await this.page.$$(locator);
        return await count.length;
    }
    async getHostNameList(nunberOfHost: number) {
        let hostList: string[] = [];
        for (let index = 1; index <= nunberOfHost; index++) {
            let xpath = this.getHostLocator(index);
            let hostValue = await webActions.getElementText(xpath);
            hostList.push(hostValue);
        }
        return hostList;
    }


    async getFileNameList(nunberOfHost: number) {
        let hostList: string[] = [];
        for (let index = 1; index <= nunberOfHost; index++) {
            let xpath = this.getFileTypeLocator(index);
            let hostValue = await webActions.getElementText(xpath);
            hostList.push(hostValue);
        }
        return hostList;
    }
    async getHTMLFileTypeClassPropertyList(nunberOfitem: number) {
        let classProperty: string[] = [];
        for (let index = 1; index <= nunberOfitem; index++) {
            let classPropertyValue = await webActions.getElementAttributeValue(this.htmlFileTypeLocator, 'class');
            classProperty.push(classPropertyValue);
        }
        return classProperty;
    }

    async getFileIconClassPropertyList(nunberOfitem: number) {
        let classProperty: string[] = [];
        for (let index = 1; index <= nunberOfitem; index++) {
            let classPropertyValue = await webActions.getElementAttributeValue(this.htmlFileTypeLocator, 'class');
            classProperty.push(classPropertyValue);
        }
        return classProperty;
    }
    async getRequestProtocolList(nunberOfRow: number) {
        let protocolList: string[] = [];
        for (let index = 1; index <= nunberOfRow; index++) {
            let protocolValue = await webActions.getElementText(this.getProtocolValueLocator(index));
            protocolList.push(protocolValue);
        }
        return protocolList;
    }
    async getErrorMsgFromRowsContaingError(number: string) {
        let errorMsg: string[] = [];
        for (let index = 1; index <= number.length; index++) {
            let xpath = this.rowContainingErrorLocator(index)
            await webActions.clickElementJS(xpath);
            let errorMessage = await webActions.getElementText(this.errorMessageLocator);
            errorMsg.push(errorMessage);
        }
        return errorMsg;
    }

    async getTimingTabMetricsValue(timingTabMetrics: string[]) {
        let metricsValue: string[] = [];
        for (let index = 0; index < timingTabMetrics.length; index++) {
            let metric = timingTabMetrics[index]
            let xpath = this.timingTabMetricsValueLocator(metric);
            let value = await webActions.getElementText(xpath);
            await util.delay(1000);
            metricsValue.push(value);
        }
        return metricsValue;
    }
      async getTracePointValues(count: number) {
        let traceValue: string[] = [];
        for (let index = 1; index <= count; index++) {
            let xpath = this.tracepointValueLocator(index);
            let value = await webActions.getElementText(xpath);
            traceValue.push(value);
        }
        return traceValue;
    }
    async getIndicatorValues(count: number) {
        let indicatorValue: string[] = [];
        for (let index = 1; index <= count; index++) {
            let xpath = this.indicatorValueLocator(index);
            let value = await webActions.getElementText(xpath);
            indicatorValue.push(value);
        }
        return indicatorValue;
    }
    async getSelectedZoneValue(count: number) {
        let zoneValue: string[] = [];
        for (let index = 1; index <= count; index++) {
            let xpath = this.getZoneValueLocator(index);
            let value = await webActions.getElementText(xpath);
            zoneValue.push(value);
        }
        return zoneValue;
    }
    async getCount(locator: string) {
        await this.page.waitForSelector(locator, { timeout: 5000 });
        let count = await this.page.$$(locator);
        return await count.length;
    }
    async click(loc:string){
        await webActions.clickElement(loc)
    }
    async getElementText(locator:string){
        let text = await webActions.getElementText(locator)
        return text
    }
    async getPublicLink(){
        await webActions.hoverOnElement(this.shareButtonLocator)
        let link =  await webActions.getElementText('//span[contains(@class,"TextBoxCopyButton_copySection")]')
        return link
    }
    async selectZoneFilter(filterType:string,filterName:string){
        await this.clickOnFilterDropDown(filterType);
        await webActions.clickElement(this.getFileTypeFilterLocator(filterName));
    }
    async selectFileTypeFilter(filterType:string,filterName:string){
        await this.clickOnFilterDropDown(filterType);
        await webActions.clickElement(this.getFileTypeFilterLocator(filterName));
    }
    async selectRequestFilter(filterType:string,filterName:string){
        await this.clickOnFilterDropDown(filterType);
        await webActions.clickElement(this.getFileTypeFilterLocator(filterName));
    }

}
