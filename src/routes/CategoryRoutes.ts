import { Router } from "express";
import Container from 'typedi';
import CategoryController from "../controllers/CategoryControllers";

const categoriRouter = Router();
const categoryController = Container.get(CategoryController);

categoriRouter.get('/', categoryController.getAllCategories);

export default categoriRouter;