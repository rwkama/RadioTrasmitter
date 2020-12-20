"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryData = void 0;
const DAdvertiser_1 = require("./class/DAdvertiser");
class FactoryData {
    static getDAdvertiser() {
        return (DAdvertiser_1.DAdvertiser.getInstance());
    }
}
exports.FactoryData = FactoryData;
//# sourceMappingURL=FactoryData.js.map