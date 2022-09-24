import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";
export class Utility {


    async generateRandomText(noOfChars: number): Promise<string> {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < noOfChars; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }


    async generateRandomNumber(noOfChars: number): Promise<string> {
        var result = '';
        var characters = '1234567890';
        var charactersLength = characters.length;
        for (var i = 0; i < noOfChars; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    async delay(time: number): Promise<void> {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }


    async getDate(addDays: number, format: string = '') {
        let getDate = await this.getTodaysDate();
        let setDate = getDate.setDate(getDate.getDate() + (addDays));
        let getDateInFormat;
        if (format === 'mmm dd yyyy') {
            //following date formate can be used for explorer,control center, WPT {e.g. "Sep 07, 2022"}
            getDateInFormat = new Date(setDate).toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' });
        }
        else {
            //following date formate can be used for smartboard, Records {e.g. "9/21/2022"}
            getDateInFormat = new Date(setDate).toLocaleString('en-us', { month: 'numeric', day: 'numeric', year: 'numeric' });
        }
        return getDateInFormat;
    }

    async getTodaysDate() {
        let getDate = new Date().toUTCString();
        let setDate = new Date(getDate);
        return setDate;
    }


}