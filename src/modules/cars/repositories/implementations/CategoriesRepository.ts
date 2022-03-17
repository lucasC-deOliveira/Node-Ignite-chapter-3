import { Category } from "../../model/Category";
import {ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository{
    private categories: Category[];

    private static INSTANCE: CategoriesRepository

    private constructor() {
        this.categories = [];
    }

    //singleton
    public static getInstance():CategoriesRepository {
        if(!CategoriesRepository.INSTANCE){
            return CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;

    }


    create({name, description}:ICreateCategoryDTO):void {
        const categorie = new Category()

        Object.assign(categorie, { name, description, createdAt: new Date() })

        this.categories.push(categorie)
    }

    list():Category[] {
        return this.categories
    }

    findByName(name:string):Category{
        const category= this.categories.find(category =>  category.name === name)
        return category;
    }

   
}


export { CategoriesRepository }