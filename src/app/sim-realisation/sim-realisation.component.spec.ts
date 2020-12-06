import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimRealisationComponent } from './sim-realisation.component';

describe('SimRealisationComponent', () => {
  let component: SimRealisationComponent;
  let fixture: ComponentFixture<SimRealisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimRealisationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
