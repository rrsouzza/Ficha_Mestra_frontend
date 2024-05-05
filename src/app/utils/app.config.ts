export class AppConfig {
  // static baseAddress: string;

  static baseUrl: string = 'https://ficha-mestra-backend.onrender.com';

  static liveUrl: string;

  static defaultHeaders = {
    headers: { 'Content-Type': 'application/json' },
  };
}
