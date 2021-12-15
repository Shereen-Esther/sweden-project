import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnualAccountsComponent } from './annual-accounts/annual-accounts.component';
import { DebtComponent } from './debt/debt.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { HomeComponent } from './home/home.component';
import { LocalTaxesComponent } from './local-taxes/local-taxes.component';
import { TaxAssessmentComponent } from './tax-assessment/tax-assessment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TaxAssessmentComponent,
      },
      {
        path: 'localTax',
        component: LocalTaxesComponent,
      },
      {
        path: 'annualAccounts',
        component: AnnualAccountsComponent,
      },
      {
        path: 'enterprises',
        component: EnterprisesComponent,
      },
      {
        path: 'debt',
        component: DebtComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppShellRoutingModule {}
