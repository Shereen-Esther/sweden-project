import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HsbService } from './hsb.service';
@Component({
  selector: 'app-hsb',
  templateUrl: './hsb.component.html',
  styleUrls: ['./hsb.component.scss'],
})
export class HsbComponent implements OnInit {
  tabs: FormGroup = new FormGroup({
    tabValue: new FormControl('Disposable Income'),
  });
  tabList = [
    {
      tab: 'Disposable Income',
    },
    {
      tab: 'Aggregated Municipalities',
    },
  ];
  temp: any;
  constructor(private is: HsbService) {}

  ngOnInit(): void {
    this.is.getExpenditure().subscribe((res) => (this.temp = res));
  }
  getData(option: any) {
    if (option.tab === 'Disposable Income')
      this.is.getExpenditure().subscribe((res) => (this.temp = res));
    if (option.tab === 'Aggregated Munici[alities')
      this.is.getAggregation().subscribe((res) => (this.temp = res));
  }
}
