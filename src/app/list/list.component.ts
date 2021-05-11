import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  appHost = 'http://192.168.1.10:9525/';
  whatArray = [];
  whereArray = [];
  isLogin: boolean = false;
  user = '';


  constructor(
    private dataService: DataService,
    private _auth: AuthService,
    private _api: ApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.isUserLogin();
    // this.getListData();
  }

  // API Calls

  isUserLogin() {
    console.log(this._auth.getUserDetails())
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
      this.user = this._auth.getUserDetails();

    }
  }

  // getListData(user) {
  //   fetch(this.appHost + 'data/getList')
  //     .then(response => response.json())
  //     .then(data => this.loadList(data['data']));
  // }

  // Functions

    getListData() {
    this._api.getTypeRequest('data/getList').subscribe((res: any) => {
      if (!res.status) {
        console.log(res.data)
      }
    })
  };

  loadList(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
      table.innerHTML = "<tr><td class='no-data' colspan='7'>No Data</td></tr>";
      return;
    }

    let tableHtml = "";

    data.forEach(function ({
      id,
      buy_when,
      buy_what,
      buy_where,
      purchased
    }) {
      if (purchased == 1) {
        tableHtml += `<tr class="purchased">`;
      } else {
        tableHtml += `<tr">`;
      }
      tableHtml += `<td hidden class="table-id">${id}</td>`;
      tableHtml += `<td class="table-when">${new Date(buy_when).toLocaleString().split(', ')[0]}</td>`;
      tableHtml += `<td class="table-what"><strong>${buy_what}<strong></td>`;
      tableHtml += `<td class="table-where"><strong>${buy_where}</strong></td>`;
      tableHtml += `<td class="table-edit"><button class="button is-warning is-rounded is-small edit-row-btn ov-edit-button" data-id=${id}>Edit</td>`;
      tableHtml += `<td class="table-delete"><button class="button is-danger is-rounded is-small delete-row-btn" data-id=${id}>⍉</td>`;
      tableHtml += `<td class="table-bought"><button class="button is-primary is-rounded is-small table-btn-bought" data-id=${id}>✓</td>`;
      tableHtml += `<td hidden class="table-purchased" data-purchased=${purchased}></td>`;
      tableHtml += "</tr>";
      // this.whatArray.push(buy_what);
      // this.whereArray.push(buy_where);
    });
    table.innerHTML = tableHtml;
  };


}
