import { Service } from "typedi";
import Category from "../models/category";
import { ICategoryRepository } from "../interfaces/Category.interfaces";

@Service()
export default class CategoryRepository implements ICategoryRepository {
    async findAllCategories() {
        return await Category.findAll(
            {
                attributes: ['id', 'name', 'status'],
                where: { status: true },
            }
        );
    }
}