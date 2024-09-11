import Category from "../models/category";
import Product from "../models/product";

export interface IProductRepository {
    findAllProducts(): Promise<Product[]>;
    findByName(name: string): Promise<Product | null>;
    findOneProduct(id: number): Promise<Product | null>;
    findOnecategoy(id: number): Promise<Category | null>;
    findProductsByCategory(categoryId: number): Promise<Product[]>;
    createProduct(productData: { name: string, categoryId: number }): Promise<Product>;
    deleteProduct(productId: number): Promise<[number]>;
    updateProduct(productId: number, productData: { name?: string, categoryId?: number }): Promise<[number]>;
}
