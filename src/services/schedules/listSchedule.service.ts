import AppDataSource from "../../data-source";
import { Schedule_user_propertie } from "../../entities/schedule_user_propertie.entity";
import { AppError } from "../../errors/appError";

export const listScheduleService = async(id:string):Promise<Schedule_user_propertie> =>{
    const schedulesRepository = AppDataSource.getRepository(Schedule_user_propertie)
    const schedules = await schedulesRepository.find()
    const schedule = await schedules.find((sche)=>sche.id === id)
    
    if(!schedule){
        throw new AppError("scheduling not found")
    }

    return schedule
}