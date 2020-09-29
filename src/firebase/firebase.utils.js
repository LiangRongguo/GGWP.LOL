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

/**
 * function to create a user profile in the firestore if not existed
 * @param userAuth
 * @param additionalData
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if no user auth, simply return
  if (!userAuth) return;

  // query inside the firestore
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    // if user not yet exist, create one prrofile for him/her!

    const { displayName, email } = userAuth; // user name
    const create_time = new Date(); // creation date time

    try {
      await userRef.set({
        displayName,
        email,
        create_time,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user profile", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
