import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { MusicCardComponent } from './music-card/music-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MusicCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
