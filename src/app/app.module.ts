import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from '../app/service/firebase.service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routesApp: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component:LoginFormComponent }
];

export const firebaseConfig = {
  apiKey: 'AIzaSyBL6Z8YtgxjZGDrrHwNyiF4j7JzlgtIWuk',
  authDomain: 'projectweb-f3b16.firebaseapp.com',
  databaseURL: 'https://projectweb-f3b16.firebaseio.com',
  storageBucket: 'projectweb-f3b16.appspot.com',
  messagingSenderId: '211093886245'
}

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routesApp)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
