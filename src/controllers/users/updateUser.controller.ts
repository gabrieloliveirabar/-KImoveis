import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id = req.params.id;
  const { isAdm, id: idUser } = req.user;
  try {
    const updateUser = await updateUserService(user, id, isAdm, idUser);
    return res.status(200).json({ message: "user Updated" });
  } catch (error) {
    if (error instanceof AppError) {
      return res
        .status(error.statusCode)
        .send({ error: error.name, message: error.message });
    }
  }
};
