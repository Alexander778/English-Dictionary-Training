import { Component, OnInit } from '@angular/core';
import { TestingService } from '../services/testing.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  constructor(public testingService: TestingService) { }

  // resultCount = this.testingService.result.result;
  displayedColumns: string[] = ['Word', 'Answer'];
  count = 7;
  progressColor = 'yellow';
  idTest = 'testId';


  resultWords = [
    {
      word: 'a test',
      correct: 'тест',
      answer: 'яблуко',
      point: 1
    },
    {
      word: 'a test',
      correct: 'тест',
      answer: 'тест',
      point: 1
    },
    {
      word: 'a test',
      correct: 'тест',
      answer: 'яблуко',
      point: 1
    },
    {
      word: 'a test',
      correct: 'тест',
      answer: 'тест',
      point: 0
    },
    {
      word: 'a test',
      correct: 'тест',
      answer: 'яблуко',
      point: 0
    }
  ];

  ngOnInit() {
    if (this.count < 3) {
      this.progressColor = 'red';
    } else if (this.count > 3 && this.count < 7) {
      this.progressColor = 'yellow';
    } else {
      this.progressColor = 'green';
    }
  }

}
