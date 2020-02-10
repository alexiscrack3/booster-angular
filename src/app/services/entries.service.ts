import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { of, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Entry } from '../models/entry';
import { Category } from '../models/category';
import { Sense } from '../models/sense';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  // private entriesCollection: AngularFirestoreCollection<Entry>;
  // private entries: Observable<Entry[]>;
  private entries: Entry[] = [
    new Entry(
      '1',
      'mumble',
      Category.Verb,
      [
        new Sense(
          'feeling sad and without hope',
          [
            'He became very gloomy and depressed'
          ]
        )
      ]
    ),
    new Entry(
      '2',
      'gloomy',
      Category.Adjective,
      [
        new Sense(
          'feeling sad and without hope',
          [
            'He became very gloomy and depressed'
          ]
        )
      ]
    ),
    new Entry(
      '3',
      'cocky',
      Category.Adjective,
      [
        new Sense(
          'very confident in an annoying way'
        )
      ]
    ),
    new Entry(
      '4',
      'chatty',
      Category.Adjective,
      [
        new Sense(
          'someone who is chatty enjoys talking a lot in a friendly way',
          [
            'Rosie is certainly in a chatty mood today'
          ]
        )
      ]
    )
  ];

  constructor(
    // private db: AngularFirestore
  ) {
    // this.entriesCollection = db.collection<Entry>('entries');
    // this.entries = this.entriesCollection.snapshotChanges().pipe(
    //   map(changes => {
    //     return changes.map(a => {
    //       const data = a.payload.doc.data() as Entry;
    //       data.id = a.payload.doc.id;
    //       return data;
    //     });
    //   }));
  }

  getEntries(): Observable<Entry[]> {
    return of(this.entries);
  }

  getEntry(id: String): Observable<Entry> {
    const entry = this.entries.find(entry => entry.id === id);
    return of(entry);
  }

  // getEntries(): Observable<Entry[]> {
  //   return this.entries;
  // }

  // onSelectEntry(entry: Entry): void {
  // }
}
