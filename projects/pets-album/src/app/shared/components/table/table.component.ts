import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { MetadataColumns } from '../../interfaces/metadatacolumns.interface';

@Component({
  selector: 'alb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any;
  @Input() metadataColumns!: MetadataColumns[]
  /*@ViewChild('paginator') paginatorComp!: PaginatorComponent;
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>
*/
  dataSource!: MatTableDataSource<any>;

  listFields: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.metadataColumns) {
      this.listFields = this.metadataColumns.map((x) => x.field)
      this.dataSource = new MatTableDataSource(this.data);
    }
  }
/*
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginatorComp.pag;
  }*/

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.   

    /*this.columnsDef.forEach((columnsDef) => {
      this.listFields.push(columnsDef.name)
      this.table.addColumnDef(columnsDef)

      console.log("alter");

    })*/


  }
}
