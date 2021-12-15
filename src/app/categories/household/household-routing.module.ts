import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-shell/app-shell.module').then((m) => m.AppShellModule),
  },
  {
    path: 'HBS',
  },
  {
    path: 'housing',
  },
  {
    path: 'costs',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseholdRoutingModule {}
