import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTraingingComponent } from './past-trainging.component';

describe('PastTraingingComponent', () => {
  let component: PastTraingingComponent;
  let fixture: ComponentFixture<PastTraingingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTraingingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTraingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
