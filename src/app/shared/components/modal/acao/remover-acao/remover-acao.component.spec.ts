import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverAcaoComponent } from './remover-acao.component';

describe('RemoverAcaoComponent', () => {
  let component: RemoverAcaoComponent;
  let fixture: ComponentFixture<RemoverAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
