import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BadgeModule } from './badge/badge.module';

@NgModule({
  imports: [BrowserModule, FormsModule, BadgeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
