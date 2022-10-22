import { Request,Response } from "express";
import { createCategorieService } from "../../services/categories/createCategorie.service";

export const createCategorieController = async (req:Request, res:Response)=>{

        const name = req.body.name
        const categorie = await createCategorieService(name)
        return res.status(201).json(categorie)
}