import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteBloqueadoComponent } from './cliente-bloqueado.component';

describe('ClienteBloqueadoComponent', () => {
  let component: ClienteBloqueadoComponent;
  let fixture: ComponentFixture<ClienteBloqueadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteBloqueadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteBloqueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
