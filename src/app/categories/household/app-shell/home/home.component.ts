import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  routes = [
    {
      routeTitle: 'Income & Tax Statistics',
      route: '/categories/householdFinance/',
    },
    {
      routeTitle: 'Household budget survey',
      route: '/categories/householdFinance/HSB',
    },
    {
      routeTitle: 'Households Housing',
      route: '/categories/householdFinance/housing',
    },
    {
      routeTitle: 'Housing Costs',
      route: '/categories/householdFinance/costs',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
