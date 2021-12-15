import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CostsService {
  constructor(private http: HttpClient) {}
  temp: any;
  getSwedes() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0111/HushallT28'
    );
  }
  getRegion() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0111/HushallT29'
    );
  }
  getAvgPeople() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0111/HushallT30'
    );
  }
  getPercentage() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0111/HushallT27'
    );
  }
  getFloorSpace() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0111/HushallT23'
    );
  }
  getDeSo() {
    return this.http.get(
      'https://api.scb.se/OV0104/v1/doris/en/ssd/HE/HE0111/HE0111YDeSo'
    );
  }
}
