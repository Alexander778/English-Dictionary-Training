import { Component, OnInit } from '@angular/core';
import { TestingService } from '../services/testing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  constructor(public testingService: TestingService, private router: Router) { }

  displayedColumns: string[] = ['Word', 'Answer'];
  progressColor = '';
  idTest = 'testId';


  userResult = this.testingService.result.result;
  maxResult = this.testingService.result.maxResult;
  percent;
  resultWords = this.testingService.testHistory;

  ngOnInit() {
    this.percent = (this.userResult * 100) / this.maxResult;
    console.log(this.percent);

    if (this.percent < 30) {
      this.progressColor = 'red';
    } else if (this.percent > 30 && this.percent < 70) {
      this.progressColor = 'yellow';
    } else {
      this.progressColor = 'green';
    }
  }

  openStat() {
    this.router.navigate(['./main/user']);
  }
  testAgain() {
    this.router.navigate(['./main/testing']);
  }

}
