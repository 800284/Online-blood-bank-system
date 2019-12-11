import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequirementAdditionSuccessComponent } from './blood-requirement-addition-success.component';

describe('BloodRequirementAdditionSuccessComponent', () => {
  let component: BloodRequirementAdditionSuccessComponent;
  let fixture: ComponentFixture<BloodRequirementAdditionSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodRequirementAdditionSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodRequirementAdditionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
