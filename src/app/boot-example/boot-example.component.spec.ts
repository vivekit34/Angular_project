import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootExampleComponent } from './boot-example.component';

describe('BootExampleComponent', () => {
  let component: BootExampleComponent;
  let fixture: ComponentFixture<BootExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
