import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFixaComponent } from './tabela-fixa.component';

describe('TabelaFixaComponent', () => {
  let component: TabelaFixaComponent;
  let fixture: ComponentFixture<TabelaFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
