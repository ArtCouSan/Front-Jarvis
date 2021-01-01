import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarFixaComponent } from './deletar-fixa.component';

describe('DeletarFixaComponent', () => {
  let component: DeletarFixaComponent;
  let fixture: ComponentFixture<DeletarFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
