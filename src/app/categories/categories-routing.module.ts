import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'householdFinance',
    loadChildren: () =>
      import('./household/household.module').then((m) => m.HouseholdModule),
  },
  {
    path: 'publicFinance',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'financialMarkets',
    loadChildren: () =>
      import('./financial-markets/financial-markets.module').then(
        (m) => m.FinancialMarketsModule
      ),
  },
  {
    path: 'pricesAndConsumption',
    component: HomeComponent,
  },
  {
    path: 'nationalAccounts',
    component: HomeComponent,
  },
  {
    path: 'trade',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
