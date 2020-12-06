import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimInfosComponent } from './sim-infos.component';

describe('SimInfosComponent', () => {
  let component: SimInfosComponent;
  let fixture: ComponentFixture<SimInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimInfosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
