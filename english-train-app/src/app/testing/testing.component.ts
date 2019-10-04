import { Component, OnInit } from '@angular/core';
import { TestingService } from '../services/testing.service';
import { FillTableService } from '../services/fillTable.service';
import { AuthService } from '../auth/auth.service.service';
import { Word } from '../models/word';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';
import { ArrayType } from '@angular/compiler';
import { Result } from '../models/result';
import { Router, ActivatedRoute } from '@angular/router';

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
  taskWord = '';
  count: number;
  db: AngularFirestore;
  wordCollectionTesting: AngularFirestoreCollection<Word>;
  wordsTesting: Observable<Word[]>;
  allWords = [];
  testingWords = [];
  wordsByType = [];
  fakeCollection: AngularFirestoreCollection<Word>;
  fakeResult: Observable<Word[]>;
  fakesArr = [];
  selectedAnswer = -1;
  selectedAnswerText = '';
  idAnswers = [0, 1, 2, 3];
  resultTemplate = {
    word: '',
    answer: '',
    correct: '',
    point: ''
  };
  result = [];
  resultView = [];
  resultCount = 0;
  resultDate = '';



  constructor(
    public testingService: TestingService,
    public wordService: FillTableService,
    public authService: AuthService,
    _db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.db = _db;
  }

  ngOnInit() {
    this.wordService.initTable(this.authService.user.email).forEach(item => this.count = item.length);
  }

  startTest() {
    let idWords = [];

    for (let i = 0; i <= this.count - 1; i++) {
      idWords.push(i);
    }

    this.shuffle(idWords);


    this.wordCollectionTesting = this.db.collection<Word>('words',
      ref => ref
        .where('userId', '==', this.authService.user.email));
    this.wordsTesting = this.wordCollectionTesting.valueChanges();
    this.wordsTesting.subscribe(items => {
      this.allWords = items;
      for (let i = 0; i < 10; i++) {
        let newWordObj = Object.create(wordTemplate);
        console.log(this.allWords[idWords[i]]);
        newWordObj.word = this.allWords[idWords[i]].word;
        const _typeId = this.allWords[idWords[i]].type;


        const fakeWords = this.allWords.filter(function (w) {
          return w.type === _typeId;
        });

        newWordObj.translation = this.allWords[idWords[i]].translation + 'correct'; // correct

        let fakesId = [];
        for (let i = 0; i < 3; i++) {
          fakesId.push(this.getRandomInt(fakeWords.length));
        }

        newWordObj.fakeTrans1 = fakeWords[fakesId[0]].translation; // fake1
        newWordObj.fakeTrans2 = fakeWords[fakesId[1]].translation; // fake2
        newWordObj.fakeTrans3 = fakeWords[fakesId[2]].translation; // fake3
        this.testingWords.push(newWordObj);
      }

      this.shuffle(this.idAnswers);
      this.taskWord = this.testingWords[0].word;
      this.answers[this.idAnswers[0]] = this.testingWords[0].translation;
      this.answers[this.idAnswers[1]] = this.testingWords[0].fakeTrans1;
      this.answers[this.idAnswers[2]] = this.testingWords[0].fakeTrans2;
      this.answers[this.idAnswers[3]] = this.testingWords[0].fakeTrans3;
      this.isTestStarted = true;
    });

    const wordTemplate = {
      word: '',
      translation: '',
      fakeTrans1: '',
      fakeTrans2: '',
      fakeTrans3: ''
    };


  }


  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  selectAnswer(answer: string, index: number) {
    this.selectedAnswer = index;
    this.selectedAnswerText = answer;
  }

  nextWord(currentTestWord: number) {

    let resultNew = Object.create(this.resultTemplate);

    resultNew.word = this.taskWord;
    resultNew.answer = this.selectedAnswerText;
    resultNew.correct = this.testingWords[currentTestWord - 1].translation;

    if (this.selectedAnswerText === this.testingWords[currentTestWord - 1].translation) {
      resultNew.point = 1;
    } else {
      resultNew.point = 0;
    }
    this.result.push(resultNew);
    currentTestWord++;
    this.currentNum++;
    this.selectedAnswer = -1;


    if (this.currentNum === 11 && this.result.length === 10) {
      this.resultView = this.result.filter(function (res) {
        return res.point === 1;
      });

      debugger;
      this.resultCount = this.resultView.length;
      this.resultDate = this.getCurrentDate();
      const result: Result = {
        id: '',
        userId: this.authService.user.email,
        result: this.resultCount,
        date: this.resultDate
      };
      this.testingService.result = result;
      this.testingService.addResult(result);
      this.router.navigate(['.. /result'], { relativeTo: this.route });


    } else {
      this.shuffle(this.idAnswers);
      this.taskWord = this.testingWords[currentTestWord - 1].word;
      this.answers[this.idAnswers[0]] = this.testingWords[currentTestWord - 1].translation;
      this.answers[this.idAnswers[1]] = this.testingWords[currentTestWord - 1].fakeTrans1;
      this.answers[this.idAnswers[2]] = this.testingWords[currentTestWord - 1].fakeTrans2;
      this.answers[this.idAnswers[3]] = this.testingWords[currentTestWord - 1].fakeTrans3;
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getCurrentDate() {
    const today = new Date();
    return today.toString();
  }

}
