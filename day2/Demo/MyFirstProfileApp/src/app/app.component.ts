import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstProfileApp';
  person = 
  {
    firstname: 'Kim',
    lastname: 'So Hyun',
    age: 18,
    avatar: 'https://i.pinimg.com/736x/29/12/f0/2912f0edd9cc5559a4f704ecb72eb50b.jpg',
    adress:{
      street: 'Luong Xa',
      city: 'Ha Nam',
      country: 'Viet Nam'
    },
    friends:[
      {name: 'Bob', age: 30},
      {name: 'Cindy', age: 31},
      {name: 'Tony Stark', age: 35},
    ]
  }
}
