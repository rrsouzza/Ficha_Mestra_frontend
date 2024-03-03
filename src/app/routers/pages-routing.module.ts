import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";

export const pagesRouter: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];
