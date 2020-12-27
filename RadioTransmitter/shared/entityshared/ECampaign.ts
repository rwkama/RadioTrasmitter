import { Campaign } from "./Campaign";
import { Emission } from "./Emission";
import { Advertiser } from "./Advertiser";

export class ECampaign extends Campaign {
   
    private _producer: string;
    public get producer(): string {
        return this._producer;
    }
    public set producer(value: string) {
        this._producer = value;
    }
    constructor(ctitle: string, cdatei: Date, cdatef: Date, cduration: number, cmentions: number, cadver: Advertiser, eproducer: string, clistem: Emission[]) {

        super( ctitle, cdatei, cdatef, cduration, cmentions, cadver,clistem);
        this.producer = eproducer;
    }
    public CalculatePrice(precio: number) {
        throw new Error("Method not implemented.");
    }
}