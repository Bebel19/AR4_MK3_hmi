import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCard, MatCardContent, MatCardTitle } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-main-controls',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FlexLayoutModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatSelect,
    MatOption,
  ],
  templateUrl: './main-controls.component.html',
  styleUrls: ['./main-controls.component.css'],
})
export class MainControlsComponent {
  programName: string = '';
  speed: number = 25;
  acceleration: number = 20;
  deceleration: number = 20;
  ramp: number = 100;

  position: { x: number; y: number; z: number; rx: number; ry: number; rz: number } = {
    x: 0,
    y: 0,
    z: 0,
    rx: 0,
    ry: 0,
    rz: 0
  };

  // Joints configuration
  joints = [
    { name: 'J1', angle: 0, safe: true },
    { name: 'J2', angle: 0, safe: true },
    { name: 'J3', angle: 0, safe: true },
    { name: 'J4', angle: 0, safe: true },
    { name: 'J5', angle: 0, safe: true },
    { name: 'J6', angle: 0, safe: true },
  ];

  minAngle = -180;
  maxAngle = 180;

  // Properties for Logic Control Section
  conditionType: string = 'Input';
  conditionTypes: string[] = ['Input', 'Output', 'Position'];
  logicCondition: string = '';
  isCameraOn: boolean = false;
  // for status indicators
  isRobotConnected: boolean = true;
  isProgramRunning: boolean = false;
  isCalibrating: boolean = false;

  // Helper function to access position safely
  getAxis(axis: string): keyof typeof this.position {
    return axis as keyof typeof this.position;
  }

  // Methods for safe position control
  getPositionValue(axis: keyof typeof this.position): number {
    return this.position[axis];
  }

  setPositionValue(axis: keyof typeof this.position, value: number): void {
    this.position[axis] = value;
  }

  incrementPosition(axis: keyof typeof this.position): void {
    this.position[axis] += 1;
  }

  decrementPosition(axis: keyof typeof this.position): void {
    this.position[axis] -= 1;
  }

  // Joint controls
  increaseAngle(joint: any) {
    if (joint.angle < this.maxAngle) {
      joint.angle += 5;
    }
  }

  decreaseAngle(joint: any) {
    if (joint.angle > this.minAngle) {
      joint.angle -= 5;
    }
  }

  loadProgram() {
    console.log('Program loaded:', this.programName);
  }

  newProgram() {
    console.log('New program created');// TODO
  }

  startProgram() {
    console.log('Program started');// TODO
  }

  stopProgram() {
    console.log('Program stopped');// TODO
  }
  // Methods for handling logic controls
  insertIfCommand() {
    console.log(`IF Command Inserted: ${this.conditionType} ${this.logicCondition}`);// TODO
  }

  waitInputOn() {
    console.log('Wait for Input to turn ON');// TODO
  }

  waitInputOff() {
    console.log('Wait for Input to turn OFF');// TODO
  }

  setOutputOn() {
    console.log('Set Output to ON');// TODO
  }

  setOutputOff() {
    console.log('Set Output to OFF');// TODO
  }
  // Methods for Special Commands
  playGCode() {
    console.log('GCode execution started');// TODO
  }

  cameraOn() {
    console.log('Camera turned ON');// TODO
  }

  cameraOff() {
    console.log('Camera turned OFF');// TODO
  }

  autoCalibrate() {
    console.log('Automatic calibration started');// TODO
  }

  toggleCamera() {
    this.isCameraOn = !this.isCameraOn;
    console.log(this.isCameraOn ? 'Camera turned ON' : 'Camera turned OFF');
  }
}
