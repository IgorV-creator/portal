import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class ValidatePipe implements PipeTransform<any> {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
