import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimProjectsMontageComponent } from './sim-projects-montage.component';

describe('SimProjectsMontageComponent', () => {
  let component: SimProjectsMontageComponent;
  let fixture: ComponentFixture<SimProjectsMontageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimProjectsMontageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimProjectsMontageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
