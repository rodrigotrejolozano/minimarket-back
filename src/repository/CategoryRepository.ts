import { Service } from "typedi";
import Category from "../models/category";

@Service()
export default class CategoryRepository {
    async findAllCategories() {
        return await Category.findAll(
            {
                attributes: ['id', 'name', 'status'],
                where: { status: true },
            }
        );
    }
}