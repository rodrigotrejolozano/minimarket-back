export interface IResponseFormat<T> {
    data: T | null;
    code: number;
    message: string;
}

export const formatResponse = (
    data: any | null, 
    code: number=200, 
    message: string="SUCCESS_RESPONSE"
): IResponseFormat<any> => {
    return {
        code,
        message,
        data,
    };
};