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
  count = 10;
  writeWord = [
    {
      word: 'a test',
      correct: 'тест',
      answer: 'яблуко'
    },
    {
      word: 'a test',
      correct: 'тест',
      answer: 'яблуко'
    },
    {
      word: 'a test',
      correct: 'тест',
      answer: 'яблуко'
    },
    {
      word: 'a test',
      correct: 'тест',
      answer: 'яблуко'
    },
    {
      word: 'a test',
      correct: 'тест',
      answer: 'яблуко'
    }
  ];
  wrongWord = [
    {
      word: 'a test2',
      correct: 'тест2',
      answer: 'яблуко2'
    },
    {
      word: 'a test2',
      correct: 'тест2',
      answer: 'яблуко2'
    },
    {
      word: 'a test2',
      correct: 'тест2',
      answer: 'яблуко2'
    },
    {
      word: 'a test2',
      correct: 'тест2',
      answer: 'яблуко2'
    },
    {
      word: 'a test2',
      correct: 'тест2',
      answer: 'яблуко2'
    }
  ];
  ngOnInit() {
  }

}
