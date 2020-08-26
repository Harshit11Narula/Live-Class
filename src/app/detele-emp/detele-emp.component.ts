import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detele-emp',
  templateUrl: './detele-emp.component.html',
  styleUrls: ['./detele-emp.component.css']
})
export class DeteleEmpComponent implements OnInit {

  empDeleted: Number;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.empDeleted = parseInt(this.activatedRoute.snapshot.params['EmpId']);
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['EmpId']);
    });
  }

}

