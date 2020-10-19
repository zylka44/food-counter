import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dish, Menu } from 'src/app/core/models/menu';

@Component({
  selector: 'app-menu-searching',
  templateUrl: './menu-searching.component.html',
  styleUrls: ['./menu-searching.component.scss'],
})
export class MenuSearchingComponent implements OnInit {
  @Input() dishes: Dish[];
  @Output() selDishes = new EventEmitter<Dish[]>();
  dishesDisplayed: Dish[];
  selectedDishes: Dish[] = [];

  constructor(private store: Store<{ menu: Menu }>) {}

  ngOnInit() {
    this.dishesDisplayed = this.dishes;
  }

  onSearch() {
    const dishName = document.getElementById('dishName')[`value`].toLowerCase();
    this.dishesDisplayed = this.dishes.filter((dish) => dish.name.includes(dishName));
  }

  onSelect(dishId) {
    const currentDish = this.dishes.find((dish) => dish.id === dishId);
    if (this.selectedDishes.some((dish) => dish.id === currentDish.id)) {
      const idToSplice = this.selectedDishes.findIndex((dish) => dish.id === dishId);
      this.selectedDishes.splice(idToSplice, 1);
    } else {
      this.selectedDishes.push(currentDish);
    }
    this.selDishes.emit(this.selectedDishes);
  }
}
