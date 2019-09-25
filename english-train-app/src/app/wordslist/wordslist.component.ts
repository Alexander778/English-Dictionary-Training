import {Component, OnInit} from '@angular/core';
import {Word} from "../models/word";

@Component({
  selector: 'app-wordslist',
  templateUrl: './wordslist.component.html',
  styleUrls: ['./wordslist.component.css']
})
export class WordslistComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  words: Array<Word> = [
    {
      Id: 1,
      word: 'a pen',
      translation: 'ручка',
      icon: 'home'
    },
    {
      Id: 2,
      word: 'a pencil',
      translation: 'олівець',
      icon: 'home'
    },
    {
      Id: 3,
      word: 'an apple',
      translation: 'яблуко',
      icon: 'home'
    },
    {
      Id: 4,
      word: 'awesome',
      translation: 'крутий',
      icon: 'home'
    },
    {
      Id: 5,
      word: 'amazing',
      translation: 'дивовижний',
      icon: 'home'
    }
  ];
  displayedColumns: string[] = ['word', 'translation'];

  test()
  {
    console.log("Test");
  }

  test2()
  {
    console.log("Test2");
  }
}
