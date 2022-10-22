import AppDataSource from "../../data-source";
import { Categorie } from "../../entities/categorie.entity";
import { AppError } from "../../errors/appError";

export const listCategorieIdService = async (id: string) => {
  const categorieRepository = AppDataSource.getRepository(Categorie);
  const categorie = categorieRepository.findOneBy({ id });

  if (!categorie) {
    throw new AppError("user not found");
  }
  return categorie;
};
