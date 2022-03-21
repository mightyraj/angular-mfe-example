import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'sh-lib';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showForm = false;
  displayedColumns: string[] = ['edit', 'delete', 'id', 'name', 'password'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  id = 0;
  username = "";
  password = "";
  isAdd = false;
  isEdit = false;
  isView = false;

  allDataQuery = 'query{users(type: "all"){id, name, password }}';

  constructor(private sh: SharedService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(value = this.allDataQuery) {
    this.sh.apiConnectPost('', { query: value }).subscribe({
      next: (res: any) => {
        if (this.isEdit) {
          if (res.data.users.length > 0) {
            this.id = res.data.users[0].id;
            this.username = res.data.users[0].name;
            this.password = res.data.users[0].password;
          }
        } else {
          this.dataSource = new MatTableDataSource(res.data.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        alert('server error')
      }
    })
  }

  addUser() {
    this.showForm = true;
    this.isAdd = true;
    this.username = "";
    this.password = "";
  }

  editUser(id: string) {
    this.showForm = true;
    this.isEdit = true;
    this.loadData('query{users(type: "id",id: ' + id + '){id, name, password }}');
  }

  onBackClick() {
    this.showForm = false;
    this.isAdd = false;
    this.isEdit = false;
    this.loadData();
  }

  onSave() {
    let mutStr = '';
    if (this.isAdd) {
      mutStr = 'mutation { addUser(input: {name: "' + this.username + '", password: "' + this.password + '"}) { user{id, name, password } } }'
    } else if (this.isEdit) {
      mutStr = 'mutation { editUser(input: {id: ' + this.id + ',name: "' + this.username + '", password: "' + this.password + '"}) { user{id, name, password } } }'
    }
    this.sh.apiConnectPost('', { query: mutStr }).subscribe({
      next: (res: any) => {
        this.showForm = false;
        this.isAdd = false;
        this.isEdit = false;
        this.loadData();
      },
      error: (err) => { console.log(err) },
    })
  }

  deleteUser(id: string) {
    if (confirm("Are you sure. Do you want to delete this record")) {
      this.sh.apiConnectPost('', { query: 'mutation { deleteUser(input: {id: ' + id + '}) { user{id, name, password } } }' }).subscribe({
        next: (res: any) => {
          this.loadData();
        },
        error: (err) => { console.log(err) },
      })
    }
  }

}

export interface TableElement {
  Id: string;
  Name: string;
  Password: string;
}
