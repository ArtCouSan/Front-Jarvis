import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFiisComponent } from './grafico-fiis.component';

describe('GraficoFiisComponent', () => {
  let component: GraficoFiisComponent;
  let fixture: ComponentFixture<GraficoFiisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoFiisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFiisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
