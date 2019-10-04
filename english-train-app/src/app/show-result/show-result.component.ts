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

  count = this.testingService.result.result;
  resultWords = this.testingService.testHistory;

  ngOnInit() {
    if (this.count < 3) {
      this.progressColor = 'red';
    } else if (this.count > 3 && this.count < 7) {
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
