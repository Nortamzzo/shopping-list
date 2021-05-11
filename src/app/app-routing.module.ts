import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { InputComponent } from './input/input.component';
import { WhereHaveYouGoneComponent } from './where-have-you-gone/where-have-you-gone.component';

const routes: Routes = [
  { path: '', component: InputComponent },
  { path: 'main', component: InputComponent },
  { path: 'login', component: LoginComponent },
  { path: 'asignup', component: SignupComponent},
  { path: '**', component: WhereHaveYouGoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
