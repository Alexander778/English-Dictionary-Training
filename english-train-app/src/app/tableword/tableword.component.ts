import {Component, OnInit} from '@angular/core';
import {Word} from '../models/word';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {AuthService} from '../auth/auth.service.service';
import {FillTableService} from '../services/fillTable.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogWindowComponent} from '../dialog-window/dialog-window.component';
import {DialogConfirmDelWordComponent} from '../dialog-confirm-del-word/dialog-confirm-del-word.component';

@Component({
  selector: 'app-tableword',
  templateUrl: './tableword.component.html',
  styleUrls: ['./tableword.component.css']
})
export class TablewordComponent implements OnInit {

  displayedColumns: string[] = ['Position', 'Word', 'Translation', 'Action'];
  iconsState = {};
  words: Observable<Word[]>;


  constructor(
    public wordService: FillTableService,
    private dialog: MatDialog,
    public authService: AuthService) {
  }

  ngOnInit() {
    this.wordService.initTable(this.authService.user.email);
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
