import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent  } from './auth/sign-up/sign-up.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users/sign_in',
    component: SignInComponent
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
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
