import { qadata } from "@testData/qadata";
import { stagedata } from "@testData/stagingdata";

export class DataForEnv {

    async getValueOfTheParameter(data: string): Promise<string> {

        if (process.env.ENV === 'qa') {
            return qadata[data];
        }
        else if (process.env.ENV === 'stage') {
            return stagedata[data];
        }
    }

    

}