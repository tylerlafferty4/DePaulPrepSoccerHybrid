import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  selectedItem: any;
  images: string[];
  titles: string[];
  dates: string[];
  descriptions: string[];
  items: Array<{img: string, title: string, date: string, description: string}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.images = ['logo.png',
                   'logo.png',
                   'logo.png'];

    this.titles = ['Soccer Rams rally from 2-0 deficit to defeat Mustangs!',
                   'Soccer Rams win their second straight!',
                   'Soccer Rams defeat Guerin 5-1!'];

    this.dates = ['Sep 15 2017 10:50 AM',
                  'Sep 13 2017 9:31 PM',
                  'Sep 12 2017 10:45 AM'];

    this.descriptions = ['Playing their second game in as many days was evident early on as the Rams found themselves in a 2-0 hole at halftime to the Mustangs of St. Rita.  However, the Rams regrouped and played aggressive soccer in the second half and scored four unanswered goals.  It started when junior, Parfait, was tripped in the penalty box after playing aggressively to start the half.  Sophomore, Ricardo Martinez, took the penalty kick and scored to make it 2-1.  A few minutes later Ricardo had a free kick opportunity from about 45 yards out and kicked a beautiful ball, where fellow sophomore, Santiago Carnalla, finished it off with a gorgeous header to tie the game at two.  The Rams continued their aggressive play and shortly after tieing the game at 2 were in a scrum in front of the Rita goal when, yet another, sophomore, Richard Deutsch, scored the go ahead goal to put the Rams ahead 3-2.\nSt. Rita turned it up a notch and had a great opportunity to tie the game with only a few minutes left when they had a barrage of kicks on goal, but again, another sophomore, goalkeeper Teddy Bahu made some great saves and outlet the ball where speedy Parfait took it right down the sideline running right past Mustangs and at the very last second passed it to a wide open Reuben Urquiza for another goal!  It was a tremendous goal.  The Mustangs scored a goal to make it 4-3, but the final whistle blew shortly after and the Rams came away with an impressive come from behind win and their third consecutive win!  The Rams will travel to New Lenox on Tuesday, September 19 to take on Providence Catholic.  Great job Rams and keep it up.',
                         'Congratulations to our soccer Rams for defeating De La Salle by a score of 3-2 to win their second consecutive game.  Junior, Parfait, scored a hat trick and was the difference in the game.  The Rams are right back at with a game tomorrow against St. Rita at Horner Park.  Game will begin at 4:30 pm.  Great job Rams and keep it up!',
                         'Our Rams traveled to Guerin Prep and came away with a nice 5-1 victory over the Crusaders.  Junior, Parfait, lead the Rams with two goals.  In addition, Deutsch, Carnalla and Urquiza al added goals.  Urquiza goal was from 40 yards away!  The Rams were in control from the very start and cruised to a great victory.  The Rams will take on Catholic League foe De La Salle on Wednesday, September 13 at Horner Park.  Come on out and support your Rams'];



    this.items = [];
    for (let i = 0; i < this.titles.length; i++) {
      this.items.push({
        img: this.images[i],
        title: this.titles[i],
        date: this.dates[i],
        description: this.descriptions[i]
      });
    }
  }

  shareTapped(event, item) {
    console.log('Share Tapped');
  }

  readMoreTapped(event, item) {
    console.log('Read More Tapped');
    this.navCtrl.push(NewsPage, {
      item: item
    });
  }
}
