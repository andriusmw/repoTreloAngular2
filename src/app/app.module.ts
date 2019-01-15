import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrayDeTareasComponent } from './ArrayDeTareas/ArrayDeTareas.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayDeTareasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
