import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CategoriesRoutingModule],
  exports: [HomeComponent],
})
export class CategoriesModule {}
