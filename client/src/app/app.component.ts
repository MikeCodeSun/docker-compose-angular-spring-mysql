import { Component, OnInit } from '@angular/core';
import { AppService, User } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  title = 'world';
  users: User[] = [];
  name: string = '';
  addUser() {
    if (!this.name || this.name.trim() === '') return;
    this.appService.addUser(this.name).subscribe(
      (res) => {
        this.users.push(res);
        this.name = '';
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUser() {
    this.appService.getUser().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.getUser();
  }
}
