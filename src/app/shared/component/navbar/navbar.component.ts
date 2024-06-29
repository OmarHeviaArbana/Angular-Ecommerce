import { Component } from '@angular/core';
import { AuthStoreService } from '../../../shared/services/auth-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public authStoreService: AuthStoreService) {}

  logOut(): void {
    this.authStoreService.logOut();
  }
}
