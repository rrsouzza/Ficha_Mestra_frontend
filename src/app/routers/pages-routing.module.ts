import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { CharactersComponent } from "../components/characters/characters.component";
import { CharacterDetailComponent } from "../components/characters/character-detail/character-detail.component";

export const pagesRouter: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
