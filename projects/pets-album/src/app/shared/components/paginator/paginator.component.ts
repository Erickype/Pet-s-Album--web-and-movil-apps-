import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'alb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @ViewChild('paginator') paginator!:MatPaginator;
  pag:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {    
    this.pag = this.paginator
  }

}
