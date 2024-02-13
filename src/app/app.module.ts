import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(
      {
        "projectId": "tcs-fcm-angular",
        "appId": "1:573458737875:web:f7c1b56c3bccacf7dec226",
        "storageBucket": "tcs-fcm-angular.appspot.com",
        "apiKey": "AIzaSyC6p0arWRA4yvEB4LnVXc4Ux__cCnSk3zc",
        "authDomain": "tcs-fcm-angular.firebaseapp.com",
        "messagingSenderId": "573458737875",
        "measurementId": "G-NYY6T7R1BG"
      }
    )),
    provideAnalytics(() => getAnalytics()),
    provideMessaging(() => getMessaging())
  ],
  providers: [
    ScreenTrackingService,
    {
      provide: FIREBASE_OPTIONS, useValue: environment.firebase
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
