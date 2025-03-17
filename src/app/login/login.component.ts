import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  googleIcon = '../../assets/images/google-logo.png';

  onLogin() {
    this.router.navigate(['/dashboard']);
  }
}
