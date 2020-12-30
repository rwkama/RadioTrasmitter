import { ILAdvertiser } from "./interfaces/ILAdvertiser";
import { LAdvertiser } from "./class/LAdvertiser";
import { ILProgram } from "./interfaces/ILProgram";
import { LProgram } from "./class/LProgram";


export class FactoryLogic {
    public static getLogicAdvertiser(): ILAdvertiser {
        return (LAdvertiser.getInstance());
    }
    public static getLogicProgram(): ILProgram {
        return (LProgram.getInstance());
    }
   
}
