import AppDataSource from "../../data-source";
import { Categorie } from "../../entities/categorie.entity";
import { AppError } from "../../errors/appError";

export const listCategorieIdService = async (id: string): Promise<Categorie> => {
  const categorieRepository = AppDataSource.getRepository(Categorie);
  const categories = await categorieRepository.find({relations: {
    propertie: true,
  }});
  const categorie = await categories.find((categ)=>categ.id === id)

  if (!categorie) {
    throw new AppError("user not found");
  }
  return categorie;
};
