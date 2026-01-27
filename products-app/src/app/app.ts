import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `<app-parent></app-parent>`
})
export class AppComponent {}
