import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';

@Component({
  selector: 'app-tableword',
  templateUrl: './tableword.component.html',
  styleUrls: ['./tableword.component.css']
})
export class TablewordComponent implements OnInit {
  words: Array<Word> = [
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
  ];
  displayedColumns: string[] = ['Position', 'Word', 'Translation', 'Action'];
  iconsState = {};

  constructor() { }

  ngOnInit() {
  }

  showActions(act: boolean, index: number) {
    this.iconsState[index] = act;
  }

  editWord(i: number) {

  }
  deleteWord(i: number) {
    console.log(i);
  }

}
