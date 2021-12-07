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
    { title: 'Dashboard', url: '/dashboard', icon: 'dashboard' },
    { title: 'Add Pet', url: '/addPet', icon: 'addPet' },
    { title: 'My Pets', url: '/pets', icon: 'pets' }
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
