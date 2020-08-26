import { Emp } from '../emp';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  empArray: Emp[] = new Array();
  bgUrl: string;
  bgrepeat: string;
  bgcover: string;
  flag: boolean;
  showAddEmp: boolean = false;
  showEditEmp: boolean = false;
  empToBeEdited: Emp;

  constructor(public router: Router) {
    this.empArray.push(new Emp(101, 'Sara', 154237));
    this.empArray.push(new Emp(102, 'Tara', 200423));
    this.empArray.push(new Emp(103, 'Piyush', 154327));
    this.empArray.push(new Emp(104, 'Lara', 20043));
    this.empArray.push(new Emp(105, 'Prateek', 154371));
    this.bgUrl = "url('../assets/p1.jpeg')";
    this.flag = true;
    this.bgrepeat = 'no-repeat';
    this.bgcover = 'cover';
  }
  id = setInterval(() => {
    if (this.flag) {
      this.bgUrl = "url('../assets/p3.jpg')";
      this.flag = false;
    } else {
      this.bgUrl = "url('../assets/p1.jpeg')";
      this.flag = true;
    }
  }, 5000);

  ngOnInit(): void {}
  delete(detail: Emp) {
    this.empArray = this.empArray.filter((a) => a !== detail);
  }

  addRow() {
    alert('Add New Employee');
    this.showAddEmp = true;
  }
  edit(empEdit: Emp) {
    this.showEditEmp = true;
    this.empToBeEdited = empEdit;
  }
  sendNameHandler(p1: Emp) {
    this.empArray.push(p1);
    this.showAddEmp = false;
  }
  sendEditHandler(p1: Emp) {
    this.empArray = this.empArray.map((obj) => {
      if (obj.empId === p1.empId) {
        obj = p1;
      }
      return obj;
    });
    this.showEditEmp = false;
  }
  empDetails(p1: Emp) {
    this.router.navigateByUrl('/empdetails', { state: p1 });
  }
  deleteWithConfirm(p1: Number) {
    this.router.navigateByUrl('/deleteemp/'+p1);
  }
}
