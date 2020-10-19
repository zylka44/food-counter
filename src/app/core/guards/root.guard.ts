import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { MenuActions } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class RootGuard implements CanActivate {

  constructor(private store: Store<{ menu: Menu }>, private menuService: MenuService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.menuService.getDishes$().pipe(
      tap((loadedDishes) => this.store.dispatch(MenuActions.loadMenuSuccess({
        menu: {dishes: loadedDishes,
        ingredients: []}
      }))),
      mapTo(true)
    );
  }

}
