import AppDataSource from "../../data-source";
import { Categorie } from "../../entities/categorie.entity";

export const listCategorieService = async () => {
  const categorieRepository = AppDataSource.getRepository(Categorie);
  const categorie = await categorieRepository.find({
    relations: {
      properties: true,
    },
  });

  return categorie;
};
