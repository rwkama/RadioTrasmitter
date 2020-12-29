import { ILAdvertiser } from "../interfaces/ILAdvertiser";
import { LogicException } from "../../shared/exceptions/logicexception";
import { Advertiser } from "../../shared/entityshared/Advertiser";
import { FactoryData } from "../../data/FactoryData";
import { log } from "util";

export class LAdvertiser implements ILAdvertiser {

    private static instancia: LAdvertiser;
    private constructor() { }
    public static getInstance(): LAdvertiser {
        if (!LAdvertiser.instancia) {
            LAdvertiser.instancia = new LAdvertiser();
        }

        return LAdvertiser.instancia;
    }
    //Validations
    private validateRut(rut: number)
    {
        if (rut < 1) {
            throw new LogicException("The rut must be greater than or equal to 1");
        }
    }
   
    //---------
    public async getAdvertisers(): Promise<Advertiser[]> {


        try {
            var listad = await FactoryData.getDAdvertiser().getAdvertisers();
            return listad;
           
        }
        catch (e) {
            throw new LogicException("Advertisers could not be listed" + e.message);
        }

    }
    public async getAdvertiserByNameLetter(expression: string): Promise<Advertiser[]> {


        try {
            if (expression.length == 0)
            {
                var listad = await FactoryData.getDAdvertiser().getAdvertisers();
                return listad;
            }
            var listexp = await FactoryData.getDAdvertiser().getAdvertisersByNameLetter(expression);
            return listexp;

        }
        catch (e) {
            throw new LogicException("Advertisers could not be listed" + e.message);
        }

    }
    public async getAdvertiser(rut: number): Promise<Advertiser> {
        this.validateRut(rut);
        var search = await FactoryData.getDAdvertiser().getAdvertiser(rut);
        
        return search
    }
}
    
//Testing
//LAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)
//    });
//LAdvertiser.getInstance().getAdvertiserByNameLetter("").then(data => {
//        console.log(data)
//    });
LAdvertiser.getInstance().getAdvertiser(0).then(data => {
    console.log(data)

    });