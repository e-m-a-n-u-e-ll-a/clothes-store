import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsererService } from "../user/user.service";

@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate{
    constructor(private userService: UsererService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.router.createUrlTree(['/login']);
        return this.userService.isLoggedIn
    }
    
}