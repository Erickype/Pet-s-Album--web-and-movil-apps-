import { Component, OnInit } from '@angular/core';
import { KeyPadButton } from 'projects/pets-album/src/app/shared/interfaces/keyButton.interface';

@Component({
  selector: 'alb-pets-page',
  templateUrl: './pets-page.component.html',
  styleUrls: ['./pets-page.component.css']
})
export class PetsPageComponent implements OnInit {

  keypadButtons: KeyPadButton[]=[
    {
      icon: "cloud_download",
      tooltip: "DESCARGAR",
      color: "accent",
      action: "DOWNLOAD"
    },
    {
      icon: "add",
      tooltip: "AGREGAR",
      color: "primary",
      action: "NEW"
    },
    ]

  constructor() { }

  ngOnInit(): void {
  }

  doAction(action:string){
    switch (action){
      case "DOWNLOAD":
        //this.utilsService.showBottomShet()
        break
      case "NEW":
        //this.utilsService.showFormModal()
        break
    }
  }

}
