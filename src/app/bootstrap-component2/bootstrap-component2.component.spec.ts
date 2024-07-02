import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponent2Component } from './bootstrap-component2.component';

describe('BootstrapComponent2Component', () => {
  let component: BootstrapComponent2Component;
  let fixture: ComponentFixture<BootstrapComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootstrapComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
