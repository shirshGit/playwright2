import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";
export class Utility{
    
    
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
    
    //this method will retuen date in the formate "Sep 07, 2022"
    async getCCTestDetailPageDateFormate(date1 : number ){
         let date2 = new Date(date1).toLocaleString('en-us',{month:'short', day: 'numeric', year:'numeric'});
         return date2;
    }

    async getTodaysDate(){
        let date1 =new Date().toUTCString();
        let date2 = new Date(date1);
        return date2;
    }

    
}