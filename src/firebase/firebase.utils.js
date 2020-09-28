import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDgIBhSngcrL8egIPH6hSA8Eio7HUTyuek",
  authDomain: "ggwp-bb7b9.firebaseapp.com",
  databaseURL: "https://ggwp-bb7b9.firebaseio.com",
  projectId: "ggwp-bb7b9",
  storageBucket: "ggwp-bb7b9.appspot.com",
  messagingSenderId: "36564391309",
  appId: "1:36564391309:web:b25d28d1682ad78e1f59c4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
