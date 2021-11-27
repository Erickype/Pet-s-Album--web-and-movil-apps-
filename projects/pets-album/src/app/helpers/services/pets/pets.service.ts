import { Injectable } from '@angular/core';
import { url } from 'inspector';

export interface IPet {
  name: string
  description: string
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private petsList:IPet[] = [
    {name:'Shiba', description: 'Es un lindo compañero', img: "../../assets/img/pets/pet1.png"},
    {name:'Sansdru', description: 'Sansdru ven hacia acá', img: "../../assets/img/pets/pet2.png"},
    {name:'Copo', description: 'Copo y sus ocurrencias', img: "../../assets/img/pets/pet3.png"}
  ]
}
