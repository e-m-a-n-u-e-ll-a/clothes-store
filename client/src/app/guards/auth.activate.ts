import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsererService } from "../user/user.service";

@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate{
    constructor(private userService: UsererService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.userService.isLoggedIn
    }
}