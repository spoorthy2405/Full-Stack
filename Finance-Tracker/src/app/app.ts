import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  //selector: 'app-root' This means: <app-root></app-root> Angular looks for this tag inside index.html and replaces it with your UI.
  imports: [RouterModule],
  //imports: [RouterOutlet] allows my app to show different pages inside <router-outlet>.
// app.html: <h1>My App</h1> <router-outlet></router-outlet>
// app.ts: imports: [RouterOutlet]  ✔ Pages appear ✔ Navigation works
  templateUrl: './app.html',
  //Angular renders app.html when this component loads.
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2A-finance-tracker');
  username = '';

constructor(private auth: AuthService) {}

ngOnInit() {
  this.username = localStorage.getItem('username') || '';
}

logout() {
  this.auth.logout();
}

}

//title 
// This is a property (variable) of the App component class.
// Its purpose:
// Holds the application title
// Used in the HTML template (app.html) (like this : <h1>{{ title() }}</h1>
// to display the title dynamically.)

//signal
// signal() is Angular’s reactive state container.
// Initial value → '2A-finance-tracker'
// Angular will watch this value
// If it changes → UI updates automatically

//readonly
//You cannot reassign title
// this.title = signal('New Title'); // ❌ ERROR
// ✔ But this IS allowed:
// this.title.set('New Title'); // ✅

//protected means:
// Accessible inside App class
// Accessible in app.html