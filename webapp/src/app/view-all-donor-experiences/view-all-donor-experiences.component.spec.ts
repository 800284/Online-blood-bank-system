import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDonorExperiencesComponent } from './view-all-donor-experiences.component';

describe('ViewAllDonorExperiencesComponent', () => {
  let component: ViewAllDonorExperiencesComponent;
  let fixture: ComponentFixture<ViewAllDonorExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllDonorExperiencesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllDonorExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
