import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA1HgzMgJt5cXI_3LgO0u3cGLxLXrbI2cQ",
    authDomain: "twitterclone-25cb6.firebaseapp.com",
    databaseURL: "https://twitterclone-25cb6.firebaseio.com",
    projectId: "twitterclone-25cb6",
    storageBucket: "twitterclone-25cb6.appspot.com",
    messagingSenderId: "128746739862"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
