import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Dish, Menu } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getDishes$(): Observable<Dish[]> {
    return this.http
      .get<Menu>(`${environment.apiEndpoint}/dishes`)
      .pipe(map((data) => data.dishes));
  }
}
