import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import { createPropertieService } from "../../services/properties/createPropertie.service";

export const createPropertieController = async (req:Request, res:Response)=>{
    const data:IPropertyRequest = req.body
    const address= req.body.address
    const categoId = req.body.categoId
    

    const propertie = await createPropertieService(data,address,categoId)

    return res.status(201).json(propertie)
}