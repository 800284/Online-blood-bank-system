import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAvailableUnitsComponent } from './show-available-units.component';

describe('ShowAvailableUnitsComponent', () => {
  let component: ShowAvailableUnitsComponent;
  let fixture: ComponentFixture<ShowAvailableUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAvailableUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAvailableUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
