import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = null

const importCateforyUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(importCateforyUseCase)

export {importCategoryController} 