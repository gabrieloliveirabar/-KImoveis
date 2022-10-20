import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { IUserLogin } from "../../interfaces/users";

export const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new AppError("Wrong email/password",403);
  }
  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError("Wrong email/password",403);
  }
  if(account.isActive === false){
     throw new AppError("User not Active",403)
    }
  const token = jwt.sign(
    { 
      isAdm: account.isAdm,
      id: account.id,     
      isActive: account.isActive
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );
    
  return token;
};
