import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.scss'],
})
export class HousingComponent implements OnInit {
  tabs: FormGroup = new FormGroup({
    tabValue: new FormControl('Swedish People'),
  });
  tabList = [
    {
      tab: 'Swedish People',
    },
    {
      tab: 'Region',
    },
    {
      tab: 'Average People',
    },
    {
      tab: 'Percentage',
    },
    {
      tab: 'Floor Space',
    },
    {
      tab: 'DeSo',
    },
  ];
  constructor(private hs: HousingService) {}
  temp: any;
  ngOnInit(): void {
    this.hs.getSwedes().subscribe((res) => (this.temp = res));
  }
  getData(option: any) {
    if (option.tab === 'Swedish People')
      this.hs.getSwedes().subscribe((res) => (this.temp = res));
    if (option.tab === 'Region')
      this.hs.getRegion().subscribe((res) => (this.temp = res));
    if (option.tab === 'Average People')
      this.hs.getAvgPeople().subscribe((res) => (this.temp = res));
    if (option.tab === 'Percentage')
      this.hs.getPercentage().subscribe((res) => (this.temp = res));
    if (option.tab === 'Floor Space')
      this.hs.getFloorSpace().subscribe((res) => (this.temp = res));
    if (option.tab === 'DeSo')
      this.hs.getDeSo().subscribe((res) => (this.temp = res));
  }
}
