"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnCampaign = void 0;
const Campaign_1 = require("./Campaign");
class OwnCampaign extends Campaign_1.Campaign {
    constructor(ctitle, cdatei, cdatef, cduration, cmentions, cadver, owncost) {
        super(ctitle, cdatei, cdatef, cduration, cmentions, cadver);
        this.cost = owncost;
    }
    get cost() {
        return this._cost;
    }
    set cost(value) {
        this._cost = value;
    }
}
exports.OwnCampaign = OwnCampaign;
//# sourceMappingURL=OwnCampaign.js.map