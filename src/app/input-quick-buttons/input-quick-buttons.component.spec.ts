import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuickButtonsComponent } from './input-quick-buttons.component';

describe('InputQuickButtonsComponent', () => {
  let component: InputQuickButtonsComponent;
  let fixture: ComponentFixture<InputQuickButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputQuickButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputQuickButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
