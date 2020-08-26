import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-details-emp',
  templateUrl: './details-emp.component.html',
  styleUrls: ['./details-emp.component.css']
})
export class DetailsEmpComponent implements OnInit {

  empDetails: Emp;

  constructor(public router: Router) { 
    console.log(this.router.getCurrentNavigation().extras.state);
    this.empDetails = this.router.getCurrentNavigation().extras.state as Emp;
  }

  ngOnInit(): void {
    console.log(history.state);
  }

}
