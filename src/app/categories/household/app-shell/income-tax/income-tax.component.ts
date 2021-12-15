import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IncomeService } from './income.service';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss'],
})
export class IncomeTaxComponent implements OnInit {
  tabs: FormGroup = new FormGroup({
    tabValue: new FormControl('Income – Persons'),
  });
  tabList = [
    {
      tab: 'Income – Persons',
    },
    {
      tab: 'Income – Households',
    },
    {
      tab: 'Income Distribution',
    },
    {
      tab: 'Income Mobility',
    },
    {
      tab: 'Taxes',
    },
    {
      tab: 'DeSo',
    },
  ];
  temp: any;
  constructor(private is: IncomeService) {}

  ngOnInit(): void {
    this.is.getIncomePersons().subscribe((res) => (this.temp = res));
  }
  getData(option: any) {
    if (option.tab === 'Income – Persons')
      this.is.getIncomePersons().subscribe((res) => (this.temp = res));
    if (option.tab === 'Income – Households')
      this.is.getIncomeHousehold().subscribe((res) => (this.temp = res));
    if (option.tab === 'Income Distribution')
      this.is.getIncomeDistribution().subscribe((res) => (this.temp = res));
    if (option.tab === 'Income Mobility')
      this.is.getIncomeMobility().subscribe((res) => (this.temp = res));
    if (option.tab === 'Taxes')
      this.is.getTaxes().subscribe((res) => (this.temp = res));
    if (option.tab === 'DeSo')
      this.is.getDeSo().subscribe((res) => (this.temp = res));
  }
}
