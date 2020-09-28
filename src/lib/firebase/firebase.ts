import firebase from 'firebase'
import 'firebase/firestore'

import { firebaseConfig } from './config'

class Fire {
	constructor() {
		firebase.initializeApp(firebaseConfig)
	}

	imagesCollection() {
		return firebase.firestore().collection('images')
	}
}

export const Firebase = new Fire()
