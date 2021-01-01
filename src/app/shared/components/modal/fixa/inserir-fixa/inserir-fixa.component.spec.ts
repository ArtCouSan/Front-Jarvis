import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFixaComponent } from './inserir-fixa.component';

describe('InserirFixaComponent', () => {
  let component: InserirFixaComponent;
  let fixture: ComponentFixture<InserirFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
