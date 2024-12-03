import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-inputs-outputs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    FlexModule,
  ],
  templateUrl: './inputs-outputs.component.html',
  styleUrls: ['./inputs-outputs.component.scss'],
})
export class InputsOutputsComponent {
  // Définition de la propriété servos
  servos = [
    { name: 'Servo 0', number: 0, state: 'OFF', position: 0 },
    { name: 'Servo 1', number: 1, state: 'OFF', position: 0 },
    { name: 'Servo 2', number: 2, state: 'OFF', position: 0 },
    { name: 'Servo 3', number: 3, state: 'OFF', position: 0 },
    { name: 'Servo 4', number: 4, state: 'OFF', position: 0 },
    { name: 'Servo 5', number: 5, state: 'OFF', position: 0 },
    { name: 'Servo 6', number: 6, state: 'OFF', position: 0 },
  ];

    // Liste des sorties numériques
    digitalOutputs = [
      { name: 'DO 1', number: 1, state: 'OFF', pinNumber: 2 },
      { name: 'DO 2', number: 2, state: 'OFF', pinNumber: 3 },
      { name: 'DO 3', number: 3, state: 'OFF', pinNumber: 4 },
      { name: 'DO 4', number: 4, state: 'OFF', pinNumber: 5 },
      { name: 'DO 5', number: 5, state: 'OFF', pinNumber: 6 },
      { name: 'DO 6', number: 6, state: 'OFF', pinNumber: 7 },
    ];

  // Méthode pour basculer l'état d'un servomoteur
  toggleServoState(servo: any) {
    // Bascule entre ON et OFF
    servo.state = servo.state === 'ON' ? 'OFF' : 'ON';
  }

    // Méthode pour basculer l'état d'une sortie numérique
    toggleOutputState(output: any) {
      output.state = output.state === 'ON' ? 'OFF' : 'ON';
    }
}

