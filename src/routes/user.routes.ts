import { Router } from "express";

import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";
import { listUserIdController } from "../controllers/users/listUserId.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";

import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { verifyIsAdmMiddleware } from "../middlewares/verifyIsAdm.middleware";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("",verifyAuthUserMiddleware,verifyIsAdmMiddleware, listUserController);
userRouter.get("/:id",verifyAuthUserMiddleware, listUserIdController);
userRouter.patch("/:id",verifyAuthUserMiddleware,updateUserController);
userRouter.delete("/:id",verifyAuthUserMiddleware,verifyIsAdmMiddleware,deleteUserController)
