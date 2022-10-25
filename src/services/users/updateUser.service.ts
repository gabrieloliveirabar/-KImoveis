import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";

export const updateUserService = async (
  data: IUserUpdate,
  id: string,
  isAdm: boolean,
  idUser: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id });
  const key = Object.keys(data);

  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  if (key.includes("isActive") || key.includes("id") || key.includes("isAdm")) {
    throw new AppError("unauthorized ", 401);
  }

  if (id !== idUser && isAdm === false) {
    throw new AppError(
      "The user cannot update other users because he is not an administrator",
      404
    );
  }

  await userRepository.update(id, {
    name: data.name ? data.name : findUser.name,
    email: data.email ? data.email : findUser.email,
    password: data.password ? await hash(data.password, 10) : findUser.password,
  });
  const user = await userRepository.findOneBy({ id });

  return user!;
};
