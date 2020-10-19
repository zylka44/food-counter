import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMenu from './store/reducers/menu.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(fromMenu.menuFeatureKey, fromMenu.reducer)],
})
export class CoreModule {}
