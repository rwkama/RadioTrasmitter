import { IDAdvertiser } from "./interfaces/IDAdvertiser";
import { DAdvertiser } from "./class/DAdvertiser";
import { IDProgram } from "./interfaces/IDProgram";
import { DProgram } from "./class/DProgram";

export class FactoryData {
    public static getDAdvertiser(): IDAdvertiser {
        return (DAdvertiser.getInstance());
    }
    public static getDProgram(): IDProgram {
        return (DProgram.getInstance());
    }
}
