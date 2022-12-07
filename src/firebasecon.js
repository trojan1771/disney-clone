import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDm_Fr65cMjdst_VPWB4X6pccTnCRAWQOU',
  authDomain: 'disneyplus-clone-9044f.firebaseapp.com',
  projectId: 'disneyplus-clone-9044f',
  storageBucket: 'disneyplus-clone-9044f.appspot.com',
  messagingSenderId: '999747600525',
  appId: '1:999747600525:web:ff1178532f686153a2a2c4',
  measurementId: 'G-BD7GPMHTBG',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
export { auth, provider, storage }
export default db
