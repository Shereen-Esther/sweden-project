import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { HomeComponent } from './home/home.component';
import { TaxAssessmentComponent } from './tax-assessment/tax-assessment.component';
import { LocalTaxesComponent } from './local-taxes/local-taxes.component';
import { AnnualAccountsComponent } from './annual-accounts/annual-accounts.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { DebtComponent } from './debt/debt.component';
import { CommonComponent } from './common/common.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    TaxAssessmentComponent,
    LocalTaxesComponent,
    AnnualAccountsComponent,
    EnterprisesComponent,
    DebtComponent,
    CommonComponent,
  ],
  imports: [
    CommonModule,
    AppShellRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AppShellModule {}
