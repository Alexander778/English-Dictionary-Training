import { Component, OnInit } from '@angular/core';
import { typeWord } from '../models/typeWord';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Word } from '../models/word';
import { FillTableService } from '../services/fillTable.service';
import { isUndefined } from 'util';


@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {
  selected = null;
  isEditMode = this.wordService.isEditMode;
  id = this.wordService.currentWord.id;
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
    public wordService: FillTableService) { }

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

  onSubmit() {
    /*const word = this.wordGroup.,
      translation = form.value.translation,
      type = this.selected;


    if (word !== '' && translation !== '' && type !== null) {
      const newWord = new Word();
      newWord.word = word;
      newWord.translation = translation;
      newWord.type = type;*/


  }
}

