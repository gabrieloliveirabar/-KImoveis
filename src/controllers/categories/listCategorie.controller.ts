import { Request, Response } from "express";
import { listCategorieService } from "../../services/categories/listCategorie.service";

export const listCategorieController = async (req:Request, res:Response)=>{
    const categorie = await listCategorieService()

    return res.status(200).json(categorie)
}