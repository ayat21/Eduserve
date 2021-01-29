import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  ngOnInit(): void {
  }

  errorMessage: string;
  pageTitle = 'Log In';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  constructor(private authService: AuthService,
              private router: Router) { }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/courses']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
