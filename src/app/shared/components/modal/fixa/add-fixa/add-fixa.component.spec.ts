import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFixaComponent } from './add-fixa.component';

describe('AddFixaComponent', () => {
  let component: AddFixaComponent;
  let fixture: ComponentFixture<AddFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
