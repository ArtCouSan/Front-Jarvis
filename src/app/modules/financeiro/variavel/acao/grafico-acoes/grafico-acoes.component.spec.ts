import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAcoesComponent } from './grafico-acoes.component';

describe('GraficoAcoesComponent', () => {
  let component: GraficoAcoesComponent;
  let fixture: ComponentFixture<GraficoAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoAcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
