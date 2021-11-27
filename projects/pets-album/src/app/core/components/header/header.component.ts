import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isClicked = false;
  @Output() wasClicked = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  logout() { }

  clicked() {


    this.isClicked = !this.isClicked
    this.wasClicked.emit(this.isClicked)
  }
}
