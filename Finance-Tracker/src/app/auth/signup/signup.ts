import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
    const user = { username: this.username, password: this.password };

    this.auth.signup(user).subscribe(() => {
      alert('Signup successful! Please login.');
      this.router.navigate(['/login']);
    });
  }
}
