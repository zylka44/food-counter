import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './containers/menu/menu.component';
import { MenuDishComponent } from './components/menu-dish/menu-dish.component';
import { MenuSearchingComponent } from './components/menu-searching/menu-searching.component';
import { MenuResultsComponent } from './components/menu-results/menu-results.component';

@NgModule({
  declarations: [MenuComponent, MenuDishComponent, MenuSearchingComponent, MenuResultsComponent],
  exports: [MenuComponent],
  imports: [CommonModule, MenuRoutingModule],
})
export class MenuModule {}
