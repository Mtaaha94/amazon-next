import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCk4UUGq-xqzbjpFQi8aeXM8rsOxgWOr1g",
  authDomain: "amazn-clone-f22eb.firebaseapp.com",
  projectId: "amazn-clone-f22eb",
  storageBucket: "amazn-clone-f22eb.appspot.com",
  messagingSenderId: "359834840238",
  appId: "1:359834840238:web:fefeb17c3adaadfe6ad13f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app;
const db = app.firestore();

export default db;
// client-id 359834840238-v9dhdfaeogi2ts79np3hdk0bj3r2pc82.apps.googleusercontent.com
// rhu95cxSH-TXVbyg0WpL2M1W client-secret
