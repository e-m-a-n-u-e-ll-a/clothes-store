import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsererService } from "../user/user.service";

@Injectable({providedIn: 'root'})
export class NotAuthenticated implements CanActivate{
    
    constructor (private userService: UsererService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        console.log('NotAuthenticated Guard Triggered');

        if (!this.userService.isGuest) {
            console.log('User is already logged in. Redirecting...');
        
            return this.router.createUrlTree(['/']);
        } else {
            console.log('User is not logged in. Allowing access to the route.');
            return true;
        }
    }
}