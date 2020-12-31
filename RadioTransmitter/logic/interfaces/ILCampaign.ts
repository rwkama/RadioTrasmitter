import { Campaign } from "../../shared/entityshared/Campaign";

export interface ILCampaign {
    getOwnCampaigns(): Promise<Campaign[]>;
    getOCampaignsByNameLetter(expression: string): Promise<Campaign[]>;
    getOCampaign(title: string): Promise<Campaign>;
    addOCampaign(dtoc: Campaign);
    deleteOCampaign(dtoc: Campaign);
    updateOCampaign(dtoc: Campaign);
    addOCEmission(dtec: Campaign)
}
