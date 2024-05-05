import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { SetUser } from '../../store/user/user.actions';
import { AppStatus } from '../../interface/app.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFormGroup: FormGroup;

  loginScreenStatus: AppStatus = AppStatus.EMPTY;

  get isFormValid(): boolean {
    return this.loginFormGroup.valid;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>,
  ) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  handleLoginClick() {
    this.loginScreenStatus = AppStatus.LOADING;

    const data = {
      email: this.loginFormGroup.controls['email'].value,
      password: this.loginFormGroup.controls['password'].value,
    };

    this.authService.login(data).subscribe({
      next: (res) => {
        this.store.dispatch(new SetUser({ id: res.user.id, email: res.user.email, name: res.user.displayName }));
        this.loginScreenStatus = AppStatus.SUCCESS;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Ocorreu um erro ao tentar fazer login!', err);
        this.loginScreenStatus = AppStatus.ERROR;
      }
    });
  }

  handleCreateAccountClick() {
    this.router.navigate(['/new-user']);
  }
}
