export class Advertiser
{
   private _rut: number;
    public get rut(): number {
        return this._rut;
    }
    public set rut(value: number) {
        this._rut = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _address: string;
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    private _telefono: string;
    public get telefono(): string {
        return this._telefono;
    }
    public set telefono(value: string) {
        this._telefono = value;
    }
   

    constructor(pRut: number, pNombre: string, pDireccion: string, pTelefono: string)
{
    this.rut = pRut;
    this.name = pNombre;
    this.address = pDireccion;
    this.telefono = pTelefono;
}

}
