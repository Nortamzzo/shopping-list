import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereHaveYouGoneComponent } from './where-have-you-gone.component';

describe('WhereHaveYouGoneComponent', () => {
  let component: WhereHaveYouGoneComponent;
  let fixture: ComponentFixture<WhereHaveYouGoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereHaveYouGoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereHaveYouGoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
