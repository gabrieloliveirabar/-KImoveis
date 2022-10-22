import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules/createSchedules.controller";

export const scheduleRouter = Router()
scheduleRouter.post("",createSchedulesController)