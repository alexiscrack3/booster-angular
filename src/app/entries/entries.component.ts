import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [
    {
      id: '1',
      class: 'noun',
      headword: 'soccer'
  }, {
    id: '2',
    class: 'verb',
    headword: 'run'
  }, {
    id: '3',
    class: 'noun',
    headword: 'climbing'
  }
];

  selectedEntry: Entry;

  constructor() { }

  ngOnInit() {
  }

  onSelectEntry(entry: Entry): void {
    this.selectedEntry = entry;
  }
}
