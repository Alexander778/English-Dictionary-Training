import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service.service';
import { FillTableService } from '../services/fillTable.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { DialogConfirmDelWordComponent } from '../dialog-confirm-del-word/dialog-confirm-del-word.component';

@Component({
  selector: 'app-tableword',
  templateUrl: './tableword.component.html',
  styleUrls: ['./tableword.component.css']
})
export class TablewordComponent implements OnInit {

  _db: AngularFirestore;
  // words: Observable<any[]>;
  /*words: Array<Word> = [
    {
      id: 1,
      word: 'a pen',
      translation: 'ручка',
      type: 1
    },
    {
      id: 2,
      word: 'a pencil',
      translation: 'олівець',
      type: 1
    },
    {
      id: 3,
      word: 'an apple',
      translation: 'яблуко',
      type: 1
    },
    {
      id: 4,
      word: 'awesome',
      translation: 'крутий',
      type: 2
    },
    {
      id: 5,
      word: 'amazing',
      translation: 'дивовижний',
      type: 2
    },
    {
      id: 6,
      word: 'to go',
      translation: 'йти',
      type: 3
    }
  ];*/
  displayedColumns: string[] = ['Position', 'Word', 'Translation', 'Action'];
  iconsState = {};
  words: Observable<Word[]>;


  constructor(
    public wordService: FillTableService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar) {
    // this.words = this.fillService.words;
  }
  ngOnInit() {
    this.words = this.wordService.words;
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

}
