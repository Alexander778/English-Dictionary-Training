import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { WordslistComponent } from './wordslist/wordslist.component';
import { TestingComponent } from './testing/testing.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { StartPageComponent } from './start-page/start-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'main', component: MainpageComponent,
    children: [
      { path: 'start', component: StartPageComponent },
      { path: 'list', component: WordslistComponent },
      { path: 'testing', component: TestingComponent },
      { path: 'user', component: UserinfoComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
