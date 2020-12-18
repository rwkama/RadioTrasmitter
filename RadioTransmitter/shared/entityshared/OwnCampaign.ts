import { Campaign } from "./Campaign";

export class OwnCampaign extends Campaign
{
     private _cost: number;
    public get cost(): number {
        return this._cost;
    }
    public set cost(value: number) {
        this._cost = value;
    }


    constructor( ctitle: string, cdatei: Date, cdatef: Date, cduration: number, cmentions: number, cadver: number, owncost: number)
    {
       
        super( ctitle, cdatei, cdatef, cduration, cmentions, cadver);
        this.cost = owncost;
    }
}