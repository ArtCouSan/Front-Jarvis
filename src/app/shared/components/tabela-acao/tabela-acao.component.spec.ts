import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAcaoComponent } from './tabela-acao.component';

describe('TabelaAcaoComponent', () => {
  let component: TabelaAcaoComponent;
  let fixture: ComponentFixture<TabelaAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
