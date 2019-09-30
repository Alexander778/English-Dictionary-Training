import { Component, OnInit } from '@angular/core';
import { FillTableService } from '../services/fillTable.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-confirm-del-word',
  templateUrl: './dialog-confirm-del-word.component.html',
  styleUrls: ['./dialog-confirm-del-word.component.css']
})
export class DialogConfirmDelWordComponent implements OnInit {

  constructor(public wordService: FillTableService, private dialogRef: MatDialogRef<DialogConfirmDelWordComponent>) { }

  word = this.wordService.currentWord.word;
  id = this.wordService.currentWord.id;
  ngOnInit() {
  }

  yesDelete(id: string) {
    this.wordService.removeWord(this.wordService.currentWord.id);
    this.dialogRef.close();
  }

  noDelete() {
    this.dialogRef.close();
  }

}
