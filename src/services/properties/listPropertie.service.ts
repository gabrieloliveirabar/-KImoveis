import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/propertie.entity";

export const listPropertieService = async ()=>{
    const propertieRepository = AppDataSource.getRepository(Propertie)
    const properties = await propertieRepository.find({
        relations:{address:true}
    })

    return properties
}