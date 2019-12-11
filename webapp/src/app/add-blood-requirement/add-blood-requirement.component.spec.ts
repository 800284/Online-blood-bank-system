import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodRequirementComponent } from './add-blood-requirement.component';

describe('AddBloodRequirementComponent', () => {
  let component: AddBloodRequirementComponent;
  let fixture: ComponentFixture<AddBloodRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBloodRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
