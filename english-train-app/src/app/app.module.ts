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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TestingComponent } from './testing/testing.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TablewordComponent } from './tableword/tableword.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from './auth/auth.service.service';
import { AuthGuard } from './core/auth.guard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FillTableService } from './services/fillTable.service';
import { DialogConfirmDelWordComponent } from './dialog-confirm-del-word/dialog-confirm-del-word.component';
import { TestingService } from './services/testing.service';
import { ShowResultComponent } from './show-result/show-result.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';

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
    TestingComponent,
    UserinfoComponent,
    StartPageComponent,
    TablewordComponent,
    DialogConfirmDelWordComponent,
    ShowResultComponent
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
    AngularFirestoreModule,
    ReactiveFormsModule,
    ChartsModule,
    NgCircleProgressModule.forRoot(
      {
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: '#78C000',
        innerStrokeColor: '#C7E596',
        animationDuration: 300
      }
    )
  ],
  exports: [ChartsModule],
  providers: [AuthService, AuthGuard, FillTableService, TestingService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogWindowComponent,
    DialogConfirmDelWordComponent
  ],
})
export class AppModule { }
