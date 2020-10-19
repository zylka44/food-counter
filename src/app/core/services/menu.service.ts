import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Dish } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getDishes$(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${environment.apiUrl}/dishes`).pipe(map((data) => data));
  }
}
