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
      name: 'Ron',
      age: 73,
      image: '../../assets/peep.png',
      visible: true
    },
    {
      name: 'Sam',
      age: 58,
      image: '../../assets/peep.png',
      visible: true
    },
    {
      name: 'John',
      age: 48,
      image: '../../assets/peep.png',
      visible: true
    },
    {
      name: 'Jack',
      age: 56,
      image: '../../assets/peep.png',
      visible: true
    },
    {
      name: 'Jim',
      age: 38,
      image: '../../assets/peep.png',
      visible: true
    },
    {
      name: 'Jade',
      age: 47,
      image: '../../assets/peep.png',
      visible: true
    }
  ];

  constructor() {
    this.currentIndex = this.avatars.length - 1;
    console.log(this.currentIndex);
  }
  swiped(event: any, index: number) {
    console.log(this.avatars[index].name + ' swiped ' + event);
    this.avatars[index].visible = false;
    this.results.push(this.avatars[index].name + ' swiped ' + event);
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
  
}
