import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private entriesCollection: AngularFirestoreCollection<Entry>;
  private entries: Observable<Entry[]>;

  constructor(db: AngularFirestore) {
    this.entriesCollection = db.collection<Entry>('entries');
    this.entries = this.entriesCollection.valueChanges();
  }

  getEntries(): Observable<Entry[]> {
    return this.entries;
  }
}
