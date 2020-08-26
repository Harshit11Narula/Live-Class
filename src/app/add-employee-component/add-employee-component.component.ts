import { Emp } from './../emp';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-employee-component',
  templateUrl: './add-employee-component.component.html',
  styleUrls: ['./add-employee-component.component.css'],
})
export class AddEmployeeComponentComponent implements OnInit {
  @Output() sendNewEmp = new EventEmitter<Emp>();

  constructor() {}

  ngOnInit(): void {}

  confirm(p1, p2, p3) {
    try {
      var temp: Emp = new Emp(parseInt(p1), p2, parseFloat(p3));
      console.log(temp);
      this.sendNewEmp.emit(temp);
    } catch (e) {
      console.log(e);
    }
  }
}
