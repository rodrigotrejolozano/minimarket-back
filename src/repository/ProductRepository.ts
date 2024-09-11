import { Service } from "typedi";
import Category from "../models/category";
import Product from "../models/product";
import { IProductRepository } from "../interfaces/Product.interface";

@Service()
export default class ProductRepository implements IProductRepository {
    async findAllProducts() {
        return await Product.findAll(
            {
                attributes: ['id', 'name', 'status', 'categoryId'],
                where: { status: true },
                include: [
                    {
                        model: Category,
                        attributes: ['name'], 
                    },
                ],
            }
        );
    }
    async findByName(name: string) {
        return await Product.findOne({ 
            where: { name },
            attributes: ['id', 'name', 'status', 'categoryId'],
        });
    }

    async findOneProduct(id: number) {
        return await Product.findOne(
            {
                attributes: ['id', 'name', 'status', 'categoryId'],
                where: { status: true, id },
                include: [
                    {
                        model: Category,
                        attributes: ['name'], 
                    },
                ],
            }
        );
    }
    async findOnecategoy(id: number) {
        return await Category.findOne(
            {
                attributes: ['id', 'name', 'status'],
                where: { status: true, id },
            }
        );
    }

    async findProductsByCategory(categoryId: number) {
        return await Product.findAll({
            attributes: ['id', 'name', 'status', 'categoryId'],
            where: { categoryId, status: true },
            include: [
                {
                    model: Category,
                    attributes: ['name'],
                },
            ],
        });
    }
    async createProduct(productData: { name: string, categoryId: number }) {
        return await Product.create({
            ...productData,
            status: true, 
        });
    }
    async deleteProduct(productId: number) {
        return await Product.update(
            { status: false },
            { where: { id: productId } }
        );
    }
    async updateProduct(productId: number, productData: { name?: string, categoryId?: number }) {
        return await Product.update(
            { ...productData },
            { where: { id: productId } }
        );
    }
}