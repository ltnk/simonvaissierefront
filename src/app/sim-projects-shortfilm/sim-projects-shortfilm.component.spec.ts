import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimProjectsShortfilmComponent } from './sim-projects-shortfilm.component';

describe('SimProjectsShortfilmComponent', () => {
  let component: SimProjectsShortfilmComponent;
  let fixture: ComponentFixture<SimProjectsShortfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimProjectsShortfilmComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimProjectsShortfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
