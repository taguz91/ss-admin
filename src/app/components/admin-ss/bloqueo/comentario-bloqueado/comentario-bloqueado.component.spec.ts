import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioBloqueadoComponent } from './comentario-bloqueado.component';

describe('ComentarioBloqueadoComponent', () => {
  let component: ComentarioBloqueadoComponent;
  let fixture: ComponentFixture<ComentarioBloqueadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioBloqueadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioBloqueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
