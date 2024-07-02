import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingCalculatorComponent } from './event-binding-calculator.component';

describe('EventBindingCalculatorComponent', () => {
  let component: EventBindingCalculatorComponent;
  let fixture: ComponentFixture<EventBindingCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventBindingCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
