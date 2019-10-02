import { Component, OnInit } from '@angular/core';
import { TestingService } from '../services/testing.service';
import { FillTableService } from '../services/fillTable.service';
import { AuthService } from '../auth/auth.service.service';
import { Word } from '../models/word';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

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



  constructor(
    public testingService: TestingService,
    public wordService: FillTableService,
    public authService: AuthService,
    _db: AngularFirestore
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
    this.wordsTesting.subscribe(items => this.allWords = items);

    const wordTemplate = {
      word: '',
      translation: '',
      fakeTrans1: '',
      fakeTrans2: '',
      fakeTrans3: ''
    };

    for (let i = 0; i < 10; i++) {
      let newWordObj = Object.create(wordTemplate);
      newWordObj.word = this.allWords[idWords[i]].word;
      //newWordObj.translation = this.allWords[idWords[i]].translation;
      // random translate
      this.getAllFake(this.allWords[idWords[i]].type);

      const idAnswers = [0, 1, 2, 3];
      this.shuffle(idAnswers);
      newWordObj.translation = this.answers[idAnswers[0]] = this.allWords[idWords[i]].translation + 'correct'; // correct
      newWordObj.fakeTrans1 = this.answers[idAnswers[1]] = this.allWords[idWords[i]].translation;
      newWordObj.fakeTrans2 = this.answers[idAnswers[2]] = this.allWords[idWords[i]].translation;
      newWordObj.fakeTrans3 = this.answers[idAnswers[3]] = this.allWords[idWords[i]].translation;
      // 
      this.testingWords.push(newWordObj);
    }

    this.testingWords.forEach(item => console.log(item));
    // this.taskWord = this.testingWords[0].word;
    // this.answers[0] = this.testingWords[0].translation;

  }


  getAllFake(type: number) {
    const fakeCollection = this.db.collection<Word>('words',
      ref => ref
        .where('userId', '==', this.authService.user.email)
        .where('type', '==', type));
    const faketranslation = fakeCollection.valueChanges();
    //faketranslation.forEach(item => console.log(item));
  }


  nextWord() {
    console.log('Next');
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

}
