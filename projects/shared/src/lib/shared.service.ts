import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sub$: BehaviorSubject<string> = new BehaviorSubject('');
  userName: string = '';
  constructor() { }

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
}
