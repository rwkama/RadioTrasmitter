import { ILCampaign } from "../interfaces/ILCampaign";
import { LogicException } from "../../shared/exceptions/logicexception";
import { Campaign } from "../../shared/entityshared/Campaign";
import { OwnCampaign } from "../../shared/entityshared/OwnCampaign";
import { ECampaign } from "../../shared/entityshared/ECampaign";

export class LCampaign implements ILCampaign{

    private static instancia: LCampaign;
    private constructor() { }
    public static getInstance(): LCampaign {
        if (!LCampaign.instancia) {
            LCampaign.instancia = new LCampaign();
        }

        return LCampaign.instancia;
    }
    //Validations
    private validateTitle(title: string) {
        if (title.trim() === "") {
            throw new LogicException("The title cannot be empty");
        }
    }
    private validateCampaign(validateccampaign: Campaign) {

        this.validateTitle(validateccampaign.title);
        if (validateccampaign == null) {
            throw new LogicException("The Campaign is empty ");
        }
        if (validateccampaign.advert === null) {
            throw new LogicException("The Advertiser cannot be  empty");
        }
        if (validateccampaign.mentions<1) {
            throw new LogicException("The number of mentions must be greater than 0 ");
        }
        if (validateccampaign.duration <1) {
            throw new LogicException("The duration of the spot in seconds must be greater than 0");
        }
        if (validateccampaign.datei === null) {
            throw new LogicException("The start date cannot be empty");
        }
        if (validateccampaign.datef === null) {
            throw new LogicException("The end date cannot be empty");
        }
        if (validateccampaign.datei >= validateccampaign.datef) {
            throw new LogicException("The end date must be greater than the start date of the campaign");
        }
        if (validateccampaign instanceof OwnCampaign) {
            let owncampaign = validateccampaign as OwnCampaign;
            if (owncampaign.cost<1)
            {
                throw new LogicException("The production cost of the own campaign must be greater than 0");
            }
        }
        if (validateccampaign instanceof ECampaign) {
            let externalcampaign = validateccampaign as ECampaign;
            if (externalcampaign.producer.trim()==="") {
                throw new LogicException("The producer of the external campaign cannot be empty");
            }
        }
       
    }
    private validateEmission(validateemision: Campaign) {

        let lastelementemision = validateemision.listemision[validateemision.listemision.length - 1];
        this.validateTitle(validateemision.title);
        if (lastelementemision.programem===null) {
            throw new LogicException("The Program is empty ");
        }
        if (lastelementemision.dateem === null) {
            throw new LogicException("The mention date cannot be empty ");
        }
        if (validateemision.datei > lastelementemision.dateem) {
            throw new LogicException("The mention date cannot be less than the campaign start date ");
        }
        if (validateemision.datef < lastelementemision.dateem) {
            throw new LogicException("The mention date cannot be greater than the end date of the campaign ");
        }
        if (lastelementemision.dateem.) {
            throw new LogicException("The mention date cannot be greater than the end date of the campaign ");
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
        if (expression.length == 0) {
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