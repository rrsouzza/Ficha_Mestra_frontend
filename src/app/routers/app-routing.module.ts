import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../screens/login/login.component';
import { MainScreenComponent } from '../screens/main-screen/main-screen.component';
import { pagesRouter } from './pages-routing.module';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { UserRegisterComponent } from '../screens/user-register/user-register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'new-user', component: UserRegisterComponent },
  {
    path: '',
    component: MainScreenComponent,
    children: pagesRouter,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
