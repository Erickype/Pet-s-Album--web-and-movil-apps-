import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyPadButton } from '../../interfaces/keyButton.interface';

@Component({
  selector: 'alb-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  @Input() keypadButtons: KeyPadButton[] = []
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>()
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  doAction(action: string){
    this.onClick.emit(action)
  }

}
