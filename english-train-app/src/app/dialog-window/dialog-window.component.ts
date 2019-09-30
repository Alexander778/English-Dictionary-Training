import {Component, OnInit} from '@angular/core';
import {typeWord} from '../models/typeWord';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {FillTableService} from '../services/fillTable.service';


@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {
  selected = null;
  isEditMode = this.wordService.isEditMode;
  id = '';
  wordGroup: FormGroup;
  types: Array<typeWord> = [
    {
      id: 1,
      name: 'Noun'
    },
    {
      id: 2,
      name: 'Ajectiive'
    },
    {
      id: 3,
      name: 'Verb'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogWindowComponent>,
    public wordService: FillTableService) {
  }

  ngOnInit() {
    this.initForm();
  }


  cancel() {
    this.dialogRef.close();
  }


  initForm() {
    let wordForm = '';
    let translationForm = '';
    let typeForm = 0;

    if (this.isEditMode) {
      this.id = this.wordService.currentWord.id;
      wordForm = this.wordService.currentWord.word;
      translationForm = this.wordService.currentWord.translation;
      typeForm = this.wordService.currentWord.type;
    }

    this.wordGroup = new FormGroup({
      'word': new FormControl(wordForm),
      'translation': new FormControl(translationForm),
      'type': new FormControl(typeForm)
    });

  }

  saveNewWord() {
    this.wordService.addWord(this.wordGroup.value);
    this.dialogRef.close();
  }

  saveEditWord(id: string) {
    this.wordService.updateWord(this.wordGroup.value, id);
    this.dialogRef.close();
  }
}

