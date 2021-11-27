import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alb-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Input() wasClicked: boolean = false;

  constructor() { }


  ngOnInit(): void {
  } 



}
