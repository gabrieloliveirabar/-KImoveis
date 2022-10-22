import { Router } from "express";

import { createCategorieController } from "../controllers/categories/createCategorie.controller";
import { listCategorieController } from "../controllers/categories/listCategorie.controller";
import { listCategorieIdController } from "../controllers/categories/listCategorieId.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { verifyIsAdmMiddleware } from "../middlewares/verifyIsAdm.middleware";

export const categorieRouter = Router();

categorieRouter.post("",verifyAuthUserMiddleware,verifyIsAdmMiddleware,createCategorieController)
categorieRouter.get("", listCategorieController)
categorieRouter.get("/:id/properties", listCategorieIdController)