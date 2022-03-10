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

  async setLocalStorageValue(par: string, value: string) {
    const ls = localStorage.getItem('userData');
    if (ls && ls != '') {
      const data = JSON.parse(ls);
      data[par] = value;
      await localStorage.setItem('userData', JSON.stringify(data));
    } else {
      var data = '{"'+ par + '":"'+value +'"}';
      await localStorage.setItem("userData", data);
    }
  }

  getLocalStorageValue() {
    const ls = localStorage.getItem('userData');
    if (ls && ls != '') {
      return JSON.parse(ls);
    } else {
      return ls;
    }
  }

  clearLocalStorageValue() {
    localStorage.removeItem('userData');
  }

  apiConnect(url: string, par: any) {
    return this.httpClient.get('https://localhost:5001/' + url, {
      headers: this.getHeaders(),
      responseType: 'text',
      params: par
    });
  } // https://localhost:5001/WeatherForecast/data

  apiConnectPost(url: string, par: any) {
    return this.httpClient.post('https://localhost:5001/' + url, par, { headers: this.getHeaders() });
  }

  getHeaders() {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer '
    });
    return headers;
  }

}
