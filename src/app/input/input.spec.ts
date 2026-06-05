import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputToDo } from './input';

describe('InputToDo', () => {
  let component: InputToDo;
  let fixture: ComponentFixture<InputToDo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputToDo],
    }).compileComponents();

    fixture = TestBed.createComponent(InputToDo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
