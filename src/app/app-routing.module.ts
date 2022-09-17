import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employees/list/list.component';
import { ViewEmployeeComponent } from './components/employees/view-employee/view-employee.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './shared/guard/admin.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'app',
    // canActivate: [AdminGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full',
      },
      {
        path: 'employees',
        children: [
          {
            path: '',
            component: EmployeeListComponent,
          },
          {
            path: 'create',
            component: AddEmployeeComponent,
          },
          {
            path: ':id',
            component: ViewEmployeeComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
