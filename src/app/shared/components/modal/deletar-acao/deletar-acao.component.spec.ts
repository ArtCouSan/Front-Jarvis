import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAcaoComponent } from './deletar-acao.component';

describe('DeletarAcaoComponent', () => {
  let component: DeletarAcaoComponent;
  let fixture: ComponentFixture<DeletarAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
