import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyDAsboizA6KPuO_w4U11g9FYktI3jYkyN4",
    authDomain: "meudinheiro-fea5b.firebaseapp.com",
    databaseURL: "https://meudinheiro-fea5b.firebaseio.com",
    projectId: "meudinheiro-fea5b",
    storageBucket: "meudinheiro-fea5b.appspot.com",
    messagingSenderId: "443857441518",
    appId: "1:443857441518:web:5f2b359e0133d18a1399ff",
    measurementId: "G-2ZHPDWT74Q"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;