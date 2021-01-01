import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarFixaComponent } from './alterar-fixa.component';

describe('AlterarFixaComponent', () => {
  let component: AlterarFixaComponent;
  let fixture: ComponentFixture<AlterarFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
