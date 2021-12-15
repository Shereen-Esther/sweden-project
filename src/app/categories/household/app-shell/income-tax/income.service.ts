import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  constructor(private http: HttpClient) {}
  temp: any;
  getIncomePersons() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0110/HE0110A/NetInk02'
    );
  }
  getIncomeHousehold() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0110/HE0110G/TabDispH1'
    );
  }
  getIncomeDistribution() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0110/HE0110F/Tab13InkStruktN'
    );
  }
  getIncomeMobility() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0110/HE0110H/TABIRI3N'
    );
  }
  getTaxes() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0110/HE0110B/PrivPensSpar'
    );
  }
  getDeSo() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0110/HE0110I/Tab4InkDesoN1'
    );
  }
}
