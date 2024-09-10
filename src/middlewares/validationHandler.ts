import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi'; 
import { BadRequestError } from '../utils';

type RequestProperty = 'body' | 'params' | 'query';

export const validateRequest = (schema: ObjectSchema, property: RequestProperty) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[property]);
        if (error)  throw new BadRequestError(error.details[0].message);
        next();
    };
};
