import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoProject';
  empObj = { name: "H", id: "1" }
  imgurl: string;
  constructor() {
    this.imgurl = "../assets/p2.png";
  }
}
