import { Campaign } from "./Campaign";

export class ECampaign extends Campaign {
    private producer: string;
   


    constructor( ctitle: string, cdatei: Date, cdatef: Date, cduration: number, cmentions: number, cadver: number, eproducer: string) {

        super( ctitle, cdatei, cdatef, cduration, cmentions, cadver);
        this.producer = eproducer;
    }
}