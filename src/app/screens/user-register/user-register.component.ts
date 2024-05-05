import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {
  newUserFormGroup: FormGroup;

  get isFormValid(): boolean {
    return this.newUserFormGroup.valid;
  }

  get shouldDisplayPasswordError(): boolean {
    return (
      !this.newUserFormGroup.controls['confirmPassword'].pending &&
      this.newUserFormGroup.controls['confirmPassword'].hasError('passwordsDontMatch')
    );
  }

  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    this.newUserFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required], [this.confirmPasswordMatch.bind(this)]),
    });
  }

  onBackToLoginClick() {
    this.router.navigate(['/login']);
  }

  handleCreateUserClick() {
    if (this.isFormValid) {
      const data = {
        name: this.newUserFormGroup.controls['name'].value,
        email: this.newUserFormGroup.controls['email'].value,
        password: this.newUserFormGroup.controls['password'].value,
      };

      this.userService.createUser(data).subscribe({
        next: (res: any) => {
          if (res.success) {
            // Mostrar uma notificação indicando que o usuário foi criado com sucesso
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {
          console.error('Ocorreu um erro ao tentar criar o usuário!', err);
        },
      });
    }
  }

  /* Async Validators */

  confirmPasswordMatch(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise<any>((resolve) => {
      if (control.value !== this.newUserFormGroup.controls['password'].value) {
        resolve({ passwordsDontMatch: true });
      } else {
        resolve(null);
      }
    });
  }
}
