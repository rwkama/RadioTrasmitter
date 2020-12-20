"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECampaign = void 0;
const Campaign_1 = require("./Campaign");
class ECampaign extends Campaign_1.Campaign {
    constructor(ctitle, cdatei, cdatef, cduration, cmentions, cadver, eproducer, clistem) {
        super(ctitle, cdatei, cdatef, cduration, cmentions, cadver, clistem);
        this.producer = eproducer;
    }
    get producer() {
        return this._producer;
    }
    set producer(value) {
        this._producer = value;
    }
}
exports.ECampaign = ECampaign;
//# sourceMappingURL=ECampaign.js.map