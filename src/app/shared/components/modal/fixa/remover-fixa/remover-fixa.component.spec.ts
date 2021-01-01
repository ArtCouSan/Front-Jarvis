import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverFixaComponent } from './remover-fixa.component';

describe('RemoverFixaComponent', () => {
  let component: RemoverFixaComponent;
  let fixture: ComponentFixture<RemoverFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
