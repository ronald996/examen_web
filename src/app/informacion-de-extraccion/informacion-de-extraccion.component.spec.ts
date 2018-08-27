import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDeExtraccionComponent } from './informacion-de-extraccion.component';

describe('InformacionDeExtraccionComponent', () => {
  let component: InformacionDeExtraccionComponent;
  let fixture: ComponentFixture<InformacionDeExtraccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionDeExtraccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionDeExtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
