import { Component, OnInit } from '@angular/core';
import { SharedService } from 'sh-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  respStr = '';
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

}
