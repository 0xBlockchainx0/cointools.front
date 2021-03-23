// ~/plugins/firebase.js

import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWGj0bOQgjB_0eo2SAhyJXf5-4tnHf6kY",
  authDomain: "cointools-e0d8b.firebaseapp.com",
  projectId: "cointools-e0d8b",
  storageBucket: "cointools-e0d8b.appspot.com",
  messagingSenderId: "849879752955",
  appId: "1:849879752955:web:101c8c085549b72d2fd05e",
  measurementId: "G-D6P2X1069Y"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase