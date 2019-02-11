import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypointComponent } from './paypoint.component';

describe('PaypointComponent', () => {
  let component: PaypointComponent;
  let fixture: ComponentFixture<PaypointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
