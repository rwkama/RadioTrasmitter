import { ILAdvertiser } from "../interfaces/ILAdvertiser";

export class LAdvertiser implements ILAdvertiser {

    private static instancia: LAdvertiser;
    private constructor() { }
    public static getInstance(): LAdvertiser {
        if (!LAdvertiser.instancia) {
            LAdvertiser.instancia = new DAdvertiser();
        }

        return LAdvertiser.instancia;
    }