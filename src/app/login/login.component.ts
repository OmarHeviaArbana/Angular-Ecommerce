import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { AuthStoreService } from '../services/auth-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private authStoreService: AuthStoreService){
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get userName(): any | null {
    return this.loginForm.get('userName')
  }

  get password(): any | null {
    return this.loginForm.get('password')
  }

  loginUser(): void {
    if (this.loginForm.valid) {
        this.authService.authLogin(this.loginForm.value).subscribe({
        error: (error) => {
          alert((error.error.msg))
        }
      });
    } else {
      alert('Invalid data Login')
    }
  }

  userIsAuth(): boolean {
    return this.authStoreService.isAuth()
  }
}

