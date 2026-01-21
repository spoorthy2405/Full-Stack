import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};

 //1️⃣ Angular reads appConfig
// 2️⃣ Registers browser error listeners
// 3️⃣ Enables routing system
// 4️⃣ Loads route definitions
// 5️⃣ App becomes navigation-ready
