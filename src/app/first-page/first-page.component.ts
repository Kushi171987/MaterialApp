import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

   constructor() { }

   ngOnInit() {
   }

   likeBtnClicked = () => {
      console.log('likeBtnClicked');
   }

   shareBtnClicked = () => {
      console.log('shareBtnClicked');
   }

}
