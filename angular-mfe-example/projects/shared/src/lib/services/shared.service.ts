import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sub$: BehaviorSubject<string> = new BehaviorSubject('');
  userName: string = '';
  constructor(private httpClient: HttpClient) { }

  getStoredValue() {
    return this.sub$.getValue();
  }

  setStoredValue(parValue: string) {
    this.sub$.next(parValue);
  }

  setVal(param: string) {
    this.userName = param;
  }

  getVal() {
    return this.userName
  }

  apiConnect(url: string, params: any) {
    return this.httpClient.get('https://localhost:5001/' + url, {
      headers: this.getHeaders(),
      responseType: 'text'
    });
  } // https://localhost:5001/WeatherForecast/data

  getHeaders() {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer '
    });
    return headers;
  }

}
