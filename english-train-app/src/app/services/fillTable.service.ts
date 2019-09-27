import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Word } from '../models/word';
import { Observable } from 'rxjs';

@Injectable()
export class FillTableService {

    wordCollection: AngularFirestoreCollection<Word>;
    db: AngularFirestore;
    words: Observable<Word[]>;
    typeId = 0;

    constructor(_db: AngularFirestore) {
        this.db = _db;

    }

    fillTable(tabstripId: number): Observable<Word[]> {
        let typeid = 0;
        switch (tabstripId) {
            case 0:
                typeid = 1;
                break;
            case 1:
                typeid = 2;
                break;
            case 2:
                typeid = 3;
                break;
        }

        this.wordCollection = this.db.collection('words', ref => ref.where('type', '==', typeid));
        this.words = this.wordCollection.valueChanges();
        return this.words;
    }
}
