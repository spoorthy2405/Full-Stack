import { Component } from '@angular/core';
import { HomesComponent } from './homes/homes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomesComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
