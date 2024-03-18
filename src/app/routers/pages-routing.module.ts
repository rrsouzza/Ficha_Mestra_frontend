import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";

export const pagesRouter: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
