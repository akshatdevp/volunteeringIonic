import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AuthenticatorService } from '@aws-amplify/ui-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
     private auth: AuthenticatorService
  ) { }

  onLogin(form: NgForm) {
    console.log('logged in');
    this.submitted = true;
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/new-schedule');
  }
  // services = "LKJASDLKAJSLDKJASLKDJASKL"
  services = {
    async validateCustomSignUp(formData: Record<string, string>) {
      console.log("validating")
      if (!formData['acknowledgement']) {
        return {
          acknowledgement: 'You must agree to the Terms & Conditions',
        };
      } else {
        return;
      }
    },
  };
}
