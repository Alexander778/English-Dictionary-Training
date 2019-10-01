import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service.service';
import { FillTableService } from '../services/fillTable.service';
import { MatDialog } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { DialogConfirmDelWordComponent } from '../dialog-confirm-del-word/dialog-confirm-del-word.component';
import { isUndefined } from 'util';

@Component({
  selector: 'app-tableword',
  templateUrl: './tableword.component.html',
  styleUrls: ['./tableword.component.css']
})
export class TablewordComponent implements OnInit {

  displayedColumns: string[] = ['Position', 'Word', 'Translation', 'Action'];
  iconsState = {};
  words: Observable<Word[]>;
  arrayT = [];
  pageSize = 10;  // set default to 10
  pageSizeOptions = [5, 10, 25, 100];
  pageIndex = 5;
  length;
  wordPageCollection: AngularFirestoreCollection<Word>;
  db: AngularFirestore;


  constructor(
    public wordService: FillTableService,
    private dialog: MatDialog,
    public authService: AuthService,
    public _db: AngularFirestore) {

    this.db = _db;
  }

  ngOnInit() {
    this.wordService.initTable(this.authService.user.email);
    this.words = this.getPagingWord();
  }

  openDialog(dialogCom: any, width: string, height: string): void {
    const dialogRef = this.dialog.open(dialogCom, {
      width: width,
      height: height
    });
  }

  AddWord() {
    this.openDialog(DialogWindowComponent, '250px', '340px');
    this.wordService.isEditMode = false;
  }


  showActions(act: boolean, index: number) {
    this.iconsState[index] = act;
  }

  editWord(element: any) {
    this.wordService.isEditMode = true;
    this.wordService.currentWord = element;
    this.openDialog(DialogWindowComponent, '250px', '340px');
  }

  deleteWord(element: any) {
    this.wordService.currentWord = element;
    this.openDialog(DialogConfirmDelWordComponent, '300px', '150px');

  }

  getPagingWord(event?: any): Observable<Word[]> {
    if (!isUndefined(event)) {
      this.wordPageCollection = this.db.collection<Word>('words',
        ref => ref
          .where('userId', '==', this.authService.user.email)
          .orderBy('word')
          .startAt(event.pageIndex)
          .limit(event.pageSize));
    } else {
      this.wordPageCollection = this.db.collection<Word>('words',
        ref => ref
          .where('userId', '==', this.authService.user.email)
          .orderBy('word')
          .startAt(this.pageIndex)
          .limit(this.pageSize));
    }

    this.words = this.wordPageCollection.valueChanges();
    this.wordPageCollection.valueChanges().forEach(item => this.length = item.length);
    this.words
      .subscribe(w => {
        this.arrayT = Object.values(w);
      });
    return this.words;
  }

  searchWord(text:string) {
    debugger;
    let ordByType = '';
    if (text !== '') {
      const english = /^[A-Za-z0-9]{1,2} [A-Za-z0-9]*$/;
      ordByType = english.test(text) ? 'word' : 'translation';
    } else {
      ordByType = 'word';
    }

    this.wordPageCollection = this.db.collection<Word>('words',
      ref => ref
        .where('userId', '==', this.authService.user.email)
        .orderBy(ordByType)
        .startAt(text)
        .endAt(text + '\uf8ff'));
    this.words = this.wordPageCollection.valueChanges();
  }
}
