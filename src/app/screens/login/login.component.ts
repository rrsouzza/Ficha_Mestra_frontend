import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFormGroup: FormGroup;

  get isFormValid(): boolean {
    return this.loginFormGroup.valid;
  }

  constructor(private router: Router) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  handleLogin() {
    const data = {
      email: this.loginFormGroup.controls['email'].value,
      password: this.loginFormGroup.controls['password'].value,
    };

    // Chamar o authService e realizar o login

    this.router.navigate(['/home']);
  }
}
