import { Component, Input, OnInit } from '@angular/core';
import { Dish } from 'src/app/core/models/menu';

@Component({
  selector: 'app-menu-results',
  templateUrl: './menu-results.component.html',
  styleUrls: ['./menu-results.component.scss'],
})
export class MenuResultsComponent implements OnInit {
  @Input() selectedDishes: Dish[];

  constructor() {}

  ngOnInit() {}
}
