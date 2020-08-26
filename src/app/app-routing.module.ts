import { DeteleEmpComponent } from './detele-emp/detele-emp.component';
import { DetailsEmpComponent } from './details-emp/details-emp.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponentComponent } from './add-employee-component/add-employee-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"employee", component:EmployeeDetailsComponent},
  { path: "login", component: LoginComponent },
  { path: "contact", component: ContactusComponent },
  { path: "about", component: AboutUsComponent },
  { path: "empdetails", component: DetailsEmpComponent },
  {path:"deleteemp/:EmpId" , component: DeteleEmpComponent},
  { path: "", redirectTo: "/employee" , pathMatch:"full"},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
