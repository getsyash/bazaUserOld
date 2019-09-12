import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'

interface user {
	uid: string

}

@Injectable()
export class UserService {
	private user: user

	constructor(private afAuth: AngularFireAuth) {

	}

	setUser(user: user) {
		this.user = user
	}


	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}


	async isAuthenticated() {
		if(this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		if(user) {
			this.setUser({
				uid: user.uid
			})

			return true
		}
		return false
	}

	getUID(): string {
		// return this.user.uid
		return 'QFmmcWO6T1P9a8kVZyDtKHWdLaI3';
	}
	getusername() {
		if (this.afAuth.auth.currentUser.displayName == ''){
			return 'Test User'
		}else {
			return this.afAuth.auth.currentUser.displayName
		}
	}
}