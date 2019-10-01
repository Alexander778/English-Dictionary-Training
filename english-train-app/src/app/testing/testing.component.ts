import { Component, OnInit } from '@angular/core';
import { TestingService } from '../services/testing.service';
import { FillTableService } from '../services/fillTable.service';
import { AuthService } from '../auth/auth.service.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  currentNum = 1;
  countNum = 10;
  isTestStarted = false;
  answers = ['a test', 'a test2', 'a test3', 'a test4'];
  taskWord = 'a test';
  count: number;


  constructor(public testingService: TestingService, public wordService: FillTableService, public authService: AuthService) { }

  ngOnInit() {
  }

  startTest() {
    this.wordService.initTable(this.authService.user.email).forEach(item => this.count = item.length);
    console.log(this.count);

    console.log(Math.floor(Math.random() * this.count) + 1);







    // this.isTestStarted = true;
  }

}
