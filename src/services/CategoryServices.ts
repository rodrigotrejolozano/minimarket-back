import { Service } from "typedi";
import CategoryRepository from "../repository/CategoryRepository";
import { NotFoundError } from "../utils/AppError";


@Service()
export default class CategoryServices {
  constructor(public categoryRepositoie: CategoryRepository) { }

  async getAllCategories() {
    const categories= await this.categoryRepositoie.findAllCategories();
    if (categories.length === 0) throw new NotFoundError('No hay categorías.');
    return categories;
  }
}


