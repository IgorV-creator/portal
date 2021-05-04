import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from 'class-transformer'
import {  validate } from 'class-validator'
import { ValidateException } from 'src/exception/ValidateException';

@Injectable()
export class ValidatePipe implements PipeTransform<any> {
    async transform(value:any, metadata: ArgumentMetadata): Promise<any> {
        //Получаем объект который будем валидировать
        const obj = plainToClass(metadata.metatype, value);
        // валидируем obj
        const error = await validate(obj);

        if(error.length){
            let messages = error.map(err => `${err.property} - ${Object.values(err.constraints).join(', ')}`)
            throw new ValidateException(messages)
        }
        return value
    }
}