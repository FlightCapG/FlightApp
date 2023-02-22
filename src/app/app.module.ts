import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterPassengerComponent } from './register-passenger/register-passenger.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';

const allLinks: Routes = [
  { path: 'registerpassenger', component: RegisterPassengerComponent },
  { path: 'viewpassenger', component: ViewPassengerComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterPassengerComponent,
    ViewPassengerComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(allLinks), FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
