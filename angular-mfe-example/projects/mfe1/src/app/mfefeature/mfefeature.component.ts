import { Component, OnInit } from '@angular/core';
import { SharedService } from 'sh-lib';


@Component({
  selector: 'app-mfefeature',
  templateUrl: './mfefeature.component.html',
  styleUrls: ['./mfefeature.component.css']
})
export class MfefeatureComponent implements OnInit {
  valFrom : any;
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.valFrom = this.shared.getVal();
    console.log(this.valFrom)
    this.valFrom = this.shared.getStoredValue()
    console.log(this.valFrom)
  }

}
