import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { HomeComponent } from './home/home.component';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncomeService } from './income-tax/income.service';
import { HsbComponent } from './hsb/hsb.component';
import { HousingComponent } from './housing/housing.component';
import { CostsComponent } from './costs/costs.component';
import { HsbService } from './hsb/hsb.service';
import { HousingService } from './housing/housing.service';
import { CommonComponent } from './common/common.component';
@NgModule({
  declarations: [
    HomeComponent,
    IncomeTaxComponent,
    HsbComponent,
    HousingComponent,
    CostsComponent,
    CommonComponent,
  ],
  imports: [
    CommonModule,
    AppShellRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [IncomeService, HsbService, HousingService],
})
export class AppShellModule {}
