import { Request, Response } from "express";
import { userCreateService } from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, isAdm, password } = req.body;

  const newUser = await userCreateService({ name, email, isAdm, password });

  return res.status(201).json(instanceToPlain(newUser));
};
