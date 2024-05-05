import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {
  menuOptions = [
    { label: 'Home', router: '/home' },
    { label: 'Personagens', router: '/characters' },
  ];

  currentRoute: string = '/home';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    })
  }

  routerNavigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }
}
