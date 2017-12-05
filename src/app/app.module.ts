import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { SchedulePage } from '../pages/schedule/schedule';
import { ClinicsPage } from '../pages/clinics/clinics';
import { FundraiserPage } from '../pages/fundraiser/fundraiser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCelE-mkY_QB4Q06JYx21c7_T8uN1JbF5w",
  authDomain: "depaulprepsoccer.firebaseapp.com",
  databaseURL: "https://depaulprepsoccer.firebaseio.com/",
  projectId: "depaulprepsoccer",
  storageBucket: "depaulprepsoccer.appspot.com",
  messagingSenderId: "317024397826"
};

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    SchedulePage,
    ClinicsPage,
    FundraiserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    SchedulePage,
    ClinicsPage,
    FundraiserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
