"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LAdvertiser = void 0;
const logicexception_1 = require("../../shared/exceptions/logicexception");
const FactoryData_1 = require("../../data/FactoryData");
class LAdvertiser {
    constructor() { }
    static getInstance() {
        if (!LAdvertiser.instancia) {
            LAdvertiser.instancia = new LAdvertiser();
        }
        return LAdvertiser.instancia;
    }
    //Validations
    validateRut(rut) {
        if (rut < 1) {
            throw new logicexception_1.LogicException("The rut must be greater than or equal to 1");
        }
    }
    //---------
    getAdvertisers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var listad = yield FactoryData_1.FactoryData.getDAdvertiser().getAdvertisers();
                return listad;
            }
            catch (e) {
                throw new logicexception_1.LogicException("Advertisers could not be listed" + e.message);
            }
        });
    }
    getAdvertiserByNameLetter(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (expression.length == 0) {
                    var listad = yield FactoryData_1.FactoryData.getDAdvertiser().getAdvertisers();
                    return listad;
                }
                var listexp = yield FactoryData_1.FactoryData.getDAdvertiser().getAdvertisersByNameLetter(expression);
                return listexp;
            }
            catch (e) {
                throw new logicexception_1.LogicException("Advertisers could not be listed" + e.message);
            }
        });
    }
    getAdvertiser(rut) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateRut(rut);
            var search = yield FactoryData_1.FactoryData.getDAdvertiser().getAdvertiser(rut);
            return search;
        });
    }
}
exports.LAdvertiser = LAdvertiser;
//Testing
//LAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)
//    });
//LAdvertiser.getInstance().getAdvertiserByNameLetter("").then(data => {
//        console.log(data)
//    });
LAdvertiser.getInstance().getAdvertiser(0).then(data => {
    console.log(data);
});
//# sourceMappingURL=LAdvertiser.js.map