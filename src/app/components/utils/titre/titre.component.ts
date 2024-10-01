import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-titre',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './titre.component.html',
  styleUrl: './titre.component.css'
})
export class TitreComponent {

}
