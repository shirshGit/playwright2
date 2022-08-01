import { Reporter, TestCase, TestError, TestResult, TestStep } from "@playwright/test/reporter";
import { Page } from "playwright";

export default class CustomReporterConfig implements Reporter {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    onTestBegin(test: TestCase): void {
        console.log(`Test Case Started : ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult): void {
        // if(result.status === 'failed')
        // {
        //     this.page.screenshot({path: test.title, fullPage:true});
        // }
        console.log(`Test Case Completed : ${test.title} Status : ${result.status}`);
    }

    onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
        if (step.category === `test.step`) {
            console.log(`Executing Step : ${step.title}`);
        }
    }


    onError(error: TestError): void {
        console.log(error.message);
    }
}