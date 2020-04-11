import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {

  cards;

  constructor() {

    this.cards = [];

  }

  loadswipeCards() {
    this.cards = [
      {
        img: "https://www.w3schools.com/howto/img_avatar.png",
        title: "Alba ",
        description: "Random data"
      },
      {
        img: "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg",
        title: "Morris ",
        description: "Random data"
      },
      {
        img: "https://www.w3schools.com/howto/img_avatar.png",
        title: "Taylor ",
        description: "Random data"
      },
      {
        img: "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg",
        title: "Dolores ",
        description: "Random data"
      },
      {
        img: "https://www.w3schools.com/howto/img_avatar.png",
        title: "Candace ",
        description: "Random data"
      },
      {
        img: "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg",
        title: "Oneil ",
        description: "Random data"
      },
      {
        img: "https://www.w3schools.com/howto/img_avatar.png",
        title: "Rogers ",
        description: "Random data"
      }
    ]
  };

  logChoice(choice) {
    console.log(choice)
  };

}
