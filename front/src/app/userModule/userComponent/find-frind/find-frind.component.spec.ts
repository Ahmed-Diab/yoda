import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFrindComponent } from './find-frind.component';

describe('FindFrindComponent', () => {
  let component: FindFrindComponent;
  let fixture: ComponentFixture<FindFrindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFrindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFrindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
