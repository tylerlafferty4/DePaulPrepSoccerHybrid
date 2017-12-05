import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  selectedItem: any;
  opponents: string[];
  locations: string[];
  times: string[];
  items: Array<{opponent: string, location: string, time: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.opponents = ['@ St Joseph', '@ Imaculate Prep', 'Nazareth'];
    this.locations = ['Westchester, IL', 'Chicago, IL', 'Chicago, IL'];
    this.times = ['0-3 L', '4:00 PM', '4:30 PM'];

    this.items = [];
    for (let i = 0; i < this.opponents.length; i++) {
      this.items.push({
        opponent: this.opponents[i],
        time: this.times[i],
        location: this.locations[i],
        icon: 'football'
      });
    }
  }

  itemTapped(event, item) {
    
  }
}
