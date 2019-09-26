import { Injectable } from '@angular/core';
import { Word } from '../models/word';

@Injectable()
export class AddNewWordService {

    addWord(item: Word, array: Array<Word>) {
        array.push(item);
    }
}  
