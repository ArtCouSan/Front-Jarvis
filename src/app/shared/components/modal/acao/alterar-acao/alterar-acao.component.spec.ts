import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAcaoComponent } from './alterar-acao.component';

describe('AlterarAcaoComponent', () => {
  let component: AlterarAcaoComponent;
  let fixture: ComponentFixture<AlterarAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
