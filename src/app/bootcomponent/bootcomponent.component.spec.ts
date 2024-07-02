import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcomponentComponent } from './bootcomponent.component';

describe('BootcomponentComponent', () => {
  let component: BootcomponentComponent;
  let fixture: ComponentFixture<BootcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
