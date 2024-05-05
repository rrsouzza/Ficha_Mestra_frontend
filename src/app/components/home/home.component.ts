import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { LoadCharacterList } from '../../store/character/character.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentUser: User = {
    id: '',
    email: '',
    name: 'Usuário',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.authService.currentUser().then(
      (userInfo) => {
        if (userInfo) this.currentUser = userInfo;
      },
    );

    this.store.dispatch(new LoadCharacterList({}));
  }

  routerNavigate(path: string) {
    this.router.navigate([path]);
  }
}
