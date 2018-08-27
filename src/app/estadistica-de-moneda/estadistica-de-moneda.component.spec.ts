import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaDeMonedaComponent } from './estadistica-de-moneda.component';

describe('EstadisticaDeMonedaComponent', () => {
  let component: EstadisticaDeMonedaComponent;
  let fixture: ComponentFixture<EstadisticaDeMonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaDeMonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaDeMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
