import Category from "../models/category";

export interface ICategoryRepository {
    findAllCategories(): Promise<Category[]>
}