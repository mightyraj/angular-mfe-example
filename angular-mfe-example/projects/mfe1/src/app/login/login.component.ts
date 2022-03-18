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
    this.sh.apiConnectPost('', { query: 'query{users(type: "chk",name: "' + this.username + '", password: "' + this.password + '") {id, name, password }}' }).subscribe({
      next: (res: any) => {
        if (res.data.users.length > 0) {
          this.sh.setLocalStorageValue('authcode', res.data.users[0].name);
          this.sh.getLocalStorageValue();
          this.router.navigate(['base']);
        } else {
          alert("Unable to login, password or login id not valid")
        }
      }, error: (err) => {
        console.log(err)
        alert("Server error")
      }
    });

  }

}
