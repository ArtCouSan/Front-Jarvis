import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosVariaveisComponent } from './todos-variaveis.component';

describe('TodosVariaveisComponent', () => {
  let component: TodosVariaveisComponent;
  let fixture: ComponentFixture<TodosVariaveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosVariaveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosVariaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
