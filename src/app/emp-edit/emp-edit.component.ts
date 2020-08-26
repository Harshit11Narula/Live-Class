import { Emp } from './../emp';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css'],
})
export class EmpEditComponent implements OnInit {
  @Input() parentToBeEdited: Emp;
  @Output() sendEditEmp = new EventEmitter<Emp>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.parentToBeEdited);
  }
  editEmpClick(p1, p2) {
    try {
      var temp: Emp = new Emp(this.parentToBeEdited.empId, p1, parseFloat(p2));
      console.log(temp);
      this.sendEditEmp.emit(temp);
    } catch (e) {
      console.log(e);
    }
  }
}
