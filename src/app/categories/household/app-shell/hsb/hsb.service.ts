import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HsbService {
  constructor(private http: HttpClient) {}
  temp: any;
  getExpenditure() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0201/HE0201A/HUTutgift5'
    );
  }
  getAggregation() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0201/HE0201A/HUTutgift6'
    );
  }
}
