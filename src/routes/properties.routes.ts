import { Router } from "express";
import { createPropertieController } from "../controllers/properties/createPropertie.controller";
import { listPropertieController } from "../controllers/properties/listPropertie.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { verifyIsAdmMiddleware } from "../middlewares/verifyIsAdm.middleware";

export const propertieRouter = Router()
propertieRouter.post("",verifyAuthUserMiddleware, verifyIsAdmMiddleware, createPropertieController)
propertieRouter.get("", listPropertieController)