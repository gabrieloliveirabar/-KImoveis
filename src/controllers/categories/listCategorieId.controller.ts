import { Request,Response } from "express";
import { listCategorieIdService } from "../../services/categories/listCategorieId.service";


export const listCategorieIdController = async (req:Request, res:Response)=>{
    const id = req.params.id
    const categorie = await listCategorieIdService(id)

    
    return res.status(200).json(categorie)
}