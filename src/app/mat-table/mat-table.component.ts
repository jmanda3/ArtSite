import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  tableDataSrc: any;
  tableCols: string[] = ['name','role','skillset']
  tableData: {}[] = [
    {
      name: 'John Manda',
      role: 'test1',
      skillset: 'skillset1'
    },
    {
      name: 'Test Name',
      role: 'test2',
      skillset: 'skillset2'
    },
    {
      name: 'Lindsay Miller',
      role: 'test3',
      skillset: 'skillset3'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
  }

}
