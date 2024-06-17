export class AppConfig {
  // static baseAddress: string;

  // static baseUrl: string = 'https://ficha-mestra-backend.onrender.com';
  static baseUrl: string = 'http://127.0.0.1:5000/api';

  static liveUrl: string;

  static defaultHeaders = {
    headers: { 'Content-Type': 'application/json' },
  };
}
