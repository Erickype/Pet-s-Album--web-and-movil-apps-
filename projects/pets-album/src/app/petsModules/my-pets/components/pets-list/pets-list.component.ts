import { Component, OnInit } from '@angular/core';
import { MetadataColumns } from 'projects/pets-album/src/app/shared/interfaces/metadatacolumns.interface';

@Component({
  selector: 'alb-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  data: any[]=[
    {id:1, name: "Fido", description:"Fido es un perro alegre"},
    {id:2, name: "Fido", description:"Fido es un perro alegre"},
    {id:3, name: "Fido", description:"Fido es un perro alegre"},
    {id:4, name: "Fido", description:"Fido es un perro alegre"},
    {id:5, name: "Fido", description:"Fido es un perro alegre"},
    {id:6, name: "Fido", description:"Fido es un perro alegre"},
    {id:7, name: "Fido", description:"Fido es un perro alegre"},
    {id:8, name: "Fido", description:"Fido es un perro alegre"},    
    {id:9, name: "Fido", description:"Fido es un perro alegre"},    
    {id:10, name: "Fido", description:"Fido es un perro alegre"},    
    {id:11, name: "Fido", description:"Fido es un perro alegre"},    
    {id:12, name: "Fido", description:"Fido es un perro alegre"},    
    {id:13, name: "Fido", description:"Fido es un perro alegre"},    
    {id:14, name: "Fido", description:"Fido es un perro alegre"},    
    {id:15, name: "Fido", description:"Fido es un perro alegre"},    
    {id:16, name: "Fido", description:"Fido es un perro alegre"},    
    {id:17, name: "Fido", description:"Fido es un perro alegre"},    
    {id:18, name: "Fido", description:"Fido es un perro alegre"},    
    {id:19, name: "Fido", description:"Fido es un perro alegre"},    
    {id:20, name: "Fido", description:"Fido es un perro alegre"},    
    {id:21, name: "Fido", description:"Fido es un perro alegre"},    
    {id:22, name: "Fido", description:"Fido es un perro alegre"},    
    {id:23, name: "Fido", description:"Fido es un perro alegre"},    
    {id:24, name: "Fido", description:"Fido es un perro alegre"},    
    {id:25, name: "Fido", description:"Fido es un perro alegre"},    
    {id:26, name: "Fido", description:"Fido es un perro alegre"},    
    {id:27, name: "Fido", description:"Fido es un perro alegre"},    
    {id:28, name: "Fido", description:"Fido es un perro alegre"},    
    {id:29, name: "Fido", description:"Fido es un perro alegre"},    
    {id:30, name: "Fido", description:"Fido es un perro alegre"},    
  ]

  metadataColumns : MetadataColumns[]=[
    {field: "id", title:"ID"},
    {field: "name", title:"NAME"},
    {field: "description", title:"DESCRIPTION"}
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

  openForm(row: any){}

  delete(row: any){}

}
