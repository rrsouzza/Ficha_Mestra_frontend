import { Component, OnInit } from '@angular/core';
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
  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    // this.store.dispatch(new LoadCharacterList({}));
  }

  routerNavigate(path: string) {
    this.router.navigate([path]);
  }
}
