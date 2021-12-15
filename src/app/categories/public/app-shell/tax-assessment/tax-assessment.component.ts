import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaxService } from './tax.service';

@Component({
  selector: 'app-tax-assessment',
  templateUrl: './tax-assessment.component.html',
  styleUrls: ['./tax-assessment.component.scss'],
})
export class TaxAssessmentComponent implements OnInit {
  tabs: FormGroup = new FormGroup({
    tabValue: new FormControl('Taxable Earned Income'),
  });
  tabList = [
    {
      tab: 'Taxable Earned Income',
    },
    {
      tab: 'Income - wealth',
    },
    {
      tab: 'Real Estate',
    },
    {
      tab: 'Debited taxes',
    },
    {
      tab: 'Assessment',
    },
    {
      tab: 'Tax Credits',
    },
  ];
  constructor(private ts: TaxService) {}
  temp: any;
  ngOnInit(): void {
    this.ts.getIncomePersons().subscribe((res) => (this.temp = res));
  }
  getData(option: any) {
    if (option.tab === 'Income – Persons')
      this.ts.getIncomePersons().subscribe((res) => (this.temp = res));
    if (option.tab === 'Income – Households')
      this.ts.getIncomeHousehold().subscribe((res) => (this.temp = res));
    if (option.tab === 'Income Distribution')
      this.ts.getIncomeDistribution().subscribe((res) => (this.temp = res));
    if (option.tab === 'Income Mobility')
      this.ts.getIncomeMobility().subscribe((res) => (this.temp = res));
    if (option.tab === 'Taxes')
      this.ts.getTaxes().subscribe((res) => (this.temp = res));
    if (option.tab === 'DeSo')
      this.ts.getDeSo().subscribe((res) => (this.temp = res));
  }
}
