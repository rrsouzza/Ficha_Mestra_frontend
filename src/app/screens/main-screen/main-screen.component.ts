import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {
  menuOptions = [
    { label: 'Home', router: '/home' },
  ];

  username: string = 'Josué';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  routerNavigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }
}
