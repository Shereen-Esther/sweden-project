import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  constructor(private http: HttpClient) {}
  getIncomePersons() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/OE/OE0701/ForvInkomsterAN'
    );
  }
  getIncomeHousehold() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/OE/OE0701/DebSkatterB'
    );
  }
  getIncomeDistribution() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/OE/OE0701/DebSkatterA'
    );
  }
  getIncomeMobility() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/OE/OE0701/DebSkatterAvgifterC'
    );
  }
  getTaxes() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/OE/OE0701/KapInkomsterA'
    );
  }
  getDeSo() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/OE/OE0701/SkatteredukSpec'
    );
  }
}
