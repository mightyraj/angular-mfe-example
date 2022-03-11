import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'sh-lib';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private sh: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.sh.clearLocalStorageValue();
    this.router.navigate(["/login"])
  }

}
