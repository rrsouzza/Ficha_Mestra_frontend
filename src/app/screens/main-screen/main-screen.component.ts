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
    { label: 'Link 1', router: '/link1' },
    { label: 'Link 2', router: '/link2' },
    { label: 'Link 3', router: '/link3' },
    { label: 'Link 4', router: '/link4' },
  ];

  username: string = 'Josué';

  currentRoute: string = '/home';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  routerNavigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }
}
