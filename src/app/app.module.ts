import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { ClickService } from './click.service';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
