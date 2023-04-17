import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Apiservice } from '../shared/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnInit {
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['url', 'name', 'publisher', 'isbn'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  constructor(private service: Apiservice) {}
  getdata() {
    this.service.getAll().subscribe((res) => {
      this.dataSource.data = res;
    })
  }

  ngOnInit(): void {
    this.getdata();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
