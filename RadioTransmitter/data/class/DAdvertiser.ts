import { IDAdvertiser } from "../interfaces/IDAdvertiser";
import { Conexion } from "./Conection";
import { Advertiser } from "../../shared/entityshared/Advertiser";
import { DataException } from "../../shared/exceptions/dataexception";

export class DAdvertiser implements IDAdvertiser {

    private static instancia: DAdvertiser;
    private constructor() { }
    public static getInstance(): DAdvertiser {
        if (!DAdvertiser.instancia) {
            DAdvertiser.instancia = new DAdvertiser();
        }

        return DAdvertiser.instancia;
    }
    public async getAdvertisers(): Promise<Advertiser[]> {
      

        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("RadioTransmitter").collection("Advertiser");
            const result = await collection.find({}).toArray();

            let array = [];
            for (var p of result) {
                var obj = new Advertiser(p.RutAn,p.NomAn,p.DirAn,p.TelAn)
                array.push(obj);
            }

            return array;
            cn.close();

        }
        catch (e) {
            throw new DataException("Advertisers could not be listed" + e.message);
        }

    }
    public async getAdvertiser(rut:number): Promise<Advertiser> {


        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("RadioTransmitter").collection("Advertiser");
            const p = await collection.findOne({RutAn:rut});

            
            var obj = new Advertiser(p.RutAn, p.NomAn, p.DirAn, p.TelAn)
            return obj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Advertiser could not be searched" + e.message);
        }

    }
    public async addAdvertiser(dtadvertiser: Advertiser) {
        try {

           let cn = await Conexion.uri().connect();
            const coladvert = cn.db("RadioTransmitter").collection("Advertiser");
            const result = await coladvert.insertOne(dtadvertiser);

            
            cn.close();

        }
        catch (e) {
            throw new DataException("Advertiser could not be added" + e.message);
        }

    }
    public async deleteAdvertiser(dtadvertiser: Advertiser) {
        try {

            let cn = await Conexion.uri().connect();
            const coladvert = cn.db("RadioTransmitter").collection("Advertiser");
            const result = await coladvert.deleteOne(dtadvertiser);

            
            cn.close();

        }
        catch (e) {
            throw new DataException("Advertiser could not be deleted" + e.message);
        }

    }
    public async updateAdvertiser(dtadvertiser: Advertiser) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { RutAn: dtadvertiser.RutAnn };
            var newvalues = { $set: { NomAn: dtadvertiser.NomAnn, DirAn: dtadvertiser.DirAnn,TelAn:dtadvertiser.TelAnn } };
            const coladvert = cn.db("RadioTransmitter").collection("Advertiser");
            const result = await coladvert.updateOne(query,newvalues);


            cn.close();

        }
        catch (e) {
            throw new DataException("Advertiser could not be updated" + e.message);
        }

    }


}
//TESTING
//var dtadv = new Advertiser(555, "dfhdfhfdh", "sasafasfasf", "0867686776");

//DAdvertiser.getInstance().addAdvertiser(dtadv).then(data => {
//    console.log(data)
//    DAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)
     

//    });
  
//});

//DAdvertiser.getInstance().deleteAdvertiser(dtadv).then(data => {
//    console.log(data)
//    DAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)


//    });

//});

//DAdvertiser.getInstance().updateAdvertiser(dtadv).then(data => {
//    console.log(data)
//    DAdvertiser.getInstance().getAdvertisers().then(data => {
//        console.log(data)


//    });

//});

  //DAdvertiser.getInstance().getAdvertiser(555).then(data => {
  //      console.log(data)


  //  });


