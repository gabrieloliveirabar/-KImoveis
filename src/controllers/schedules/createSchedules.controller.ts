import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";
import { createSchedulesService } from "../../services/schedules/createSchedules.service";

export const createSchedulesController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: IScheduleRequest = req.body;
    const userId = req.user.id;

    const schedule = await createSchedulesService(data, userId);

    return res.status(201).json({ message: "scheduling done successfully" });
  } catch (error) {
    if (error instanceof AppError) {
      return res
        .status(error.statusCode)
        .send({ error: error.name, message: error.message });
    }
  }
};
