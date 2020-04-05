import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentIndex: number;
  results = [];
  avatars = [
    {
      name: "Celina Mcgowan",
      age: 30,
      picture: "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg",
      visible: true
    },
    {
      name: "Glenda Cabrera",
      age: 31,
      picture: "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg",
      visible: true
    },
    {
      name: "Gilmore Atkins",
      age: 31,
      picture: "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg",
      visible: true
    },
    {
      name: "Whitfield Barnett",
      age: 32,
      picture: "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg",
      visible: true
    },
    {
      name: "Rocha Tanner",
      age: 21,
      picture: "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg",
      visible: true
    },
    {
      name: "Robertson Workman",
      age: 20,
      picture: "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg",
      visible: true
    },
    {
      name: "Sabrina Guzman",
      age: 25,
      picture: "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg",
      visible: true
    }
  ];
  constructor() {
    this.currentIndex = this.avatars.length - 1;
    console.log(this.currentIndex);
  }

  swiped(event: any, index: number) {
    this.avatars[index].visible = false;
    
    this.currentIndex--;
  }
  swipeleft() {
    this.avatars[this.currentIndex].visible = false;
   
    this.currentIndex--;
  }
  
  swiperight() {
    this.avatars[this.currentIndex].visible = false;
   
    this.currentIndex--;
  }
  returnback() {
    
  }
  
}
