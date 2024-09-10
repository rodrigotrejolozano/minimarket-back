import { Request, Response, NextFunction } from 'express';
import { formatResponse } from "../utils/ResponseFormat";
import { AppError } from '../utils/AppError';

export const errorHandler = (err: Error | AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const message = err.message || 'INTERNAL_SERVER_ERROR';
    const response = formatResponse(null, statusCode, message);
    res.status(statusCode).json(response);
};