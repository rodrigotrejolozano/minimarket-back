import { Router } from "express";
import Container from 'typedi';
import ProductController from "../controllers/ProductControllers";
import { validateRequest } from "../middlewares/validationHandler";
import { createProductSchema, getProductByIdSchema, updateProductSchema } from "../request/ProductValidator";
import { getCategoryByIdSchema } from "../request/CategoryValidator";

const router = Router();
const productController = Container.get(ProductController);

router.get('/', productController.getAllProducts);
router.get('/:id', validateRequest(getProductByIdSchema,'params'), productController.getOneProduct);
router.get('/category/:categoryId', validateRequest(getCategoryByIdSchema, 'params'), productController.getProductsByCategory);
router.post('/', validateRequest(createProductSchema, 'body') ,productController.createProduct);
router.put('/:id', validateRequest(getProductByIdSchema, 'params'), validateRequest(updateProductSchema, 'body'), productController.updateProduct);
router.delete('/:id', validateRequest(getProductByIdSchema, 'params') ,productController.deleteProduct);
export default router;