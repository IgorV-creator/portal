import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from '@nestjs/core';
export declare class RoletGuard implements CanActivate {
    private JwtService;
    private reflector;
    constructor(JwtService: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
