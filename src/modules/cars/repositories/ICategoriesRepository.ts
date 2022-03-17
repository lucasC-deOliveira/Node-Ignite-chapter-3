import { Category } from "../model/Category";

//  DTO => data transfer object = criar objeto para transerencia de dados entre uma classe e outra
interface ICreateCategoryDTO{
    name:string;
    description:string;
}


interface ICategoriesRepository{
findByName(name:string):Category;
list(): Category[];
create({name, description}:ICreateCategoryDTO):void;
}


export {ICategoriesRepository, ICreateCategoryDTO}