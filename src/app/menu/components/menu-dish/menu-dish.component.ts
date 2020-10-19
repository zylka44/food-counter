import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dish } from 'src/app/core/models/menu';

@Component({
  selector: 'app-menu-dish',
  templateUrl: './menu-dish.component.html',
  styleUrls: ['./menu-dish.component.scss'],
})
export class MenuDishComponent implements OnInit {
  @Input() dish: Dish;
  @Output() dishSelected = new EventEmitter<number>();
  isSelected = false;

  constructor() {}

  ngOnInit() {}

  onSelect() {
    this.isSelected = !this.isSelected;
    this.dishSelected.emit(this.dish.id);
  }
}
