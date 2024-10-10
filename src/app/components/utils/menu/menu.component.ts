import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatLine} from "@angular/material/core";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    MatSidenavModule,
    MatNavList,
    MatToolbar,
    MatIcon,
    MatListItem,
    RouterOutlet,
    MatIconButton,
    MatLine,
    NgForOf
  ]
})
export class MenuComponent {
  navLinks = [
    { label: 'Main Controls', path: 'main-controls' },
    { label: 'Config Settings', path: 'config-settings' },
    { label: 'Kinematics', path: 'kinematics' },
    { label: 'G-code', path: 'gcode' },
    { label: 'Vision', path: 'vision' },
    { label: 'Registers', path: 'registers' },
  ];

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
