import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimFormationComponent } from './sim-formation.component';

describe('SimFormationComponent', () => {
  let component: SimFormationComponent;
  let fixture: ComponentFixture<SimFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimFormationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
