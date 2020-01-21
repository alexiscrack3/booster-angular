import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entry } from '../models/entry';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  private entriesCollection: AngularFirestoreCollection<Entry>;
  private entries: Observable<Entry[]>;

  constructor(db: AngularFirestore) {
    this.entriesCollection = db.collection<Entry>('entries');
    this.entries = this.entriesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Entry;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  getEntries(): Observable<Entry[]> {
    return this.entries;
  }

  onSelectEntry(entry: Entry): void {
  }
}
