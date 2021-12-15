import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  routes = [
    {
      routeTitle: 'Tax assessment',
      route: '/categories/publicFinance',
    },
    {
      routeTitle: 'Local taxes',
      route: '/categories/publicFinance/localTax',
    },
    {
      routeTitle: 'Annual accounts',
      route: '/categories/publicFinance/annualAccounts',
    },
    {
      routeTitle: 'Publicly owned enterprises',
      route: '/categories/publicFinance/enterprises',
    },
    {
      routeTitle: 'The Swedish Central Government Debt',
      route: '/categories/publicFinance/debt',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
