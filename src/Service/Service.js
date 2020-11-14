
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCMl8krpE397bydVFm6MaBVhVpv4pxKg14",
    authDomain: "olx-assignment-2559f.firebaseapp.com",
    databaseURL: "https://olx-assignment-2559f.firebaseio.com",
    projectId: "olx-assignment-2559f",
    storageBucket: "olx-assignment-2559f.appspot.com",
    messagingSenderId: "115253154137",
    appId: "1:115253154137:web:933f8da500f9e1c8c4bc48",
    measurementId: "G-JVNSDF3ZMN"
};
// const Firebase = firebase.initializeApp(firebaseConfig);
// export default Firebase;
firebase.initializeApp(firebaseConfig);
export default firebase;