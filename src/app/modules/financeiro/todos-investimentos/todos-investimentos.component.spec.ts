import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosInvestimentosComponent } from './todos-investimentos.component';

describe('TodosInvestimentosComponent', () => {
  let component: TodosInvestimentosComponent;
  let fixture: ComponentFixture<TodosInvestimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosInvestimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
