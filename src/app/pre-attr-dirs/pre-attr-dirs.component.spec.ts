import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAttrDirsComponent } from './pre-attr-dirs.component';

describe('PreAttrDirsComponent', () => {
  let component: PreAttrDirsComponent;
  let fixture: ComponentFixture<PreAttrDirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreAttrDirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreAttrDirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
