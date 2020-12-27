import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAcaoComponent } from './inserir-acao.component';

describe('InserirAcaoComponent', () => {
  let component: InserirAcaoComponent;
  let fixture: ComponentFixture<InserirAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
