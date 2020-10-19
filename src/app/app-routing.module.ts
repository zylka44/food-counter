import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtrasModule } from './extras/extras.module';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
  { path: '', loadChildren: () => MenuModule },
  { path: '**', loadChildren: () => ExtrasModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
