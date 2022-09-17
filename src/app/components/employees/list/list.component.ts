import { ActivatedRoute } from '@angular/router';
import { Employee } from './../../../shared/model/Employee';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { employees } from '@src/app/shared/data/employees';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class EmployeeListComponent implements AfterViewInit, OnInit {
  search = '';
  searchParams = {};

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

  constructor(private route: ActivatedRoute) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.setSearch(params['search'] || '');
    });
    if (this.search) {
      this.dataSource.filter = this.search.trim().toLowerCase();
    }
  }

  setSearch(value: string) {
    this.search = value || '';

    this.searchParams = {
      ...(value && { search: value }),
    };
  }

  onKeyDownEvent(event: any) {
    this.setSearch(event.target.value);
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }
}
