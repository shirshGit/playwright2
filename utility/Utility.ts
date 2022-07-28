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
}