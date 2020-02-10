import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { SignUpComponent  } from './auth/sign-up/sign-up.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users/sign_up',
    component: SignUpComponent
  },
  {
    path: 'entries',
    component: EntriesComponent
  },
  {
    path: 'entries/:id',
    component: EntryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
