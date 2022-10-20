import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";

import { instanceToPlain } from "class-transformer";

export const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const {isAdm,id:idtoken} = req.user
  const userDelete = await deleteUserService(id,isAdm,idtoken);

  return res.status(204).json(instanceToPlain(userDelete));
};
