import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { TodoComponent } from './app/todo/todo';

bootstrapApplication(TodoComponent, {
  providers: [provideHttpClient()]
});
