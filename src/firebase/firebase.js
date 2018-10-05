// Initialize Firebase
import firebase from "firebase";
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyCanJmFf7FSXRnvHWfjqbeoIg1AHkG7wrk",
  authDomain: "fun-food-friends-ad0f7.firebaseapp.com",
  databaseURL: "https://fun-food-friends-ad0f7.firebaseio.com",
  projectId: "fun-food-friends-ad0f7",
  storageBucket: "",
  messagingSenderId: "856546701734"
};

if(!firebase.apps.length) {
    firebase.initializeApp(config);
}

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.database();

export {
    provider,
    auth,
    db
};
