import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-titre',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatToolbar,
    NgClass
  ],
  templateUrl: './titre.component.html',
  styleUrl: './titre.component.css'
})
export class TitreComponent {
  isConnected: boolean | undefined; //TODO

}
