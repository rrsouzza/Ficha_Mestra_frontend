import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AppConfig } from './utils/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private platformLocation: PlatformLocation) {
    // AppConfig.baseAddress = (this.platformLocation as any)._location.origin;
    // AppConfig.baseUrl = `${AppConfig.baseAddress}/api`;
  }
}
