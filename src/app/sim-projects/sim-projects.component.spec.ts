import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimProjectsComponent } from './sim-projects.component';

describe('SimProjectsComponent', () => {
  let component: SimProjectsComponent;
  let fixture: ComponentFixture<SimProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimProjectsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
