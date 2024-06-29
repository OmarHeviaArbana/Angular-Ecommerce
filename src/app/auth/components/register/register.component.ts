import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      userName:['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get userName(): any | null {
    return this.registerForm.get('userName')
  }

  get password(): any | null{
    return this.registerForm.get('password')
  }

  registerUser() : void {
    if (this.registerForm.valid) {
      this.authService.authRegister(this.registerForm.value).subscribe( {
        next: (response) => {
          alert(response)
          console.log('Loged User', response);
          this.registerForm.reset()
        },
        error: (error) => {
          alert((error.error.msg))
        }
      })
    } else {
      alert("Invalid Form")
      console.log('invalid form');
    }
  }


}
