import { Employee } from './../../../shared/model/Employee';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { employees } from '@src/app/shared/data/employees';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class EmployeeListComponent implements AfterViewInit {
  search = '';
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'group',
    'status',
    'actions',
  ];

  dataSource = new MatTableDataSource<Employee>(employees);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onKeyDownEvent(event: any) {
    this.search = event.target.value;
    // this.dataSource.filter
  }
}
