import { Router } from "express";
import categoryRouter from "./CategoryRoutes";
import productRouter from "./ProductRoutes";

const serverRoutes= Router()

serverRoutes.use('/categories', categoryRouter)
serverRoutes.use('/products', productRouter)

export default serverRoutes