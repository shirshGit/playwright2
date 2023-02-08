import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';
import { Browser, BrowserContext, expect, Page, TestInfo } from '@playwright/test';
import { Workbook } from 'exceljs';
import { testConfig } from '../testConfig';
import * as path from 'path';
import { ControlCenter } from '@objects/ControlCenter';
import { TestResult } from '@playwright/test/reporter';
import { Utility } from "@util/Utility";

const waitForElement = testConfig.waitTimeForElement;
const waitForPageLoad = testConfig.waitTimeForPageLoad;
let util : Utility;

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToURL(url: string) {
        this.page.goto(url);
    }

    async decipherPassword(): Promise<string> {
        const key = `SECRET`;
        //ENCRYPT
        // const cipher = CryptoJS.AES.encrypt('demouat',key);
        // console.log(cipher.toString());
        return CryptoJS.AES.decrypt(testConfig.password, key).toString(CryptoJS.enc.Utf8);
    }

    async waitForElementAttached(locator: string): Promise<void> {
        await this.page.waitForSelector(locator , {});
    }

    async waitForPageNavigation(event: string): Promise<void> {
        switch (event.toLowerCase()) {
            case `networkidle`:
                await this.page.waitForNavigation({ waitUntil: `networkidle`, timeout: waitForPageLoad });
                break;
            case `load`:
                await this.page.waitForNavigation({ waitUntil: `load`, timeout: waitForPageLoad });
                break;
            case `domcontentloaded`:
                await this.page.waitForNavigation({ waitUntil: `domcontentloaded`, timeout: waitForPageLoad });
        }
    }

   

    async clickElement(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }

    async selectLocatorContainsText(locator: string, text: string) {
        await this.page.locator(locator, { hasText: text }).click();
    }

    async clickElementJS(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.$eval(locator, (element: HTMLElement) => element.click());
    }

    async boundingBoxClickElement(locator: string): Promise<void> {
        const elementHandle = await this.page.$(locator);
        const box = await elementHandle.boundingBox();
        await this.page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    }

    async enterElementText(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.fill(locator, text);
    }
    
    
    async dragAndDrop(dragElementLocator: string, dropElementLocator: string): Promise<void> {
        await this.waitForElementAttached(dragElementLocator);
        await this.waitForElementAttached(dropElementLocator);
        await this.page.dragAndDrop(dragElementLocator, dropElementLocator);
    }

    async selectOptionFromDropdown(locator: string, option: string): Promise<void> {
        await this.waitForElementAttached(locator);
        const selectDropDownLocator = await this.page.$(locator);
        selectDropDownLocator.type(option);
    }

    async getTextFromWebElements(locator: string): Promise<string[]> {
        await this.waitForElementAttached(locator);
        return this.page.$$eval(locator, elements => elements.map(item => (item as HTMLElement).innerText));
    }

    async getTextFromWebElementsUsingSelector(element: string) {
        const elements = this.page.locator(element);
        const texts = elements.evaluateAll(list => list.map(loc => (loc as HTMLElement).innerText))
        return texts;
    }

    async downloadFile(locator: string): Promise<string> {
        const [download] = await Promise.all([
            this.page.waitForEvent(`download`),
            this.page.click(locator)
        ]);
        await download.saveAs(path.join(__dirname, `../Downloads`, download.suggestedFilename()));
        return download.suggestedFilename();
    }

    async keyPress(locator: string, key: string): Promise<void> {
        this.page.press(locator, key);
    }

    async onlyKeyPress(key: string): Promise<void> {
        this.page.keyboard.press("Enter", { delay: 500 });
    }

    async readDataFromExcel(fileName: string, sheetName: string, rowNum: number, cellNum: number): Promise<string> {
        const workbook = new Workbook();
        return workbook.xlsx.readFile(`./Downloads/${fileName}`).then(function () {
            const sheet = workbook.getWorksheet(sheetName);
            return sheet.getRow(rowNum).getCell(cellNum).toString();
        });
    }

    async readValuesFromTextFile(filePath: string): Promise<string> {
        return fs.readFileSync(`${filePath}`, `utf-8`);
    }

    async writeDataIntoTextFile(filePath: number | fs.PathLike, data: string | NodeJS.ArrayBufferView): Promise<void> {
        fs.writeFile(filePath, data, (error) => {
            if (error)
                throw error;
        });
    }

    
    async getElementText(locator: string): Promise <string> {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.textContent(locator);
        return textValue;
    }


    async verifyNewWindowUrl(context: BrowserContext, locator: string, urlText: string): Promise<void> {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await this.page.click(locator)
        ])
        await newWindow.waitForLoadState("load");
        expect(newWindow.url()).toContain(urlText);
        await newWindow.close();
    }

    async verifyJSElementValue(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.$eval(locator, (element: HTMLInputElement) => element.value);
        expect(textValue.trim()).toBe(text);
    }

    async verifyElementIsDisplayedWithErrorMessage(locator: string, errorMessage: string): Promise<void> {
        await this.page.waitForSelector(locator, { state: `visible`, timeout: waitForElement })
            .catch(() => { throw new Error(`${errorMessage}`); });
    }

    async getNoOfElementsPresentInPage(locator: string) {
        let noOfElements = await (await this.page.$$(locator)).length;
        let totalCount: number = +noOfElements.toString();
        return totalCount;
    }

    async verifyElementIsPresent(locator: string): Promise<void> {
        await expect(this.page.locator(locator)).toBeGreaterThan(0);
    }

    async newWindowHandle(context: BrowserContext, locator: string) {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await this.page.click(locator)
        ])

        await newWindow.waitForLoadState("load");
        return newWindow;
    }

    async getElementAttributeValue(selector: string, attribute: string): Promise<string> {
        const attributeVal = await (await this.page.$(selector)).getAttribute(attribute);
        return attributeVal;
    }

    async hoverOnElement(element: string) {
        await this.page.hover(element, { force: true });
    }

    async takeFullPageScreenShot(testInfo: TestInfo) {
        var screenshotname = './test-results/' + testInfo.title + '.png';
        await this.page.screenshot({ path: screenshotname, fullPage: true });
    }

    async getCurrentPageUrl() {
        let url = await this.page.url();
        return url;
    }

    async clearTextByBtnPress(loc : string){
        await this.clickElement(loc);
        await this.page.locator(loc).press("Control+KeyA");
        await this.page.locator(loc).press("Backspace");
    }

    async clearTextField(loc : string){
        await this.clickElement(loc);
        await this.enterElementText(loc,'');
    }

    // async wait(){
    //     await util.delay(5000);
    // }
}