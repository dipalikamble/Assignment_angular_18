import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from '../../components/company/company.component';
import { CompanyInfoComponent } from '../../components/company-info/company-info.component';
import { authGuard } from '../../guard/auth.gaurd';


const routes: Routes = [
  // {path:'company', canActivate:[authGuard], component :CompanyComponent},
  // {path:'', redirectTo :'company', pathMatch: 'full'},
  // {path:'company/companyInfo/:name', component:CompanyInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
