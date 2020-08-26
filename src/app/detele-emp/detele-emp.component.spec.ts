import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleEmpComponent } from './detele-emp.component';

describe('DeteleEmpComponent', () => {
  let component: DeteleEmpComponent;
  let fixture: ComponentFixture<DeteleEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeteleEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeteleEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
