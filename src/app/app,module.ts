import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ItemListComponent } from './itemlist/itemlist.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // Vos composants ici
  ],
  imports: [
    // Autres modules ici
    HttpClientModule, BrowserModule, FormsModule
  ],
  declarations: [AppComponent, ItemListComponent],
  bootstrap: [],
  providers: [],
})
export class AppModule {}

