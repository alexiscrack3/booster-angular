import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ErrorStateMatcher  } from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  emailFormControl: FormControl
  matcher: ErrorStateMatcher

  constructor() { }

  ngOnInit() {
  }
}
