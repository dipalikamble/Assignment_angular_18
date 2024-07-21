import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.gaurd';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'employee',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/employee/employee.component').then(
        (c) => c.EmployeeComponent
      ),
  },

  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/company/company.component').then(
        (c) => c.CompanyComponent
      ),
    title: 'Company information',
  },

  {
    path: 'home',
    canActivateChild: [authGuard],
    children: [
      {
        path: ':name',
        loadComponent: () =>
          import('./components/company-info/company-info.component').then(
            (c) => c.CompanyInfoComponent
          ),
      },
    ],
  },
];
