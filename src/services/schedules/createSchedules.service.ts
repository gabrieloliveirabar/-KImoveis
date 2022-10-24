import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/propertie.entity";
import { Schedule_user_propertie } from "../../entities/schedule_user_propertie.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

import { IScheduleRequest } from "../../interfaces/schedules";

export const createSchedulesService = async (
  { date, hour, propertyId }: IScheduleRequest,
  userId: string
):Promise<Schedule_user_propertie> => {
  const schedulesRepository = AppDataSource.getRepository(
    Schedule_user_propertie
  );
  const propertieRepository = AppDataSource.getRepository(Propertie);
  const userRepository = AppDataSource.getRepository(User);

  const properties = await propertieRepository.find();
  const propertie = properties.find((proper) => proper.id === propertyId);
  if (!propertie) {
    throw new AppError("Propertie not exists");
  }

  const users = await userRepository.find();
  const user = users.find((use) => use.id === userId);
  if (!user) {
    throw new AppError("User not exists");
  }

  const newDate = new Date(date);
  const schedule = new Schedule_user_propertie();
  schedule.date = newDate;
  schedule.hour = hour;
  schedule.propertie = propertie;
  schedule.user = user;

  const diaSemana = newDate.getDay();
  if (diaSemana === 0 || diaSemana === 6) {
    throw new AppError("can't schedule on the weekend");
  }

  const hourSchedule = schedule.hour.split(":");
  if (Number(hourSchedule[0]) < 8 || Number(hourSchedule[0]) > 18) {
    throw new AppError("time unavailable for scheduling");
  }

  const schedules = await schedulesRepository.find({
    relations: { propertie: true },
  });
  const scheduleExists = schedules.find((sche) => {
    if (
      sche.date.toDateString() === newDate.toDateString() &&
      sche.hour.includes(hour) &&
      sche.propertie.id === propertie.id
    ) {
      return sche;
    }
  });
  if (scheduleExists) {
    throw new AppError("hourly already scheduled");
  }

  schedulesRepository.create(schedule);
  await schedulesRepository.save(schedule);

  return schedule;
};
