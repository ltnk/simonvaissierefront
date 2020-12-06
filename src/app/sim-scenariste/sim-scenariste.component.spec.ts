import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimScenaristeComponent } from './sim-scenariste.component';

describe('SimScenaristeComponent', () => {
  let component: SimScenaristeComponent;
  let fixture: ComponentFixture<SimScenaristeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimScenaristeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimScenaristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
