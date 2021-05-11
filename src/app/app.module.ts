import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { QuickComponent } from './quick/quick.component';
import { HeaderComponent } from './header/header.component';
import { InputButtonsComponent } from './input-buttons/input-buttons.component';
import { InputQuickButtonsComponent } from './input-quick-buttons/input-quick-buttons.component';
import { WhereHaveYouGoneComponent } from './where-have-you-gone/where-have-you-gone.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputComponent,
    QuickComponent,
    HeaderComponent,
    InputButtonsComponent,
    InputQuickButtonsComponent,
    WhereHaveYouGoneComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
