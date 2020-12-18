export class Emission {
    private _titlecampaign: string;
    public get titlecampaign(): string {
        return this._titlecampaign;
    }
    public set titlecampaign(value: string) {
        this._titlecampaign = value;
    }
    private _nameprogram: string;
    public get nameprogram(): string {
        return this._nameprogram;
    }
    public set nameprogram(value: string) {
        this._nameprogram = value;
    }
    private _dateem: Date;
    public get dateem(): Date {
        return this._dateem;
    }
    public set dateem(value: Date) {
        this._dateem = value;
    }
    constructor(emtitle: string, enameprog: string,edateemi:Date) {

        this.titlecampaign = emtitle;
        this.nameprogram = enameprog;
        this.dateem = edateemi;
      
    }



}
