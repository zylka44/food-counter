import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrasRoutingModule } from './extras-routing.module';
import { NoSuchPlaceComponent } from './containers/no-such-place/no-such-place.component';

@NgModule({
  declarations: [NoSuchPlaceComponent],
  exports: [NoSuchPlaceComponent],
  imports: [CommonModule, ExtrasRoutingModule],
})
export class ExtrasModule {}
