import { StatusCodes } from "./StatusCode";

export  class AppError extends Error {
    public statusCode: number;
    errors: string[] = [];

    constructor(statusCode: number = 500, message: string, rawErrors?: string[]) {
        super(message); 
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        if (rawErrors) this.errors = rawErrors;
        Error.captureStackTrace(this, this.constructor); 
    }
}
export class NotFoundError extends AppError {
    constructor(message: string="NOT_FOUND") {
        super(StatusCodes.NOT_FOUND, `${message}`);
    }
}
export class BadRequestError extends AppError {
    constructor(message: string="BAD_REQUEST") {
        super(StatusCodes.BAD_REQUEST, message);
    }
}

export class ConflictError extends AppError {
    constructor(message: string="CONFLICT") {
        super(StatusCodes.CONFLICT, `${message} `);
    }
}
export class InternalServerError extends AppError {
    constructor(message: string = "INTERNAL_SERVER_ERROR") {
        super(StatusCodes.INTERNAL_SERVER_ERROR, message);
    }
}