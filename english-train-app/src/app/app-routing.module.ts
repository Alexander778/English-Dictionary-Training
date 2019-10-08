import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { TestingComponent } from './testing/testing.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AuthGuard } from './core/auth.guard';
import { TablewordComponent } from './tableword/tableword.component';
import { ShowResultComponent } from './show-result/show-result.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'main', component: MainpageComponent, canActivate: [AuthGuard],
    children: [
      { path: 'start', component: StartPageComponent, data: { animation: 'Start' } },
      { path: 'list', component: TablewordComponent, data: { animation: 'List' } },
      { path: 'testing', component: TestingComponent, data: { animation: 'Testing' } },
      { path: 'testing/:id', component: TestingComponent, data: { animation: 'Testing' } },
      { path: 'user', component: UserinfoComponent, data: { animation: 'User' } },
      { path: 'result', component: ShowResultComponent }
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
