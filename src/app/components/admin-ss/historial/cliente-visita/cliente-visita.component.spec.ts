import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVisitaComponent } from './cliente-visita.component';

describe('ClienteVisitaComponent', () => {
  let component: ClienteVisitaComponent;
  let fixture: ComponentFixture<ClienteVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
