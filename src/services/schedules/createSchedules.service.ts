import AppDataSource from "../../data-source";
import { Schedule_user_propertie } from "../../entities/schedule_user_propertie.entity";
import { IScheduleRequest } from "../../interfaces/schedules";

export const createSchedulesService = ({date,hour}:IScheduleRequest)=>{
    const schedulesRepository = AppDataSource.getRepository(Schedule_user_propertie)

    const schedule = new Schedule_user_propertie()
    


    // const date = "2022/10/2021"
  // const splitDate = date.split("/")
  // console.log(splitDate)
  // const newDate = new Date(splitDate)
  // console.log(newDate)
}