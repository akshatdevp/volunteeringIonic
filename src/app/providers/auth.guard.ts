import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private auth: AuthenticatorService
	) { }
	canActivate(route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
		): any {

		return Auth.currentAuthenticatedUser().then((user) => {
			if(user) {
        console.log("HELLO")
				return Promise.resolve(true);
			} else {
        console.log("Bye")
				this.router.navigate(['/login']);
				return Promise.resolve(false);
			}
		}).catch((err) => {
      console.log(err)
			this.router.navigate(['/login']);
			return Promise.resolve(false);
		});
	}
}
