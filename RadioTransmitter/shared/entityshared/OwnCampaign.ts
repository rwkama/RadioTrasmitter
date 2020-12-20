import { Campaign } from "./Campaign";
import { Emission } from "./Emission";
import { Advertiser } from "./Advertiser";

export class OwnCampaign extends Campaign
{
     private _cost: number;
    public get cost(): number {
        return this._cost;
    }
    public set cost(value: number) {
        this._cost = value;
    }


    constructor(ctitle: string, cdatei: Date, cdatef: Date, cduration: number, cmentions: number, cadver: Advertiser, owncost: number, ownlistem: Emission[])
    {

        super(ctitle, cdatei, cdatef, cduration, cmentions, cadver, ownlistem);
        this.cost = owncost;
    }
}