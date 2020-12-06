import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimMontageComponent } from './sim-montage.component';

describe('SimMontageComponent', () => {
  let component: SimMontageComponent;
  let fixture: ComponentFixture<SimMontageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimMontageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimMontageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
