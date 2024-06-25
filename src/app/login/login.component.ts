import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get userName() {
    return this.loginForm.get('userName')
  }

  get password() {
    return this.loginForm.get('password')
  }

  loginUser() {
    if (this.loginForm.valid) {
      this.authService.authLogin(this.loginForm.value).subscribe(login => {
        console.log('login working', login);
      })
    } else {
      console.log('invalid form');
    }
  }
}
