"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryData = void 0;
const DAdvertiser_1 = require("./class/DAdvertiser");
const DProgram_1 = require("./class/DProgram");
class FactoryData {
    static getDAdvertiser() {
        return (DAdvertiser_1.DAdvertiser.getInstance());
    }
    static getDProgram() {
        return (DProgram_1.DProgram.getInstance());
    }
}
exports.FactoryData = FactoryData;
//# sourceMappingURL=FactoryData.js.map