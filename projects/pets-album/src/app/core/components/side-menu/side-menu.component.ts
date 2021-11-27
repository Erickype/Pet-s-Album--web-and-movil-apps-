import { Component, OnInit } from '@angular/core';
import { IMenu, MenuService } from '../../../helpers/services/menu.service';

@Component({
  selector: 'alb-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {  

  listMenu:IMenu[]
  opened=true;

  constructor(private menuService:MenuService) { 
    this.listMenu = this.menuService.getMenu()
  }

  ngOnInit(): void {
  }

}
