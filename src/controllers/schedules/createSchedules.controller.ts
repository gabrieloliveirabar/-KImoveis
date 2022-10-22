import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import { createSchedulesService } from "../../services/schedules/createSchedules.service";

export const createSchedulesController = async (req:Request, res:Response)=>{
    const data:IScheduleRequest = req.body

    const schedule = await createSchedulesService(data)

    return res.status(201).json(schedule)
}