import { Component } from '@angular/core';
import { AppRoutingModule } from './routers/app-routing.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    AppRoutingModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
