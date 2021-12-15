import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialMarketsRoutingModule } from './financial-markets-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FinancialMarketsRoutingModule
  ]
})
export class FinancialMarketsModule { }
