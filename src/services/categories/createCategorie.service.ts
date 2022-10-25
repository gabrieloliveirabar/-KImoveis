import AppDataSource from "../../data-source";
import { Categorie } from "../../entities/categorie.entity";
import { AppError } from "../../errors/appError";

export const createCategorieService = async (
  name: string
): Promise<Categorie> => {
  const categorieRepository = AppDataSource.getRepository(Categorie);
  const veryfiName = await categorieRepository.find();

  const veryfiNameExists = veryfiName.find((categ) => categ.name === name);
  if (veryfiNameExists) {
    throw new AppError("category already exists");
  }
  const categorie = categorieRepository.create({
    name,
  });
  await categorieRepository.save(categorie);
  return categorie;
};
