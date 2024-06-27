import { Component } from '@angular/core';
import { AuthStoreService } from '../services/auth-store.service';

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
  /* articleList: boolean = true;
  articleNewTemplate: boolean = false;
   articleNewReactive: boolean = false;

  showComponent(component: string) {
    this.articleList = false;
     this.articleNewTemplate = false;
    this.articleNewReactive = false;

    if (component === 'articleList') {
      this.articleList = true;
    }  else if (component === 'articleNewTemplate') {
      this.articleNewTemplate = true;
    }else if (component === 'articleNewReactive') {
      this.articleNewReactive = true;
    }
  } */

}
