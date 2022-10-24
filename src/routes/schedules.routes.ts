import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules/createSchedules.controller";
import { listScheduleController } from "../controllers/schedules/listSchedule.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

export const scheduleRouter = Router()
scheduleRouter.post("",verifyAuthUserMiddleware,createSchedulesController)
scheduleRouter.get("/properties/:id",verifyAuthUserMiddleware, listScheduleController)