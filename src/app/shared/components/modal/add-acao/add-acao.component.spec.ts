import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcaoComponent } from './add-acao.component';

describe('AddAcaoComponent', () => {
  let component: AddAcaoComponent;
  let fixture: ComponentFixture<AddAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
