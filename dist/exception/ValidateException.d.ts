import { HttpException } from '@nestjs/common';
export declare class ValidateException extends HttpException {
    messages: any;
    constructor(response: any);
}
