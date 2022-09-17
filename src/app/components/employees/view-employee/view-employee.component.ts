import { ActivatedRoute } from '@angular/router';
import { Employee } from './../../../shared/model/Employee';
import { employees } from '@src/app/shared/data/employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  strId: string | undefined;
  employee: Employee | any;
  employees: Employee[];

  constructor(private route: ActivatedRoute) {
    this.employees = employees;
  }

  ngOnInit(): void {
    this.strId = this.route.snapshot.paramMap.get('id') || undefined;

    this.employee = this.employees.find(
      (employee) => employee.id.toString() === this.strId
    );
  }
}
