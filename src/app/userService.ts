import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'

interface user {
	uid: string
}
@Injectable()

export class UserService {

    public user: user
    
    constructor(private afAuth: AngularFireAuth) {

    }
    
	setUser(user: user) {
		this.user = user
	}

	getUID(): string {
		return this.user.uid
    }
    

}