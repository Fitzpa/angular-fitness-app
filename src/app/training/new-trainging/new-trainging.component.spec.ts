import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTraingingComponent } from './new-trainging.component';

describe('NewTraingingComponent', () => {
  let component: NewTraingingComponent;
  let fixture: ComponentFixture<NewTraingingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTraingingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTraingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
