import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingsComponent } from './event-bindings.component';

describe('EventBindingsComponent', () => {
  let component: EventBindingsComponent;
  let fixture: ComponentFixture<EventBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventBindingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
