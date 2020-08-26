import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponentComponent } from './add-employee-component/add-employee-component.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsEmpComponent } from './details-emp/details-emp.component';
import { DeteleEmpComponent } from './detele-emp/detele-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponentComponent,
    EmpEditComponent,
    LoginComponent,
    ContactusComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    DetailsEmpComponent,
    DeteleEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
