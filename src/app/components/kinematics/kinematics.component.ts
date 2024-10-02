import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-kinematics',
  standalone: true,
  templateUrl: './kinematics.component.html',
  styleUrls: ['./kinematics.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexModule,
  ],
})
export class KinematicsComponent {
  // Déclaration des variables utilisées dans le composant
  motorDirections = [
    { name: 'J1 Motor Dir', direction: 1 },
    { name: 'J2 Motor Dir', direction: 1 },
    { name: 'J3 Motor Dir', direction: 1 },
    { name: 'J4 Motor Dir', direction: 1 },
    { name: 'J5 Motor Dir', direction: 1 },
    { name: 'J6 Motor Dir', direction: 1 },
    { name: 'J7 Motor Dir', direction: 0 },
    { name: 'J8 Motor Dir', direction: 1 },
    { name: 'J9 Motor Dir', direction: 0 }
  ];

  calibrations = [
    { name: 'J1 Calibration Dir', direction: 1 },
    { name: 'J2 Calibration Dir', direction: 0 },
    { name: 'J3 Calibration Dir', direction: 1 },
    { name: 'J4 Calibration Dir', direction: 0 },
    { name: 'J5 Calibration Dir', direction: 1 },
    { name: 'J6 Calibration Dir', direction: 0 },
    { name: 'J7 Calibration Dir', direction: 0 },
    { name: 'J8 Calibration Dir', direction: 0 },
    { name: 'J9 Calibration Dir', direction: 0 }
  ];

  positionLimits = [
    { joint: 'J1', posLimit: 180, negLimit: -180 },
    { joint: 'J2', posLimit: 170, negLimit: -170 },
    { joint: 'J3', posLimit: 170, negLimit: -170 },
    { joint: 'J4', posLimit: 180, negLimit: -180 },
    { joint: 'J5', posLimit: 105, negLimit: -105 },
    { joint: 'J6', posLimit: 180, negLimit: -180 }
  ];

  encoderSettings = [
    { name: 'J1 Step/Deg', stepDeg: 44.4444, encoderCPR: 4000 },
    { name: 'J2 Step/Deg', stepDeg: 55.5555, encoderCPR: 4000 },
    { name: 'J3 Step/Deg', stepDeg: 55.5555, encoderCPR: 4000 },
    { name: 'J4 Step/Deg', stepDeg: 49.7777, encoderCPR: 4000 },
    { name: 'J5 Step/Deg', stepDeg: 21.8602, encoderCPR: 4000 },
    { name: 'J6 Step/Deg', stepDeg: 22.2222, encoderCPR: 4000 }
  ];

  dhParameters = [
    { joint: 'J1', theta: 0, alpha: -90, d: 169.77, a: 64.2 },
    { joint: 'J2', theta: -90, alpha: 0, d: 305, a: 0 },
    { joint: 'J3', theta: 180, alpha: -90, d: 0, a: 0 },
    { joint: 'J4', theta: 0, alpha: 90, d: 222.63, a: 0 },
    { joint: 'J5', theta: 0, alpha: -90, d: 0, a: 0 },
    { joint: 'J6', theta: 0, alpha: 0, d: 41, a: 0 }
  ];

  toolFrameOffset = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 };

  disableWristRotation = false;

  loadDefaults(version: string) {
    console.log(`Load ${version} Defaults`);
  }

  saveSettings() {
    console.log('Settings saved.');
  }
}
