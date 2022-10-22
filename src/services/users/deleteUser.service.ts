import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";


export const deleteUserService = async (id: string, isAdm:boolean,idtoken:string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!id) {
    throw new AppError("user not found",404);
  }

  if (!user) {
    throw new AppError("user not found",404);
  }
  if (id !== idtoken && isAdm === false) {
    throw new AppError(
      "The user cannot update other users because he is not an administrator",
      401
    );
  }
  if (!user.isActive) {
    throw new AppError("user not found", 400);
  }

  await userRepository.save({
    id: user.id,
    isActive: false,
  });
};
