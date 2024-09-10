import Joi from 'joi';

export const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    categoryId: Joi.number().integer().required(),
});

export const updateProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).optional(),
    categoryId: Joi.number().integer().optional(),
});

export const getProductByIdSchema = Joi.object({
    id: Joi.number().integer().required(),
});
