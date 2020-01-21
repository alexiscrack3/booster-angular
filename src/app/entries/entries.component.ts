import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entriesService: EntriesService) { }

  ngOnInit() {
    this.getEntries();
  }

  getEntries(): void {
    this.entriesService.getEntries().subscribe(entries => {
      this.entries = entries;
    });
  }
}
