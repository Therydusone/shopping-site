import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAs12hXA18PbKkwSpZqCVHN7YICb7i7G8I",
    authDomain: "shopping-site-c6b3f.firebaseapp.com",
    databaseURL: "https://shopping-site-c6b3f.firebaseio.com",
    projectId: "shopping-site-c6b3f",
    storageBucket: "shopping-site-c6b3f.appspot.com",
    messagingSenderId: "798624484650",
    appId: "1:798624484650:web:22bf03e48c0dfa92fea253",
    measurementId: "G-WJFGHP2XFQ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {

        await userRef.set({
          displayName,
          email, 
          createdAt,
          ...additionalData
        })
      } catch (error) {
      console.log('error creating user')
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
