import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule  } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from "@angular/forms"
import { AuthService } from './_services/auth.service';

@NgModule({
   declarations: [	
      AppComponent,
      HomeComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [AuthService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
