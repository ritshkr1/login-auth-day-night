import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from '../shared/authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthguardService) {}
  loginData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  } = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  isClicked: boolean = false;

  onClick() {
    console.log(this.loginData);
    this.isClicked = true;
    // localStorage.setItem('loginData', JSON.stringify(this.loginData));
    this.router.navigate(['/home']);
  }
}
