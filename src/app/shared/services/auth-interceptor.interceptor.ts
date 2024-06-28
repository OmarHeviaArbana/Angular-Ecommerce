import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStoreService } from './auth-store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authStoreService: AuthStoreService) {}

    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

      const authToken = this.authStoreService.getToken();

        if (authToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + authToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
