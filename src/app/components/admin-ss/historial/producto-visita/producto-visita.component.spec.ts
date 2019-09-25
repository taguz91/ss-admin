import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoVisitaComponent } from './producto-visita.component';

describe('ProductoVisitaComponent', () => {
  let component: ProductoVisitaComponent;
  let fixture: ComponentFixture<ProductoVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
