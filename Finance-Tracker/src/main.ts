import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
//  App- root component defined in app.ts and uses app.html as template
// appconfig-configuration file provides routing, httpclien, global providers
//bootstrapApplication- creates,initializes and runs angular app in browser
//What happens here step by step:
//1️⃣ Angular creates the app environment
//2️⃣ Loads the App component
//3️⃣ Applies global configuration
//4️⃣ Searches for <app-root> in index.html
//5️⃣ Renders app.html
//6️⃣ Loads routed components