import AppDataSource from "../../data-source";

import { Propertie } from "../../entities/propertie.entity";
import { Address } from "../../entities/adress.entity";
import { Categorie } from "../../entities/categorie.entity";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import { AppError } from "../../errors/appError";

export const createPropertieService = async (
  { value, size }: IPropertyRequest,
  addressObj: IAddressRequest,
  categoryId: string
): Promise<Propertie> => {
  const propertieRepository = AppDataSource.getRepository(Propertie);
  const adressRepository = AppDataSource.getRepository(Address);
  const categorieRepository = AppDataSource.getRepository(Categorie);

  const addresses = await adressRepository.find();
  const adress = new Address();
  adress.district = addressObj.district;
  adress.zipCode = addressObj.zipCode;
  adress.number = addressObj.number || adress.number;
  adress.city = addressObj.city;
  adress.state = addressObj.state;

  const categorie = await categorieRepository.findOneBy({ id: categoryId });
  if (!categorie) {
    throw new AppError("Categorie not exists", 404);
  }

  if (adress.zipCode.split("").length > 8) {
    throw new AppError("Zipcode invalid");
  }

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
  newPropertie.category = categoryId;
  newPropertie.address = address;

  propertieRepository.create(newPropertie);
  await propertieRepository.save(newPropertie);

  return newPropertie;
};
