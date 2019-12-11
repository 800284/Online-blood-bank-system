import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDonorExperienceComponent } from './post-donor-experience.component';

describe('PostDonorExperienceComponent', () => {
  let component: PostDonorExperienceComponent;
  let fixture: ComponentFixture<PostDonorExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDonorExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDonorExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
