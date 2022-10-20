import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";


export const listUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
 
  return users;
};
