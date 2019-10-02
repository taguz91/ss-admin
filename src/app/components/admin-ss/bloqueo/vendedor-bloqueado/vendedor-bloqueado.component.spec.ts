import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorBloqueadoComponent } from './vendedor-bloqueado.component';

describe('VendedorBloqueadoComponent', () => {
  let component: VendedorBloqueadoComponent;
  let fixture: ComponentFixture<VendedorBloqueadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorBloqueadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorBloqueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
