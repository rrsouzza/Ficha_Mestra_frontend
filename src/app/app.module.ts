import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { MaterialModule } from './material.module';
import { AvatarComponent } from './components/common/avatar/avatar.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './screens/user-register/user-register.component';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { reducers } from './store/app.reducer';
import { CharactersComponent } from './components/characters/characters.component';
import { AppEffects } from './store/app.effects';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainScreenComponent,
    AvatarComponent,
    UserRegisterComponent,
    CharactersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        headerName: 'Authorization',
        authScheme: 'Bearer ',
        tokenGetter,
        // whitelistedDomains: [],// environment.whitelistedDomains,
        // blacklistedRoutes: [],
      },
    }),
    StoreModule.forRoot(reducers),
    AppEffects,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
