import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'sh-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private sh: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.sh.apiConnectPost('WeatherForecast/login', {query: "query{users(id:1) {id,name,password}}"} ).subscribe(res => {
      console.log(res)
      this.sh.setLocalStorageValue('authcode', 'token');
      this.sh.getLocalStorageValue();
      this.router.navigate(['base']);
    }, err => {
      console.log(err)
    })

  }

}
