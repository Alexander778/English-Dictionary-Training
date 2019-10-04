import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Result } from '../models/result';

@Injectable()
export class TestingService {

    lengthWord: number;
    resultCollection: AngularFirestoreCollection<Result>;
    db: AngularFirestore;
    result: Result;

    constructor(_db: AngularFirestore) {
        this.db = _db;
    }

    addResult(result: Result) {
        this.resultCollection = this.db.collection<Result>('results');
        result.id = this.db.createId();
        this.resultCollection.doc(result.id).set(JSON.parse(JSON.stringify(result)));
    }
}