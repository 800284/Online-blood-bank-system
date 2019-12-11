import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteToTipsComponent } from './route-to-tips.component';

describe('RouteToTipsComponent', () => {
  let component: RouteToTipsComponent;
  let fixture: ComponentFixture<RouteToTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteToTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteToTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
