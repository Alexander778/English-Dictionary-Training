import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  login = 'testlogin'; // test
  bestResult = 23; // test

  constructor() { }

  ngOnInit() {
  }


}
