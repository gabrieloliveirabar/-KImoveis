import { Request,Response } from "express";
import { listScheduleService } from "../../services/schedules/listSchedule.service";


export const listScheduleController = async (req:Request, res:Response)=>{
    const id = req.params.id

    const schedule = await listScheduleService(id)

    return res.status(200).json(schedule)
}