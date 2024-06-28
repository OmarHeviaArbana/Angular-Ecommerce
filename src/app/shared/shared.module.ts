import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './component/navbar/navbar.component';
import { AuthStoreService } from './services/auth-store.service';
import { AuthInterceptor } from './services/auth-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    AuthStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    RouterModule
  ]
})
export class SharedModule { }
