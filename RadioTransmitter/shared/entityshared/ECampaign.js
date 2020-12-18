"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECampaign = void 0;
const Campaign_1 = require("./Campaign");
class ECampaign extends Campaign_1.Campaign {
    constructor(ctitle, cdatei, cdatef, cduration, cmentions, cadver, eproducer) {
        super(ctitle, cdatei, cdatef, cduration, cmentions, cadver);
        this.producer = eproducer;
    }
}
exports.ECampaign = ECampaign;
//# sourceMappingURL=ECampaign.js.map