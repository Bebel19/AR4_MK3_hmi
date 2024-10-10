import { Routes } from '@angular/router';
import { MainControlsComponent } from './components/main-controls/main-controls.component';
import { ConfigSettingsComponent } from './components/config-settings/config-settings.component';
import { KinematicsComponent } from './components/kinematics/kinematics.component';
import { VisionComponent } from './components/vision/vision.component';
import { GcodeComponent } from './components/gcode/gcode.component';
import {RegistersComponent} from './components/registers/registers.component';

export const routes: Routes = [
  { path: 'main-controls', component: MainControlsComponent },
  { path: 'config-settings', component: ConfigSettingsComponent },
  { path: 'kinematics', component: KinematicsComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'gcode', component: GcodeComponent },
  { path: 'registers', component: RegistersComponent},
  { path: '', redirectTo: '/main-controls', pathMatch: 'full' },
];
