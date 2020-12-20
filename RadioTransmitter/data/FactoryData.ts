import { IDAdvertiser } from "./interfaces/IDAdvertiser";
import { DAdvertiser } from "./class/DAdvertiser";

export class FactoryData {
    public static getDAdvertiser(): IDAdvertiser {
        return (DAdvertiser.getInstance());
    }
}
