import { NextFunction, Request, Response } from 'express';
import { IResponseFormat } from './ResponseFormat';

export const asyncHandler = (
    fn: (req: Request, res: Response, next: NextFunction) => Promise<IResponseFormat<any>>
   ) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await fn(req, res, next);
            res.status(response.code).json(response);
        } catch (error) {
            next(error);  
        }
    };
};