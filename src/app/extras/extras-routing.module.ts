import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoSuchPlaceComponent } from './containers/no-such-place/no-such-place.component';

const routes: Routes = [{ path: '**', component: NoSuchPlaceComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtrasRoutingModule {}
