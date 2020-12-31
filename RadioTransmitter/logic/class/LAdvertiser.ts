import { ILAdvertiser } from "../interfaces/ILAdvertiser";
import { LogicException } from "../../shared/exceptions/logicexception";
import { Advertiser } from "../../shared/entityshared/Advertiser";
import { FactoryData } from "../../data/FactoryData";



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
    private  validateAdvertiser(validateadvertiser: Advertiser)
    {
    
        this.validateRut(validateadvertiser.RutAnn);
        if (validateadvertiser == null)
        {
            throw new LogicException("The Advertiser is empty ");
        }
        if (validateadvertiser.NomAnn.trim() === "")
        {
            throw new LogicException("The name cannot be empty");
        }
        if (validateadvertiser.DirAnn.trim() === "") {
            throw new LogicException("The address cannot be empty");
        }
        if (validateadvertiser.TelAnn.trim() === "") {
            throw new LogicException("The phone number cannot be empty");
        }
        if (!validateadvertiser.TelAnn.match(/^\d+$/)) {
            throw new LogicException("The phone number can only contains number");
        }
      
    }

    //---------
    public async getAdvertisers(): Promise<Advertiser[]> {
            var listad = await FactoryData.getDAdvertiser().getAdvertisers();
            return listad;
    }
    public async getAdvertiser(rut: number): Promise<Advertiser> {
        this.validateRut(rut);
        var searchadvertiser = await FactoryData.getDAdvertiser().getAdvertiser(rut);

        return searchadvertiser
    }
    public async getAdvertiserByNameLetter(expression: string): Promise<Advertiser[]> {
            if (expression.length == 0)
            {
                var lista = await FactoryData.getDAdvertiser().getAdvertisers();
                return lista;
            }
            var listexp = await FactoryData.getDAdvertiser().getAdvertisersByNameLetter(expression);
            return listexp;
    }
    public addAdvertiser(dtadvertiser: Advertiser): void {
        this.validateAdvertiser(dtadvertiser);
        FactoryData.getDAdvertiser().addAdvertiser(dtadvertiser);
    }
    public deleteAdvertiser(dtadvertiser: Advertiser): void {
        this.validateRut(dtadvertiser.RutAnn);
        FactoryData.getDAdvertiser().deleteAdvertiser(dtadvertiser);
    }
    public updateAdvertiser(dtadvertiser: Advertiser): void {
        this.validateAdvertiser(dtadvertiser);
        FactoryData.getDAdvertiser().updateAdvertiser(dtadvertiser);
    }
}
    
//Testing
//LAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)
//    });
//LAdvertiser.getInstance().getAdvertiserByNameLetter("").then(data => {
//        console.log(data)
//    });
//LAdvertiser.getInstance().getAdvertiser(555).then(data => {
//    console.log(data)

//    });
//let datatypeAdvertiser = new Advertiser(89878, "NewAdvertiser", "Venezuela 154 block 7", "545556546");
//LAdvertiser.getInstance().addAdvertiser(datatypeAdvertiser);
//console.log("Advertiser added");
//LAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)
//    });
//LAdvertiser.getInstance().deleteAdvertiser(datatypeAdvertiser);
//console.log("Advertiser deleted");

//LAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)
//    });
//LAdvertiser.getInstance().updateAdvertiser(datatypeAdvertiser);
//console.log("Advertiser updated");
//LAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)
//    });