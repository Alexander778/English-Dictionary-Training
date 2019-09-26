import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';

@Component({
  selector: 'app-wordslist',
  templateUrl: './wordslist.component.html',
  styleUrls: ['./wordslist.component.css']
})
export class WordslistComponent implements OnInit {
  words: Array<Word> = [
    {
      id: 1,
      word: 'a pen',
      translation: 'ручка'
    },
    {
      id: 2,
      word: 'a pencil',
      translation: 'олівець'
    },
    {
      id: 3,
      word: 'an apple',
      translation: 'яблуко'
    },
    {
      id: 4,
      word: 'awesome',
      translation: 'крутий'
    },
    {
      id: 5,
      word: 'amazing',
      translation: 'дивовижний'
    }
  ];
  displayedColumns: string[] = ['Position', 'Word', 'Translation', 'Action'];
  iconsState = {};
  constructor() {
  }

  ngOnInit() {
  }

  showActions(act: boolean, index: number) {
    this.iconsState[index] = act;
  }


}
