import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { LoadCharacterList } from '../../store/character/character.actions';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent implements AfterViewInit {
  menuOptions = [
    { label: 'Home', router: '/home' },
    { label: 'Personagens', router: '/characters' },
  ];

  currentRoute: string = '/home';

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngAfterViewInit(): void {
    this.authService.currentUser();
    this.store.dispatch(new LoadCharacterList());
  }

  routerNavigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }
}
