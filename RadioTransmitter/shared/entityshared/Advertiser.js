"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Advertiser = void 0;
class Advertiser {
    constructor(pRut, pNombre, pDireccion, pTelefono) {
        this.rut = pRut;
        this.name = pNombre;
        this.address = pDireccion;
        this.telefono = pTelefono;
    }
    get rut() {
        return this._rut;
    }
    set rut(value) {
        this._rut = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(value) {
        this._telefono = value;
    }
}
exports.Advertiser = Advertiser;
console.log("asdd");
//# sourceMappingURL=Advertiser.js.map