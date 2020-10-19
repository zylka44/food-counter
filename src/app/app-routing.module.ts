import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtrasModule } from './extras/extras.module';
import { MenuModule } from './menu/menu.module';
import { RootGuard } from './core/guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [RootGuard],
    loadChildren: () => MenuModule
  },
  { path: '**', loadChildren: () => ExtrasModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
