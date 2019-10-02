import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaFormComponent } from './linea-form.component';

describe('LineaFormComponent', () => {
  let component: LineaFormComponent;
  let fixture: ComponentFixture<LineaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
