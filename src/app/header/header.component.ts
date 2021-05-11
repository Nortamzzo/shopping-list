import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  user = '';
  constructor() { }

  ngOnInit(): void {

  }

}
