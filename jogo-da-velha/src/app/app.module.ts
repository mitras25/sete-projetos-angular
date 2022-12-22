import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JogoDaVelhaModule } from './jogo-da-velha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, JogoDaVelhaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
