import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
