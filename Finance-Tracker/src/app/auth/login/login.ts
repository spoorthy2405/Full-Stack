import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe(users => {
      if (users.length > 0) {
        localStorage.setItem('userId', users[0].id);
        localStorage.setItem('username', users[0].username);
        this.router.navigate(['/dashboard']);
      } else {
        alert("Invalid username or password");
      }
    });
  }
}
