import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Dish, Menu } from 'src/app/core/models/menu';
import {
  selectAllDishes,
  selectMenu,
} from 'src/app/core/store/selectors/menu.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes$ = this.store.select(selectMenu).subscribe(console.log);
  selectedDishes: Dish[];

  constructor(private store: Store<{ menu: Menu }>) {}

  ngOnInit() {}

  onDishesSelected(dishes: Dish[]) {
    this.selectedDishes = dishes;
  }
}
