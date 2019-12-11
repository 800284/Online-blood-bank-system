import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBloodRequirementsComponent } from './view-all-blood-requirements.component';

describe('ViewAllBloodRequirementsComponent', () => {
  let component: ViewAllBloodRequirementsComponent;
  let fixture: ComponentFixture<ViewAllBloodRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBloodRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBloodRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
