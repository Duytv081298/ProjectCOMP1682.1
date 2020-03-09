import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBinding';
  mytext:string;
  clicked(){
    console.log('The button is clicked!')
  }
  showText($event){
    console.log($event.target.value);
    console.log(this.mytext);
  }



}
