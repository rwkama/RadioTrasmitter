"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emission = void 0;
class Emission {
    constructor(emtitle, enameprog, edateemi) {
        this.titlecampaign = emtitle;
        this.nameprogram = enameprog;
        this.dateem = edateemi;
    }
    get titlecampaign() {
        return this._titlecampaign;
    }
    set titlecampaign(value) {
        this._titlecampaign = value;
    }
    get nameprogram() {
        return this._nameprogram;
    }
    set nameprogram(value) {
        this._nameprogram = value;
    }
    get dateem() {
        return this._dateem;
    }
    set dateem(value) {
        this._dateem = value;
    }
}
exports.Emission = Emission;
//# sourceMappingURL=Emission.js.map