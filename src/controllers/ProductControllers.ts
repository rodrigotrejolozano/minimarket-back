import { Service } from "typedi";
import ProductServices from "../services/ProductServices";
import { Request } from 'express';
import { asyncHandler } from "../utils/HandlerWrapper";
import { formatResponse } from "../utils/ResponseFormat";


@Service()
export default class ProductController {
    constructor(public productServices: ProductServices) { }
  
    getAllProducts = asyncHandler(async () => {
        const products = await this.productServices.getAllProducts();
        return formatResponse(products);  
    });

    getOneProduct = asyncHandler(async (req: Request) => {
        const { id } = req.params;
        const product = await this.productServices.getOnProduct(parseInt(id));
        return formatResponse(product); 
    });

    getProductsByCategory = asyncHandler(async (req: Request ) => {
        const { categoryId } = req.params;
        const products = await this.productServices.getProductsByCategory(parseInt(categoryId));
        return formatResponse(products);  
    });

    createProduct = asyncHandler(async (req: Request) => {
        const { name, categoryId } = req.body;
        const newProduct = await this.productServices.createProduct({ name, categoryId });
        return formatResponse(newProduct, 201, "Producto creado exitosamente");
    });

    updateProduct = asyncHandler(async (req: Request) => {
        const { id } = req.params;
        const { name, categoryId } = req.body;
        const updatedProduct = await this.productServices.updateProduct(parseInt(id), { name, categoryId });
        return formatResponse(updatedProduct, 200, "Producto actualizado exitosamente");
    });

    deleteProduct = asyncHandler(async (req: Request) => {
        const { id } = req.params;
        await this.productServices.deleteProduct(parseInt(id));
        return formatResponse(null, 202, "Producto eliminado exitosamente");
    });
}