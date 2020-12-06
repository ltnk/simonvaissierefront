import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimCreditsComponent } from './sim-credits.component';

describe('SimCreditsComponent', () => {
  let component: SimCreditsComponent;
  let fixture: ComponentFixture<SimCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
