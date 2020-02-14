import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ErrorStateMatcher  } from '@angular/material/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  matcher: ErrorStateMatcher;

  constructor() {
    this.emailFormControl = new FormControl();
    this.passwordFormControl = new FormControl();
  }

  ngOnInit() {
  }
}
