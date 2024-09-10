import { Service } from "typedi";
import CategoryServices from "../services/CategoryServices";
import { asyncHandler } from "../utils/HandlerWrapper";
import { formatResponse } from "../utils/ResponseFormat";


@Service()
export default class CategoryController{
    constructor(public categoryServices: CategoryServices) { }
   
    getAllCategories = asyncHandler(async () => {
        const categories=await this.categoryServices.getAllCategories();
        return formatResponse(categories);
    });

}