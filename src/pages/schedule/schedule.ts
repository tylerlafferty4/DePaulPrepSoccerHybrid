import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  schedule: FirebaseListObservable<any[]>;
  overall: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {

    this.schedule = this.firebaseProvider.getSchedule();
    this.overall = this.firebaseProvider.getOverallRecord();
    
  }
}
