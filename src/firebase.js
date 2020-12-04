import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYu5efnk7GwZ13EAOu1w76_yKzHFA--kw",
    authDomain: "facebook-clone-aa47d.firebaseapp.com",
    databaseURL: "https://facebook-clone-aa47d.firebaseio.com",
    projectId: "facebook-clone-aa47d",
    storageBucket: "facebook-clone-aa47d.appspot.com",
    messagingSenderId: "33866704930",
    appId: "1:33866704930:web:7100e1d05cdd188a56027b",
    measurementId: "G-VGXWKM5ERJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;