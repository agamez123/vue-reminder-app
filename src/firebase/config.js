//firebase 8 non modular
/* 
import firebase from 'firebase/app' 
import 'firebase/firestore' 
*/

//firebase 9 modular
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBwK_RNmxiMw5dN0xBbMvuogNit61i1Nw0",
    authDomain: "vuereminderapp.firebaseapp.com",
    projectId: "vuereminderapp",
    storageBucket: "vuereminderapp.appspot.com",
    messagingSenderId: "249622169706",
    appId: "1:249622169706:web:c76bd54b30577a40056213"
};

//firebase 8
/* 
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore() 
*/

//firebase 9
//init firebase
initializeApp(firebaseConfig)

//init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }