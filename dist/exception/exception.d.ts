export declare class Exception extends Error {
    httpCode: number;
    internalCode: string;
    description: string;
    context: any;
    constructor(httpCode: number, internalCode: string, description: string, context: any, clazz: new (...args: any[]) => Exception);
}
