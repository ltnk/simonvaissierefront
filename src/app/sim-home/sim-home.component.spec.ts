import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimHomeComponent } from './sim-home.component';

describe('SimHomeComponent', () => {
  let component: SimHomeComponent;
  let fixture: ComponentFixture<SimHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
