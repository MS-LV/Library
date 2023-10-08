import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleMenu() {
    this.sidenav.toggle().then(r => 0);
  }
}
