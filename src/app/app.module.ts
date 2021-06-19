import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

import { from } from 'rxjs';

export const appRouter: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forRoot(appRouter),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
