import { ILProgram } from "../interfaces/ILProgram";
import { LogicException } from "../../shared/exceptions/logicexception";
import { Program } from "../../shared/entityshared/Program";
import { FactoryData } from "../../data/FactoryData";

export class LProgram implements ILProgram {

    private static instancia: LProgram;
    private constructor() { }
    public static getInstance(): LProgram {
        if (!LProgram.instancia) {
            LProgram.instancia = new LProgram();
        }

        return LProgram.instancia;
    }
    //Validations
    private validateName(name: string)
    {
        if (name.trim() === "") {
            throw new LogicException("The name cannot be empty");
        }
    }
    private validateProgram(validateprogram: Program)
    {
    
        this.validateName(validateprogram.name);
        if (validateprogram == null)
        {
            throw new LogicException("The Program is empty ");
        }
        if (validateprogram.producer.trim() === "")
        {
            throw new LogicException("The producer cannot be empty");
        }
        if (validateprogram.type.trim() === "") {
            throw new LogicException("The type cannot be empty");
        }
        if (validateprogram.pricexseg<1) {
            throw new LogicException("The price per second must be greater than 0");
        }
    }

    //---------
    public async getPrograms(): Promise<Program[]> {
        var listaprogram = await FactoryData.getDProgram().getPrograms();
        return listaprogram;  
    }
    public async getProgram(name: string): Promise<Program> {
        this.validateName(name);
        var searchprogram = await FactoryData.getDProgram().getProgram(name);

        return searchprogram
    }
    public async getProgramsByNameLetter(expression: string): Promise<Program[]> {
            if (expression.length == 0)
            {
                var lista = await FactoryData.getDProgram().getPrograms();
                return lista;
            }
            var listexp = await FactoryData.getDProgram().getProgramsByNameLetter(expression);
            return listexp;
    }
    public addProgram(dtprogram: Program): void {
        this.validateProgram(dtprogram);
        if (dtprogram.type == "Musical" || dtprogram.type == "Varieties" || dtprogram.type == "Journalistic") {
            FactoryData.getDProgram().addProgram(dtprogram);
        }
        else { throw new LogicException("The program type must be Musical, Journalistic, or Varieties only");}
       
   
    }
    public deleteProgram(dtprogram: Program): void {
        this.validateName(dtprogram.name);
        FactoryData.getDProgram().deleteProgram(dtprogram);
    }
    public updateProgram(dtprogram: Program): void {
        this.validateProgram(dtprogram);
        if (dtprogram.type == "Musical" || dtprogram.type == "Varieties" || dtprogram.type == "Journalistic") {
            FactoryData.getDProgram().updateProgram(dtprogram);
        }
        else { throw new LogicException("The program type must be Musical, Journalistic, or Varieties only"); }
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
let datatypeProgram = new Program("NewProgram", "NewProducer", "Journalistic", 256);
//LProgram.getInstance().addProgram(datatypeProgram);
//console.log("Program added");
//LProgram.getInstance().getPrograms().then(data => {
//        console.log(data)
//    });
//LProgram.getInstance().deleteProgram(datatypeProgram);
//console.log("program deleted");
//LProgram.getInstance().getPrograms().then(data => {
//        console.log(data)
//    });
//LProgram.getInstance().updateProgram(datatypeProgram);
//console.log("Program updated");
//LProgram.getInstance().getPrograms().then(data => {
//        console.log(data)
//    });