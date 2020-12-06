import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimContactComponent } from './sim-contact.component';

describe('SimContactComponent', () => {
  let component: SimContactComponent;
  let fixture: ComponentFixture<SimContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimContactComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
