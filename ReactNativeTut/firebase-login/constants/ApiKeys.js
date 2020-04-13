import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7eQkQ6efs6v2Rdr-R_MN8yXa7jSbBr28",
    authDomain: "loginproject-c9db8.firebaseapp.com",
    databaseURL: "https://loginproject-c9db8.firebaseio.com",
    projectId: "loginproject-c9db8",
    storageBucket: "loginproject-c9db8.appspot.com",
    messagingSenderId: "865616367062",
    appId: "1:865616367062:web:7d1f5c9ce977fe23fbe877",
    measurementId: "G-MFFWMECVB8",
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//firebase.firestore();

export default firebase;
