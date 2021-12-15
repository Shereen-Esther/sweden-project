import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HousingService } from '../housing/housing.service';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss'],
})
export class CostsComponent implements OnInit {
  tabs: FormGroup = new FormGroup({
    tabValue: new FormControl('Expenditure'),
  });
  tabList = [
    {
      tab: 'Expenditure',
    },
    {
      tab: 'Region',
    },
    {
      tab: 'Tenure',
    },
    {
      tab: 'Age of Head',
    },
    {
      tab: 'Percentage',
    },
    {
      tab: 'Total Housing Expenditures',
    },
  ];
  constructor(private hs: HousingService) {}
  temp: any;
  ngOnInit(): void {
    this.hs.getSwedes().subscribe((res) => (this.temp = res));
  }
  getData(option: any) {
    if (option.tab === 'Expenditure')
      this.hs.getSwedes().subscribe((res) => (this.temp = res));
    if (option.tab === 'Region')
      this.hs.getRegion().subscribe((res) => (this.temp = res));
    if (option.tab === 'Tenure')
      this.hs.getAvgPeople().subscribe((res) => (this.temp = res));
    if (option.tab === 'Age of Head')
      this.hs.getPercentage().subscribe((res) => (this.temp = res));
    if (option.tab === 'Percentage')
      this.hs.getFloorSpace().subscribe((res) => (this.temp = res));
    if (option.tab === 'Total Housing Expenditures')
      this.hs.getDeSo().subscribe((res) => (this.temp = res));
  }
}
