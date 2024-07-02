import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreStructDirsComponent } from './pre-struct-dirs.component';

describe('PreStructDirsComponent', () => {
  let component: PreStructDirsComponent;
  let fixture: ComponentFixture<PreStructDirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreStructDirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreStructDirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
