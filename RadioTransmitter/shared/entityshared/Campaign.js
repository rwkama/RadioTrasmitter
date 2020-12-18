"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campaign = void 0;
class Campaign {
    constructor(ctitle, cdatei, cdatef, cduration, cmentions, cadver) {
        this.title = ctitle;
        this.datei = cdatei;
        this.datef = cdatef;
        this.duration = cduration;
        this.mentions = cmentions;
        this.adver = cadver;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get datei() {
        return this._datei;
    }
    set datei(value) {
        this._datei = value;
    }
    get datef() {
        return this._datef;
    }
    set datef(value) {
        this._datef = value;
    }
    get duration() {
        return this._duration;
    }
    set duration(value) {
        this._duration = value;
    }
    get adver() {
        return this._adver;
    }
    set adver(value) {
        this._adver = value;
    }
    get mentions() {
        return this._mentions;
    }
    set mentions(value) {
        this._mentions = value;
    }
}
exports.Campaign = Campaign;
//# sourceMappingURL=Campaign.js.map