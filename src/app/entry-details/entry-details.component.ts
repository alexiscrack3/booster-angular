import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EntriesService } from '../services/entries.service';
import { Entry } from '../models/entry';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent implements OnInit {
  entry: Entry;

  constructor(
    private route: ActivatedRoute,
    private entriesService: EntriesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.entriesService.getEntry(id).subscribe(entry => {
        this.entry = entry;
      });
    });
  }
}
