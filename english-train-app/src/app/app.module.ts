import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppRoutingModule } from './app-routing.module';
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WordslistComponent } from './wordslist/wordslist.component';
import { TestingComponent } from './testing/testing.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { StartPageComponent } from './start-page/start-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    DialogWindowComponent,
    RegisterComponent,
    SidenavComponent,
    WordslistComponent,
    TestingComponent,
    UserinfoComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    AppRoutingModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
