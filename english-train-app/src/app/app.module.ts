import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

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
import { TablewordComponent } from './tableword/tableword.component';
import { EditWordDialogComponent } from './edit-word-dialog/edit-word-dialog.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from './auth/auth.service.service';
import { AuthGuard } from './core/auth.guard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FillTableService } from './services/fillTable.service';

const config = {
  apiKey: 'AIzaSyBB6CZc8eR3w5fMucuvSOpFrN2XqpXYpLI',
  authDomain: 'english-training-system.firebaseapp.com',
  databaseURL: 'https://english-training-system.firebaseio.com',
  projectId: 'english-training-system',
  storageBucket: 'english-training-system.appspot.com',
  messagingSenderId: '472677143489',
  appId: '1:472677143489:web:5bc27d935505a6b6f89540',
  measurementId: 'G-H9JMRDKBWR'
};


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
    StartPageComponent,
    TablewordComponent,
    EditWordDialogComponent
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
    MatDividerModule,
    MatSelectModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    MatSnackBarModule,
    MatTooltipModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AuthGuard, FillTableService],
  bootstrap: [AppComponent],
  entryComponents: [DialogWindowComponent],
})
export class AppModule { }
