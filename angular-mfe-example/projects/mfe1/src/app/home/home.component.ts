import { Component, OnInit } from '@angular/core';
import { SharedService } from 'sh-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  respStr = '';
  respObj : any;
  on=false;
  off=false;
  na = false;

  constructor(private shServ: SharedService) { }

  ngOnInit(): void {
  }

  callApiMethod() {
    this.shServ.apiConnect('WeatherForecast/data', '').subscribe(res => {
      this.respStr = res;
    }, err => {
      console.log(err)
    })
  }

  callGraphQlApi() {
    this.shServ.apiConnectPost('graphql/', { query :"query{event(eventId:1){eventName speaker }}" }).subscribe(res => {
      this.respObj = res;
    }, err => {
      console.log(err)
    })
  }

  setLC(){
    this.shServ.setLocalStorageValue('authcode', 'admin');
  }

  clearLC() {
    this.shServ.clearLocalStorageValue();
  }

  public logout(): void {
    // todo
  }

}
