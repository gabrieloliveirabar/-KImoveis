import { Router } from "express";

import { userLoginController } from "../controllers/sessions/userLogin.controller";

export const loginRouter = Router();

loginRouter.post("", userLoginController)

