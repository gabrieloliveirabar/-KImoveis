import AppDataSource from "../../data-source";

import { Propertie } from "../../entities/propertie.entity";
import { Address } from "../../entities/adress.entity";
import { Categorie } from "../../entities/categorie.entity";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import { ICategoryRequest } from "../../interfaces/categories";
import { AppError } from "../../errors/appError";

export const createPropertieService = async (
  { value, size }: IPropertyRequest,
  addressObj: IAddressRequest,
  categoryId: string
):Promise<Propertie> => {
  const propertieRepository = AppDataSource.getRepository(Propertie);
  const categorieRepository = AppDataSource.getRepository(Categorie);
  const adressRepository = AppDataSource.getRepository(Address);

  const categories = await categorieRepository.find();
  const categorie = categories.find((categ) => categ.id === categoryId);
  if (!categorie) {
    throw new AppError("Categorie not exists");
  }

  const addresses = await adressRepository.find();
  const adress = new Address();
  adress.district = addressObj.district;
  adress.zipCode = addressObj.zipCode;
  adress.number = addressObj.number || adress.number;
  adress.city = addressObj.city;
  adress.state = addressObj.state;

  const alreadyAddress = addresses.find(
    (adr) => adr.zipCode === adress.zipCode
  );

  if (alreadyAddress) {
    throw new AppError("Address already exists");
  }
  const address = adressRepository.create(adress);
  await adressRepository.save(adress);

  const newPropertie = new Propertie();
  newPropertie.value = value;
  newPropertie.size = size;
  newPropertie.address = address;
  newPropertie.categorie = categorie;

  propertieRepository.create(newPropertie);
  await propertieRepository.save(newPropertie);

  return newPropertie;
};
