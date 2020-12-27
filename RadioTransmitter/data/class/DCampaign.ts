import { IDCampaign } from "../interfaces/IDCampaign";
import { Campaign } from "../../shared/entityshared/Campaign";
import { Conexion } from "./Conection";
import { DataException } from "../../shared/exceptions/dataexception";

export class DCampaign implements IDCampaign {

    private static instancia: DCampaign;
    private constructor() { }
    public static getInstance(): DCampaign {
        if (!DCampaign.instancia) {
            DCampaign.instancia = new DCampaign();
        }

        return DCampaign.instancia;
    }
    public async addEmission(dtcam: Campaign) {
        try {
           
            let cn = await Conexion.uri().connect();
            const coladvert = cn.db("RadioTransmitter").collection("Emission");
            const result = await coladvert.insertOne(dtcam);


            cn.close();

        }
        catch (e) {
            throw new DataException("Emission could not be added" + e.message);
        }

    }
    //addEmsision

}