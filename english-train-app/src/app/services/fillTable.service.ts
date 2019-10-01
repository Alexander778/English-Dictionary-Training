import {Injectable, OnInit} from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore';
import {Word} from '../models/word';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service.service';

@Injectable()
export class FillTableService {

  wordCollection: AngularFirestoreCollection<Word>;
  db: AngularFirestore;
  words: Observable<Word[]>;
  currentWord: Word;
  isEditMode = false;


  constructor(_db: AngularFirestore, public authService: AuthService) {
    this.db = _db;
  }


  initTable(userId: string) {
    this.wordCollection = this.db.collection<Word>('words',
      ref => ref.where('userId', '==', userId));
    this.words = this.wordCollection.valueChanges();
  }

  addWord(word: Word) {
    word.id = this.db.createId();
    word.userId = this.authService.user.email;
    this.wordCollection.doc(word.id).set(JSON.parse(JSON.stringify(word)));
  }

  removeWord(id: string) {
    this.db.collection('words').doc(id).delete();
  }

  updateWord(word: Word, id: string) {
    this.db.collection('words').doc(id).update(
      {'word': word.word, 'translation': word.translation, 'type': word.type});
  }
}
