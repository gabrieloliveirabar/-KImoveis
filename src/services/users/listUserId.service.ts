import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

export const listUserIdService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });
  
  if(!user){
    throw new AppError("user not found")
  }
  if (!user.isActive) {
    throw new AppError("user not found", 400);
  }
  return user;
};
