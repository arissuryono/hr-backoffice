import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMessage: any;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['test123', Validators.required],
    });
  }

  login() {
    this.authService.login();
    this.router.navigate(['/app']);
  }
}
