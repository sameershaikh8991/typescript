interface ISampleClassInterface {
    sampleVariable: string;
    sampleMethod(): void;
    optionalVariable?: string;
   }


class sampleClass implements ISampleClassInterface{
    public sampleVariable: string;
    private answerToLifeTheUniverseAndEverything: number;
    sampleMethod(): void {
        throw new Error("Method not implemented.");
    }
    constructor() {
        this.sampleVariable = 'string value';
        this.answerToLifeTheUniverseAndEverything = 42;
        }
    
}