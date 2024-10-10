import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gcode',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gcode.component.html',
  styleUrls: ['./gcode.component.css']
})
export class GCodeComponent {
  // Variables for handling the GCode file and inputs
  gcodeStatus: string = 'IDLE';
  currentRow: number | null = null;
  filename: string = '';

  // Example methods to handle button actions
  loadProgram() {
    // Logic to load the program
    console.log("Program loaded");
  }

  convertAndUpload() {
    // Logic for converting and uploading
    console.log("Converting and uploading to SD");
  }

  stopConversion() {
    // Logic to stop conversion
    console.log("Stopped conversion");
  }

  playGcodeFile() {
    // Logic to play the GCode file
    console.log("Playing GCode File");
  }

  saveData() {
    // Logic to save data
    console.log("Data saved");
  }
}
