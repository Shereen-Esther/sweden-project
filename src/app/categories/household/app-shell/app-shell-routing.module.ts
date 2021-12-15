import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostsComponent } from './costs/costs.component';
import { HomeComponent } from './home/home.component';
import { HousingComponent } from './housing/housing.component';
import { HsbComponent } from './hsb/hsb.component';
import { IncomeTaxComponent } from './income-tax/income-tax.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IncomeTaxComponent,
      },
      {
        path: 'HSB',
        component: HsbComponent,
      },
      {
        path: 'housing',
        component: HousingComponent,
      },
      {
        path: 'costs',
        component: CostsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppShellRoutingModule {}
