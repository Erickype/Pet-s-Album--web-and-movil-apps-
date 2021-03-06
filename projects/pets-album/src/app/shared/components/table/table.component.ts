import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { MetadataColumns } from '../../interfaces/metadatacolumns.interface';
import { PaginatorComponent } from '../paginator/paginator.component';


@Component({
  selector: 'alb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  config: any;
  @Input() data: any;
  @Input() metadataColumns!: MetadataColumns[]
  @ViewChild('paginator') paginatorComp!: PaginatorComponent;
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>

  dataSource!: MatTableDataSource<any>;

  listFields: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.metadataColumns) {
      this.listFields = this.metadataColumns.map((x) => x.field)
      this.dataSource = new MatTableDataSource(this.data);
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginatorComp.pag;
  }

  ngAfterContentInit(): void { 

    this.columnsDef.forEach((columnsDef) => {
      this.listFields.push(columnsDef.name)
      this.table.addColumnDef(columnsDef)
    })
  }
}
