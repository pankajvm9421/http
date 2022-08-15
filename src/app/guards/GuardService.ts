import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface ICanDeactivate{
  canDeactivate:()=>boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanDeactivate<ICanDeactivate> {

  constructor() { }
  canDeactivate(component: ICanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error('Method not implemented.');
    return component.canDeactivate();
  }
}
