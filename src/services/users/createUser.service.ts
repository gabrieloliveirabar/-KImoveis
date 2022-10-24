
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

import { IUserRequest } from "../../interfaces/users";

import  AppDataSource  from "../../data-source";

export const userCreateService = async ({name, email, isAdm, password}: IUserRequest): Promise<User> =>{
    const userRepository = AppDataSource.getRepository(User)

    const users =  await userRepository.find()

    const emailAlreadyExists = users.find((user)=>user.email === email)

    if(emailAlreadyExists){
        throw new AppError("Email Already exists");
    }

    const hashedPassword = bcrypt.hashSync(password,10)

    const user = new User()
    user.name = name,
    user.email = email,
    user.isAdm = isAdm, 
    user.password = hashedPassword

    userRepository.create(user);
    await userRepository.save(user)

    return user
}