import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}
