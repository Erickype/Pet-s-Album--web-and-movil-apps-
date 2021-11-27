import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcon {
  name: string
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  private listIcons:IIcon[] = [
    {name:'dashboard', path: '../assets/icons/dashboard.svg'},
    {name:'addPet', path: '../assets/icons/addPet.svg'},
    {name:'pets', path: '../assets/icons/pets.svg'}
  ]
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer:DomSanitizer) { 
      this.registryIcons()
    }

  registryIcons(){
    this.listIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      )
    })
  } 
}
