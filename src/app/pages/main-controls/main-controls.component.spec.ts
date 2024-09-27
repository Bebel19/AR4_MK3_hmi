import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainControlsComponent } from './main-controls.component';

describe('MainControlsComponent', () => {
  let component: MainControlsComponent;
  let fixture: ComponentFixture<MainControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
