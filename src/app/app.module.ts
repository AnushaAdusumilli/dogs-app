import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DogsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
