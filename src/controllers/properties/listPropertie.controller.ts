import { Request, Response } from "express";
import { listPropertieService } from "../../services/properties/listPropertie.service";

export const listPropertieController = async (req:Request, res:Response)=>{
    const properties = await listPropertieService()

    return res.status(200).json(properties)
}