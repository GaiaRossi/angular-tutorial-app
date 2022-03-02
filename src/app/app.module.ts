import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

/**per poter usare ngModel devo importare FormsModule */
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  /**devo aggiungerlo anche qui cosi lo importa */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
