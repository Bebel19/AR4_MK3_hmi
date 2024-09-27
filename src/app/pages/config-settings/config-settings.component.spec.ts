import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSettingsComponent } from './config-settings.component';

describe('ConfigSettingsComponent', () => {
  let component: ConfigSettingsComponent;
  let fixture: ComponentFixture<ConfigSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
