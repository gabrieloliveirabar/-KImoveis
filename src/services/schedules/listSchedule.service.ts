import AppDataSource from "../../data-source";
import { Schedule_user_propertie } from "../../entities/schedule_user_propertie.entity";
import { Propertie } from "../../entities/propertie.entity";
import { AppError } from "../../errors/appError";

export const listScheduleService = async(id:string) =>{
    const schedulesRepository = AppDataSource.getRepository(Schedule_user_propertie)
    const propertieRepository = AppDataSource.getRepository(Propertie);
    
    const properties = await propertieRepository.find({relations:{schedules:{user:true}}})
    const propertie = properties.find((proper)=>proper.id === id)
    if(!propertie){
        throw new AppError("scheduling not found",404)
    }

    return propertie
}