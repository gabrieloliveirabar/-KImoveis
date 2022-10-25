import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import { createPropertieService } from "../../services/properties/createPropertie.service";

export const createPropertieController = async (req:Request, res:Response)=>{
    const data:IPropertyRequest = req.body
    const address= req.body.address
    const categoryId = req.body.categoryId
    

    const propertie = await createPropertieService(data,address,categoryId)

    return res.status(201).json(propertie)
}