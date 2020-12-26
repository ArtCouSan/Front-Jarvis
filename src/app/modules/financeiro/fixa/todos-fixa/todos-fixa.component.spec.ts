import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFixaComponent } from './todos-fixa.component';

describe('TodosFixaComponent', () => {
  let component: TodosFixaComponent;
  let fixture: ComponentFixture<TodosFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
