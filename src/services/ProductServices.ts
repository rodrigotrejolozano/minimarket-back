import { Service } from "typedi";
import ProductRepository from "../repository/ProductRepository";
import { ConflictError, InternalServerError, NotFoundError } from "../utils/AppError";

@Service()
export default class ProductServices {
    constructor(public productRepository: ProductRepository) { }

    async getOnProduct(id: number) {
        const product = await this.productRepository.findOneProduct(id);
        if (!product) throw new NotFoundError("No existe el producto.");
        return product;
    }

    async getAllProducts() {
        return await this.productRepository.findAllProducts();
    }

    async getProductsByCategory(categoryId: number) {
        const category = await this.productRepository.findOnecategoy(categoryId);
        if (!category) throw new NotFoundError('No se encontró la categoría.');
        const products = await this.productRepository.findProductsByCategory(categoryId);
        return products;
    }

    async createProduct(productData: { name: string, categoryId: number }) {
        const existingProduct = await this.productRepository.findByName(productData.name);
        if (existingProduct)  throw new ConflictError(`El producto con el nombre '${productData.name}' ya existe.`);
        const product = await this.productRepository.createProduct(productData);
        if (!product) throw new InternalServerError("Error al crear el producto.");
        return product;
    }

    async deleteProduct(productId: number) {
        const product = await this.productRepository.findOneProduct(productId);
        if (!product) throw new NotFoundError("Producto no encontrado.");
        const productDelet= await this.productRepository.deleteProduct(productId);
        if (!productDelet) throw new InternalServerError("Error al eliminar el producto.");
        return productDelet;
    }

    async updateProduct(productId: number, productData: { name?: string, categoryId?: number }) {
        const product = await this.productRepository.findOneProduct(productId);
        if (!product) throw new NotFoundError("Producto no encontrado.");
        if (productData.name) {
            const existingProduct = await this.productRepository.findByName(productData.name);
            if (existingProduct && existingProduct.id !== productId) {
                throw new ConflictError(`El nombre del producto '${productData.name}' ya está en uso.`);
            }
        }
        const updatedProduct = await this.productRepository.updateProduct(productId, productData);
        if (!updatedProduct) throw new InternalServerError("Error al actualizar el producto.");
        return updatedProduct;
    }
}

