import { Component, Input, OnInit } from '@angular/core';
import { IPet, PetsService } from 'projects/pets-album/src/app/helpers/services/pets/pets.service';

@Component({
  selector: 'alb-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  petsList: IPet[]
  pos = 0;

  listFields: string[] = ['name', 'description'];
  data : any;

  constructor(private petsService: PetsService) {
    this.petsList = this.petsService.getData()
    this.data=this.petsList
  }

  ngOnInit(): void {
  }

}
