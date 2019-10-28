import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAJZEU_UtdvDjin5bs2GFdxFYnIkjaH7pM',
  authDomain: 'ecommercesite-29055.firebaseapp.com',
  databaseURL: 'https://ecommercesite-29055.firebaseio.com',
  projectId: 'ecommercesite-29055',
  storageBucket: 'ecommercesite-29055.appspot.com',
  messagingSenderId: '185745907569',
  appId: '1:185745907569:web:e432579c5af64ec1dde0d0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
