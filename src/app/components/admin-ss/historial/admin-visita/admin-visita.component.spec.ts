import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVisitaComponent } from './admin-visita.component';

describe('AdminVisitaComponent', () => {
  let component: AdminVisitaComponent;
  let fixture: ComponentFixture<AdminVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
