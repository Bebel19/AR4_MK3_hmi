import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcodeComponent } from './gcode.component';

describe('GcodeComponent', () => {
  let component: GcodeComponent;
  let fixture: ComponentFixture<GcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
