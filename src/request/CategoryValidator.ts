import Joi from "joi";

export const getCategoryByIdSchema = Joi.object({
    categoryId: Joi.number().integer().required(),
});
