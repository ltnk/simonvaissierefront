import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimFooterComponent } from './sim-footer.component';

describe('SimFooterComponent', () => {
  let component: SimFooterComponent;
  let fixture: ComponentFixture<SimFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimFooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
