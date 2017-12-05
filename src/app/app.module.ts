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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
