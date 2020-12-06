import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimHeaderComponent } from './sim-header.component';

describe('SimHeaderComponent', () => {
  let component: SimHeaderComponent;
  let fixture: ComponentFixture<SimHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
