
export abstract class Campaign
{
   
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    private _datei: Date;
    public get datei(): Date {
        return this._datei;
    }
    public set datei(value: Date) {
        this._datei = value;
    }
    private _datef: Date;
    public get datef(): Date {
        return this._datef;
    }
    public set datef(value: Date) {
        this._datef = value;
    }
    private _duration: number;
    public get duration(): number {
        return this._duration;
    }
    public set duration(value: number) {
        this._duration = value;
    }
    private _adver: number;
    public get adver(): number {
        return this._adver;
    }
    public set adver(value: number) {
        this._adver = value;
    }
    private _mentions: number;
    public get mentions(): number {
        return this._mentions;
    }
    public set mentions(value: number) {
        this._mentions = value;
    }

    constructor(ctitle: string, cdatei: Date, cdatef: Date, cduration: number, cmentions: number, cadver: number)
    {
       
        this.title = ctitle;
        this.datei = cdatei;
        this.datef = cdatef;
        this.duration = cduration;
        this.mentions = cmentions;
        this.adver = cadver;
    }
    
}