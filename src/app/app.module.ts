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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        headerName: 'Authorization',
        authScheme: 'Bearer ',
        tokenGetter,
        // whitelistedDomains: [],// environment.whitelistedDomains,
        // blacklistedRoutes: [],
      },
    }),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
