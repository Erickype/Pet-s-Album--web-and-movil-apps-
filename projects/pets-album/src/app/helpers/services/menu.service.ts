import { Injectable } from '@angular/core';

export interface IMenu {
  title: string
  url: string
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listMenu: IMenu[] = [
    { title: 'Dashboard', url: '/dashboard', icon: 'tablero' },
    { title: 'Agregar Mascota', url: '/addPet', icon: 'historia' },
    { title: 'Ver Mascotas', url: '/pets', icon: 'medico' }
  ]
  constructor() { }

  getMenu(): IMenu[] {
    return [...this.listMenu]
  }

  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }
}
