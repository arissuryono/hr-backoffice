import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  groupOptions = [
    'Part-time',
    'Full-time',
    'Seasonal',
    'Temporary',
    'Leased',
    'Contract',
    'Independent',
    'Interns',
    'Consultants',
    'Freelance',
  ];

  employeeForm = this.fb.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [
      '',
      [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.required,
      ],
    ],
    birthDate: ['', Validators.required],
    basicSalary: ['', Validators.required],
    status: ['', Validators.required],
    group: ['', Validators.required],
    description: ['', Validators.required],
  });
  submitted = false;

  constructor(private fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {}

  get registerFormControl() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.registerFormControl.email.errors);

    // console.log('submit');
    // console.warn(this.employeeForm.value);
    // console.warn(this.employeeForm.valid);
    // this.employeeForm.su;
    // this.router.navigate(['/app/employees']);
  }
}
